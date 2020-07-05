<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;



include_once APPPATH . 'libraries/phpmailer/PHPMailer.php';
include_once APPPATH . 'libraries/phpmailer/Exception.php';
include_once APPPATH . 'libraries/phpmailer/SMTP.php';

class User_model extends CI_Model {
 

	public function register()
	{
		$post = $this->input->post(); 
		$rand_num = rand(1000,10000);
		$register = $this->db->insert('tbl_account',
			array(
	    		'fname'     => ucwords($post['fname']),
	    		'mi'        => ucwords($post['mi']),
	    		'lname'     => ucwords($post['lname']),
	    		'address'   => ucwords($post['address']),
	    		'email'     => strtolower($post['email']),
	    		'cp_num'    => $post['cp_num'],
	    		'username'  => strtolower($post['username']),
	    		'pass'      => strtolower($post['pass']),
	    		'gender'    => ucfirst($post['gender']),
	    		'type'      => 'patient',
	    		'status'    => 0,
	    		'verify'    => 0,
	    		'code'      => $rand_num
			)
		);
		 
		return $this->sendEmail($post['email'], $rand_num);
	}

	public function verify($code)
	{
		$this->db->update('tbl_account',
			array('verify' => 1),
			array('code' => $code)
		);
		redirect(site_url('home'));
	}

	public function sendEmail($email, $code = 432423)
	{
		try
		{
			$mail = new PHPMailer;
			$mail->isSMTP();                                   // Set mailer to use SMTP
			$mail->Host = 'smtp.gmail.com';                    // Specify main and backup SMTP servers
			$mail->SMTPAuth = true;                            // Enable SMTP authentication
			$mail->Username = 'gardioladentals@gmail.com';          // SMTP username
			$mail->Password = 'gardioladentals123'; // SMTP password
			$mail->SMTPSecure = 'tls';                         // Enable TLS encryption, `ssl` also accepted
			$mail->Port = 587;                                 // TCP port to connect to
			$mail->SMTPOptions = array(
				'ssl' => array(
					'verify_peer' => false,
					'verify_peer_name' => false, 
					'allow_self_signed' => true
				)
			);
			$mail->setFrom('gardioladentals@gmail.com', 'gardioladentals');
			$mail->addReplyTo('gardioladentals@gmail.com', 'gardioladentals');
			$mail->addAddress($email);   // Add a recipient 
			$mail->isHTML(true);  // Set email format to HTML

			$data['clinic_name'] = $this->getClinicName();
			$data['code'] = site_url('verify/'. $code);

			$mail->Subject = 'Registration';
			$mail->Body    = $this->load->view('emails/registration', $data, TRUE);

			$mail->send();
		 
			$this->session->set_flashdata('success', 
				"Registration Complete!\nPlease check your mailbox for confirmation \n Code ID: ".$code
			);
			redirect(base_url('home'));
		}
		catch(Exception $e)
		{
			echo 'message do not send';
			echo "Mail error" . $mail->ErrorInfo;
		}
	}

	public function getClinicName()
	{
		$query = $this->db->get_where('tbl_about', array('name' => 'basic'));
		
		if ($query->num_rows()) 
		{
			$information = json_decode($query->row()->description);

			return $information->name;
		}
		return ;
	}

 

}