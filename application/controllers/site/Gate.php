<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Gate extends CI_Controller {
	public function __construct()
	{
		parent:: __construct();
		$this->load->model('site/gate_model','gate');
	}


	public function login()
	{
		$this->gate->login();
	}

	public function logout() {
		$this->session->unset_userdata(
			array('usertype', 'currentuser', 'userid', 'chk_ser')
		);
		session_destroy();
		redirect(site_url('home')); 
	}
 
}