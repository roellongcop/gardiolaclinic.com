<?php defined('BASEPATH') OR exit('No direct script access allowed');
 
class Package extends CI_Controller 
{

	public function __construct()
	{
		parent:: __construct();
		$this->load->model('admin/Package_model', 'package');
	}

	
	/*
		getting the inventory items
	*/
	public function getInventoryItems()
	{
		echo json_encode($this->package->getInventoryItems());;
	}




	/*
		fetching all services
	*/
	public function getServices()
	{
		echo json_encode($this->package->getServices());;
	}

	
 	 

	/*
		Update package
		no return value
	*/
	public function update()
	{
		$this->package->update();
	}
 


	/*
		Delete package
		no return value
	*/
	public function delete()
	{
		$this->package->delete();
	}



	/*
		Insert package
		no return value
	*/
	public function insert()
	{
		$this->package->insert();
	}



	/*
		Loading the package list
	*/
	public function index()
	{ 
		$data = ['vueJS' => 'package.js']; 
		
		$this->load->view('package/list', [
			'header' => $this->load->view('includes/header', $data, true),
			'footer' => $this->load->view('includes/footer', $data, true)
		]);
	}
	

	/*
		Fetching the package list
	*/
	public function get()
	{
		echo json_encode($this->package->get());
	}

}