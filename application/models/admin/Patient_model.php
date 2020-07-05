<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;



include_once APPPATH . 'libraries/phpmailer/PHPMailer.php';
include_once APPPATH . 'libraries/phpmailer/Exception.php';
include_once APPPATH . 'libraries/phpmailer/SMTP.php';

 
class Patient_model extends CI_Model
{ 
	

	public function getServices()
	{
		$query = $this->db->get_where('tbl_service', ['is_deleted' => 0]);
		return $query->result_array();
	}
  	
	public function savePatient()
  	{
  		$patient = $this->input->post('patient');

        $pass = 'walkin' . random_string('basic', 5);
        $username = 'walkin' . random_string('basic', 5);
        $this->sendEmail($patient['email'], $username, $pass);

  		$this->db->insert('tbl_account', [
            'fname' => ucwords($patient['fname']),
            'mi' => ucwords($patient['mi']),
            'lname' => ucwords($patient['lname']),
            'address' => ucwords($patient['address']),
            'email' => $patient['email'],
            'cp_num' => $patient['cp_num'],
            'gender' => $patient['gender'],
            'username' => $username,
            'pass' => $pass,
            'type' => 'patient',
            'verify' => 1,
            'status' => 0,
            'code' => random_string('basic', 5),
            'is_deleted' => 0
        ]);

  		$this->saveReservation($this->db->insert_id(), $patient);
 
  	}

    public function sendEmail($email, $username, $password)
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


        
        
        $mail->Subject = 'ACCOUNT REGISTRATION FOR WALKIN PATIENT';
        $mail->Body    = '

            <div class="container">
                <div class="jumbotron">
                    <center>
                        <h3>
                            <img style="float:center;" width="50" height="50" 
                                src="'.base_url('assets/assets/images/logo.svg').'" alt="" /> 
                            '.$this->getClinicName().'
                        </h3>
                        <p class="lead">REGISTRATION</p><br><hr>
                        <h4><b>CREDENTIALS</b></h4>
                        <p><label>Username: '.$username.'</label></p>
                        <p><label>Password: '.$password.'</label></p>
                    </center>
                     
                </div>
            </div>
        ';

        $mail->send();  
        // $this->session->set_flashdata('success', 'Successfully Updated');
        // redirect(base_url('admin/reservation'));
      }
      catch(Exception $e)
      {
        // echo 'message do not send';
        // echo "Mail error" . $mail->ErrorInfo;
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

  	public function saveReservation($patient_id, $reservation)
  	{
  		$details = $this->input->post('details');

  		$this->db->insert('tbl_reservation', [
            'patient_id' => $patient_id,
            'daystart' => $reservation['date'],
            'typeser' => $reservation['service'],
            'r_status' => 'pending',
            'timestart' => $reservation['time'],
            'recommendation' => 'N/A',
            'details' => json_encode($details)
        ]);
  	}



	public function getPatients()
	{ 
		$query = $this->db->get_where('tbl_account', [
            'type' => 'patient',
            'is_deleted' => 0
        ]); 

		return $query->result_array();
	}

}