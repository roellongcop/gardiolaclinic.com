<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Gate_model extends CI_Model {

	

	public function initializeSessions($user) 
	{
		$this->session->set_userdata(
			array(
				'usertype'    => $user['type'],
				'currentuser' => $user['email'],
				'userid'      => $user['id'],
				'chk_ser'     => 0
			)
		);
	}


	public function login()
	{
		$post = $this->input->post();
		$query = $this->db->get_where('tbl_account', 
			array(
				'username' => $post['username'],
				'pass'     => $post['password'],
				// 'verify'   => 1 // DAG DAG MO TONG LINE NA TO SON
			)
		);

		$user = $query->row_array(); 
		$this->initializeSessions($user);

		if ($query->num_rows() > 0) 
		{
			echo "success";
		}
		else 
		{				
			$this->session->set_flashdata('failed', 'Username or Password not found'); 
			redirect(site_url('home'));
		}

		
      	if ($user['type'] == 'patient') 
      	{
	        redirect(site_url('home'));
      	}
      	else
      	{
	        redirect(site_url('dashboard'));
	    } 	
	}
}