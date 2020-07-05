<?php defined('BASEPATH') OR exit('No direct script access allowed');
 
class Opening extends CI_Controller 
{

	public function __construct()
	{
		parent:: __construct();
		$this->load->model('admin/Open_model', 'open');
	}
 	 

	public function update()
	{
		$this->open->update();
	}
 

	public function delete()
	{
		$this->open->delete();
	}

	public function insert()
	{
		$this->open->insert();
	}


	public function index()
	{ 
		$data = ['vueJS' => 'open.js']; 
		
		$this->load->view('opening/list', [
			'header' => $this->load->view('includes/header', $data, true),
			'footer' => $this->load->view('includes/footer', $data, true)
		]);
	}
	

	public function get()
	{
		echo json_encode($this->open->get());
	}

}