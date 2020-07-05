<?php defined('BASEPATH') OR exit('No direct script access allowed');
 
class Gate extends CI_Controller 
{

	public function __construct()
	{
		parent:: __construct();
		$this->load->model('admin/Gate_model', 'gate');
	}
 
	public function logout() 
	{
		$this->gate->logout();
	}
 

}