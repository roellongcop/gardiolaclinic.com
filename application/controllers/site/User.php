<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

	public function __construct()
	{
		parent:: __construct();
		$this->load->model('site/User_model','register');
	}

	public function verify($code)
	{
		$this->register->verify($code);
	}


	public function register()
	{
		echo json_encode($this->register->register());
	}

}
