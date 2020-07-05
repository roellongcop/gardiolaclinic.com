<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Main extends CI_Controller {
	
	public function __construct()
	{
		parent:: __construct();
		$this->load->model('site/Main_model','main');
	}
	

	public function getContacts() 
	{
		echo $this->main->getContacts();
	}

	public function getClinicName() 
	{
		echo json_encode($this->main->getClinicName());
	}
	
	public function getOpening() 
	{
		echo json_encode($this->main->getOpening());
	}

	public function getAddress() 
	{
		echo json_encode($this->main->getAddress());
	}

	public function getServices() 
	{
		echo json_encode($this->main->getServices());
	}

	public function getNotif() 
	{
		echo json_encode($this->main->getNotif());
	}

	public function getRecommendation() 
	{
		echo json_encode($this->main->getRecommendation());
	}
}