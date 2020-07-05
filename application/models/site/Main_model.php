<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main_model extends CI_Model {
	
	

	public function getContacts() 
	{
		$query = $this->db->get_where('tbl_about', array('name' => 'basic'));
		return $query->row()->description;
	}

	public function getClinicName()
	{
		$query = $this->db->get_where('tbl_about', array('name' => 'basic'));
		$information = json_decode($query->row()->description);
		return $information->name;
	}

	public function getOpening() 
	{
		$query = $this->db->get_where('tbl_opening', array('is_deleted' => 0));
		return $query->result_array();
	}

	public function getAddress() 
	{
		$query = $this->db->get_where('tbl_about', array('name' => 'basic'));
		$information = json_decode($query->row()->description);
		return $information->address;
	}

	public function getNotif() 
	{
		if(isset($_SESSION['userid']))
		{
			$query= $this->db->select()
				->from('tbl_reservation')
				->where('patient_id', $this->session->userdata('userid'))
				->where('recommendation !=','')
				->get();

			return $query->num_rows();
		}
	}


	public function getServices()
	{
		$query=$this->db->get_where('tbl_service',  array('is_deleted' => 0));
		return $query->result_array();
	}

	public function getRecommendation()
	{
		if(isset($_SESSION['userid']))
		{
			$query= $this->db->select()
				->from('tbl_reservation')
				->where('patient_id', $this->session->userdata('userid'))
				->where('recommendation !=','')
				->get();

			return $query->result_array();
		}
	}
}