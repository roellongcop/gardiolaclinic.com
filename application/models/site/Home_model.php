<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home_model extends CI_Model {
	
	

	public function checkIfReserved()
	{

		$id = $this->session->userdata('userid');
		$query = $this->db->query("SELECT * FROM tbl_account AS a INNER JOIN tbl_reservation AS r ON 
			r.patient_id = a.id WHERE (r_status = 'pending' OR r_status = 'approved') AND a.id = $id ");



		if ($query->num_rows()) 
		{
			return 'true';
		}
		else 
		{
			return 'false';
		}
	}

	public function getServiceID($service_name)
	{
		$query = $this->db->get_where('tbl_service', array('name' => $service_name));
		return $query->row()->id;
	}

	public function findItems()
	{
		$post = $this->input->post();
		$service_id = $this->getServiceID($post['service_name']);
		$query = $this->db->get_where('tbl_package', array('service_id' => $service_id));
		return $query->row()->items;
	}

	public function updateCredentials()
	{
		$post = $this->input->post();
		$this->db->update('tbl_account',
			array(
				'username' => $post['username'],
				'pass' => $post['password']
			),
			array('id' => $post['id'])
		);
	}


	public function getPatientInformation($id)
	{
		$query = $this->db->get_where('tbl_account', ['id' => $id]);

		return $query->row_array();
	}

	public function getPatientName()
	{
		$query = $this->db->select("CONCAT (fname, ' ', mi, '. ', lname) AS fullname")
			->from('tbl_account')
			->where('id', $this->session->userdata('userid'))
			->get();

		return $query->row()->fullname;
	}

	public function getTermsAndConditions()
	{
		$query = $this->db->get_where('tbl_about', array('name' => 'basic'));
		$information = json_decode($query->row()->description);
		return $information->terms;
	}

	public function getServices()
	{
		$query = $this->db->get_where('tbl_service', array('is_deleted' => 0));

		return $query->result_array();
	}

	public function findApointments()
	{
		$date = $this->input->post('date');
		$query = $this->db->select('timestart')
			->from('tbl_reservation')
			->where('daystart', $date)
			->where('r_status', 'approved')
			->get();

		return $query->result_array();
	}

	public function updateProfile()
	{
		$post = $this->input->post();
		$this->db->update('tbl_account',
			array(
				'fname' => ucwords($post['fname']),
				'mi' => ucfirst($post['mi']),
				'lname' => ucwords($post['lname']),
				'address' => ucwords($post['address']),
				'email' => strtolower($post['email']),
				'cp_num' => strtolower($post['cp_num']),
				'gender' => ucfirst($post['gender'])
			),
			array('id' => $post['id'])
		);
	}

	public function getDashboardServices()
	{
		$query = $this->db->select()
			->from('tbl_service')
			->where('is_deleted', 0)
			->limit(4)
			->get();
		return $query->result_array();
	}

	public function getContacts()
	{
		$query = $this->db->get_where('tbl_about', array('name' => 'basic'));

		return $query->row()->description;
	}

	public function getClinicInformation()
	{
		$query = $this->db->get_where('tbl_about', array('name !=' => 'basic'));
		return $query->result_array();
	}

	public function getCarousel()
	{
		$query = $this->db->get('tbl_carousel');
		return $query->result_array();
	}

	public function getHappyPatients()
	{
		$query = $this->db->select()
			->from('tbl_account')
			->where('type', 'patient')
			->where('verify', 1)
			->get();

		return $query->num_rows();
	}

	public function getClinicDescription()
	{
		$query = $this->db->get_where('tbl_about', array('name' => 'basic'));
		$information = json_decode($query->row()->description);
		return $information->description;
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
  

	public function getApprovedReservations()
	{
		$query = $this->db->select()
			->from('tbl_reservation AS r')
			->join('tbl_account AS a', 'r.patient_id = a.id')
			->where('r.r_status', 'approved')
			->get();

		return $query->result_array();
	}


	public function getFullDates()
	{
		$reservations = $this->getApprovedReservations();

		$dates = array(); 
		foreach($reservations as $reservation)
		{
  			$query = $this->db->select()
				->from('tbl_reservation AS r')
				->join('tbl_account AS a', 'r.patient_id = a.id')
				->where('r.r_status', 'approved')
				->where('r.daystart', $reservation['daystart'])
				->get();

  			if($query->num_rows() >= 8)
  			{  
				array_push($dates, $reservation['daystart']);
	  		}
	  	}
		return array_unique($dates);
	}


	public function getReservationsLimits($limit)
	{
		$reservations = $this->getApprovedReservations();

		$dates = array(); 
		foreach($reservations as $reservation)
		{
  			$query = $this->db->select()
				->from('tbl_reservation AS r')
				->join('tbl_account AS a', 'r.patient_id = a.id')
				->where('r.r_status', 'approved')
				->where('r.daystart', $reservation['daystart'])
				->get();

  			if($query->num_rows() == $limit)
  			{  
				array_push($dates,  $reservation['daystart']);
	  		}
	  	}
		return array_unique($dates);
	}
 
 

	public function getProfileInformation()
	{
		$query = $this->db->get_where('tbl_account', 
			array('id' => $this->session->userdata('userid'))
		);
		return $query->row_array();
	}


	public function getTotalUnfinishedReservations()
	{
		$query = $this->db->get_where('tbl_reservation',
			array(
				'patient_id' => $this->session->userdata('userid'), 
				'r_status !=' => 'finished'
			)
		);
		return $query->num_rows();
	}

	public function getRealDate($date)
	{
		$explode = explode("/", $date);
		return $explode[1] . "/" . $explode[0] . "/" . $explode[2];
	}

	public function getTotalReservationDates($date)
	{
		$query = $this->db->get_where('tbl_reservation', 
			array('daystart' => $this->getRealDate($date))
		);
		return $query->num_rows();
	}


	// ======SAVE APPOINTMENT BY PATIENT=======
	public function bookedAppointment()
	{
		$post = $this->input->post();

		$this->db->insert('tbl_reservation',
			array(
				'daystart'   => $post['date'],
				'typeser'    => $post['service'],
				'timestart'  => $post['time'],
				'patient_id' => $this->session->userdata('userid'),
				'r_status'   => 'pending',
				'recommendation' => 'N/A'
			)
		);  
	}

	public function updateAccount()
	{
		$post = $this->input->post();
 
	    $this->session->userdata('currentuser', $post['email']);

	    $this->db->update('tbl_account', 
	    	array(
		    	'fname'  => ucwords($post['fname']),
		    	'mi'     => ucfirst($post['mi']),
		    	'lname'  => ucwords($post['lname']),
		    	'address' => ucwords($post['address']),
		    	'email'  => strtolower($post['email']),
		    	'cp_num' => strtolower($post['cp_num'])
		    ), 
	    	array('id' => $this->session->userdata('userid'))
	    );
		$this->session->set_flashdata('success', 'Updated');
	    redirect(site_url('settings'));
	}

	public function getReservations($reservationID = "")
	{
		if ($reservationID === "") 
		{
			$query = $this->db->get_where('tbl_reservation', 
				array('patient_id' => $this->session->userdata('userid'))
			);
			return $query->result_array();
		}
		$query = $this->db->get_where('tbl_reservation', 
			array(
				'patient_id' => $this->session->userdata('userid'),
				'id' => $reservationID
			)
		);
		return $query->result_array(); 
	}

	public function updatePassword()
	{
		$post = $this->input->post();
		$this->db->update('tbl_account',
			array(
				'username' => strtolower($post['username']),
				'pass'     => strtolower($post['password'])
			),
			array('id' => $this->session->userdata('userid'))
		);
		$this->session->set_flashdata('success', 'Updated');
	}

	public function findService($serviceID)
	{
		$query = $this->db->get_where('tbl_service',array('id' => $serviceID));
		return $query->row_array();
	}

	public function getFinishedReservations()
 	{
 		$query = $this->db->select()
 			->from('tbl_reservation AS r')
 			->join('tbl_account AS a', 'r.patient_id = a.id')
 			->where('r.r_status', 'approved')
 			->get();
		return $query->result_array();
	}
 
}
									

