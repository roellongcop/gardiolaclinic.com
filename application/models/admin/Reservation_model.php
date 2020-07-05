<?php
defined('BASEPATH') OR exit('No direct script access allowed');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;



include_once APPPATH . 'libraries/phpmailer/PHPMailer.php';
include_once APPPATH . 'libraries/phpmailer/Exception.php';
include_once APPPATH . 'libraries/phpmailer/SMTP.php';

class Reservation_model extends CI_Model
{

	public function getStatus()
	{
		$query = $this->db->select('name')
			->from('tbl_teeth_status')
			->where('is_deleted', 0)
			->order_by('name', 'ASC')
			->get();

		return $this->generatedResult($query->result_array());
	}

	public function generatedResult($records)
	{
		$result = [];
		foreach($records as $record)
		{
			array_push($result, $record['name']);
		}
		return $result;
	}


	public function getTreatment()
	{
		$query = $this->db->select('name')
			->from('tbl_treatment')
			->where('is_deleted', 0)
			->order_by('name', 'ASC')
			->get();

		return $this->generatedResult($query->result_array());
	}

	public function getDiagnosis()
	{
		$query = $this->db->select('name')
			->from('tbl_diagnosis')
			->where('is_deleted', 0)
			->order_by('name', 'ASC')
			->get();
		return $this->generatedResult($query->result_array());
	}

	public function insertStatus($teeth_status)
	{
		return $this->db->insert('tbl_teeth_status', ['name' => ucwords($teeth_status)]);
	}

	public function insertDiagnosis($diagnosis)
	{
		return $this->db->insert('tbl_diagnosis', ['name' => ucwords($diagnosis)]);
	}

	public function insertTreatment($treatment)
	{
		return $this->db->insert('tbl_treatment', ['name' => ucwords($treatment)]);
	}



	public function getMaterials($service)
	{
		$service_id = $this->getServiceID($service);
		$query = $this->db->select()
			->from('tbl_package')
			->where('service_id', $service_id)
			->get();

		return json_decode($query->row()->items);
	}

	public function updateImageAfter($id, $image)
	{
		$this->db->where('id', $id);
		$this->db->update('tbl_reservation', [
			'img_after' => 'img/uploads/'. $image
		]);
	}

	public function updateImageBefore($id, $image)
	{
		$this->db->where('id', $id);
		$this->db->update('tbl_reservation', [
			'img_before' => 'img/uploads/'. $image
		]);
	}

	public function getPatientID()
	{
		$query = $this->db->select('DISTINCT(patient_id)')
			->from('tbl_reservation')
			->where('r_status', 'finished')
			->get();

		return $query->result_array();
	}

	public function getFinishedById($patient_id)
	{
		$query = $this->db->select()
			->from('tbl_account AS a')
			->join('tbl_reservation AS r', 'a.id = r.patient_id')
			->where('r.patient_id', $patient_id)
			->where('r.r_status', 'finished')
			->get();

		return $query->result_array();
	}


	public function getFinishedReservations()
	{
		$ids = $this->getPatientID();
		$reservations = array();
		foreach($ids as $id)
		{
			$query = $this->db->select('a.id AS patient_id, a.fname, a.mi, a.lname, a.address,
				a.cp_num, a.email, a.gender, r.id, r.r_status, r.typeser, r.details, r.diagnosis_treatment,
 				r.daystart, r.timestart, r.recommendation')
	 			->from('tbl_account AS a')
	 			->join('tbl_reservation AS r', 'r.patient_id = a.id')
	 			->where('a.id', $id['patient_id'])
	 			->order_by('a.id', 'DESC')
	 			->limit(1)
	 			->get();

			array_push($reservations, $query->row_array());
		}

		return $reservations;
	}


	public function getServiceID($service_name)
	{
		$query = $this->db->get_where('tbl_service', array('name' => $service_name));
		return $query->row()->id;
	}

	public function ifStatusFinished($status, $service_name)
	{
		if ($status == 'finished')
		{
			$service_id = $this->getServiceID($service_name);

			// NOTE: get all the items used
			$query = $this->db->get_where('tbl_package',
				array('service_id' => $service_id, 'is_deleted' => 0)
			);

			$items = json_decode($query->row()->items);

			foreach ($items as $item)
			{
				$search_item = $this->db->get_where('tbl_item', array('id' => $item->id));

				$remaining = $search_item->row()->quantity - $item->qty;
				$remaining = ($remaining > 0) ? $remaining : 0 ;

				$this->db->update('tbl_item',
					array('quantity' => $remaining),
					array('id' => $item->id)
				);
			}
		}

	}

	public function updateStatus()
	{
		$post = $this->input->post();
		$this->db->update('tbl_reservation',
			array(
				'r_status' => $post['status'],
				'recommendation' => $post['recommendation'],
				'diagnosis_treatment' => $post['diagnosis_treatment']
			),
			array('id' => $post['id'])
		);
		$this->ifStatusFinished($post['status'], $post['service_name']);
		$this->sendEmail($post['email'], $post['status'], $post['reason']);
	}

	public function sendEmail($email, $status, $reason)
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


			$data['status'] = strtoupper($status);
			$data['reason'] = $reason;
			$data['clinic_name'] = $this->getClinicName();

			$mail->Subject = 'Appointment Status';
			$mail->Body    = $this->load->view('emails/appointments', $data, TRUE);

			$mail->send();
			$this->session->set_flashdata('success', 'Successfully Updated');
			redirect(base_url('admin/reservation'));
		}
		catch(Exception $e)
		{
			echo 'message do not send';
			echo "Mail error" . $mail->ErrorInfo;
		}
	}

 	public function getReservations($id = "")
 	{
 		if ($id === "")
 		{
 			$query = $this->db->select('a.id AS patient_id, a.fname, a.mi, a.lname, a.address,
 				a.cp_num, a.email, a.gender, r.details, r.diagnosis_treatment, r.id, r.r_status,
 				r.typeser, r.daystart, r.timestart, r.recommendation')
	 			->from('tbl_account AS a')
	 			->join('tbl_reservation AS r', 'r.patient_id = a.id')
	 			->where('r.r_status !=', 'disapproved')
	 			->order_by('r.id', 'DESC')
	 			->get();

	 		return $query->result_array();
 		}
 		$query = $this->db->select('a.id AS patient_id, a.fname, a.mi, a.lname, a.address,
 			a.cp_num, a.email, a.gender, r.id, r.r_status, r.typeser, r.daystart, r.timestart,
 			r.recommendation, r.details, r.diagnosis_treatment')
 			->from('tbl_account AS a')
 			->join('tbl_reservation AS r', 'r.patient_id = a.id')
 			->where('a.id', $id)
 			->get();

 		return $query->result_array();
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
