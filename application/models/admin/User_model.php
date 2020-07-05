<?php 
defined('BASEPATH') OR exit('No direct script access allowed');
 
class User_model extends CI_Model { 
	

	public function updateBasicInformation()
	{
		$post = $this->input->post();
		$this->db->update('tbl_account',
			array(
				'fname' => ucwords($post['fname']),
				'mi' => ucfirst($post['mi']),
				'lname' => ucwords($post['lname']),
				'address' => ucwords($post['address']),
				'email' => $post['email'],
				'cp_num' => $post['cp_num'],
				'gender' => ucfirst($post['gender'])
			),
			array('id' => $post['id'])
		);
	}


	public function delete()
	{
		$users = $this->input->post('users');
		foreach ($users as $user) 
		{
			$this->db->update('tbl_account',
				array('is_deleted' => 1),
				array('id' => $user['id'])
			);
		}
		$this->session->set_flashdata('success', 'Successfully Deleted');
	}

	public function update()
	{
		$users = $this->input->post('users');
		foreach ($users as $user) 
		{
			$this->db->update('tbl_account',
				array(
					'fname' => ucwords($user['fname']),
					'mi' => ucfirst($user['mi']),
					'lname' => ucwords($user['lname']),
					'address' => ucwords($user['address']),
					'email' => $user['email'],
					'cp_num' => $user['cp_num'],
					'gender' => $user['gender'],
					'type' => strtolower($user['type']),
					'username' => strtolower($user['username']),
					'pass' => strtolower($user['pass']),
					'verify' => 1,
					'status' => 0,
					'code' => rand(1000, 9999),
					'is_deleted' => 0
				),
				array('id' => $user['id'])
			);
		}
		$this->session->set_flashdata('success', 'Successfully Updated');
	}

	public function insert()
	{
		$users = $this->input->post('users');
		foreach ($users as $user) 
		{
			$this->db->insert('tbl_account',
				array(
					'fname' => ucwords($user['fname']),
					'mi' => ucfirst($user['mi']),
					'lname' => ucwords($user['lname']),
					'address' => ucwords($user['address']),
					'email' => $user['email'],
					'cp_num' => $user['mobile'],
					'gender' => ucfirst($user['sex']),
					'type' => strtolower($user['type']),
					'username' => strtolower($user['username']),
					'pass' => strtolower($user['password']),
					'verify' => 1,
					'status' => 0,
					'code' => rand(1000, 9999),
					'is_deleted' => 0
				)
			);
		}
		$this->session->set_flashdata('success', 'Successfully Added');
	}

	public function getAdminUsers()
	{
		$query = $this->db->get_where('tbl_account', 
			array(
				'type !=' => 'patient',
				'verify'  => 1,
				'is_deleted' => 0
			)
		);

		return $query->result_array();
	}


	public function check_user($id)
	{
		$query = $this->db->get_where('tbl_account', array('id' => $id));
		$user = $query->row_array();

		return ucfirst($user['fname'] . ' ' . $user['lname']);
	}

	public function old_password($id)
	{
		$post = $this->input->post();
		$query = $this->db->get_where('tbl_account', 
			array(
				'pass' => $post['old_password'], 
				'id' => $id
			)
		);
		if ($query->num_rows() > 0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	public function update_profile()
	{
		$post = $this->input->post();
		return $this->db->update('tbl_account', 
			array(
				'username' => strtolower($post['username']),
				'pass'     => strtolower($post['password']),
				'type'     => strtolower($post['user'])
			), 
			array('id' => $post['id'])
		);
	}

	public function profile_data($id)
	{
		$query = $this->db->get_where('tbl_account', array('id' => $id));
		return $query->row_array();
	}
}