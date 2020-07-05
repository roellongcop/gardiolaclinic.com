<?php defined('BASEPATH') OR exit('No direct script access allowed');
 
class User extends CI_Controller 
{

	public function __construct()
	{
		parent:: __construct();
		$this->load->model('admin/User_model', 'user');
	}


	public function old_password()
	{
		echo $this->user->old_password($this->session->userdata('userid'));
	}

	
	public function update_profile()
	{
		echo $this->user->update_profile($this->session->userdata('userid'));
	}


	public function profile_data()
	{
		echo json_encode($this->user->profile_data($this->session->userdata('userid')));
	}
	
	public function updateBasicInformation()
	{
		$this->user->updateBasicInformation();
	}

	public function insert()
	{
		$this->user->insert();
	}

	public function update()
	{
		$this->user->update();
	}

	public function delete()
	{
		$this->user->delete();
	}

	public function getUsers()
	{
		echo json_encode($this->user->getAdminUsers());
	}


	public function adminUsers()
	{
		$data = ['vueJS' => 'admin_user.js']; 
		
		$this->load->view('user/admin_user', [
			'header' => $this->load->view('includes/header', $data, true),
			'footer' => $this->load->view('includes/footer', $data, true)
		]);
	}

	public function profile()
	{
		$data = ['vueJS' => 'user.js']; 
		
		$this->load->view('user/profile', [
			'header' => $this->load->view('includes/header', $data, true),
			'footer' => $this->load->view('includes/footer', $data, true)
		]);
	}


	public function check_user()
	{
		if (! empty($this->session->userdata('userid')))
		{
			echo $this->user->check_user($this->session->userdata('userid'));
		}
		else
		{
			echo 'failed';
		}
	}
	
 	
 	

}