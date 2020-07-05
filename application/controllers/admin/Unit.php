<?php defined('BASEPATH') OR exit('No direct script access allowed');
 
class Unit extends CI_Controller 
{

	public function __construct()
	{
		parent:: __construct();
		$this->load->model('admin/Unit_model', 'unit');
	}
 	 

	public function update()
	{
		$this->unit->update();
	}
 

	public function delete()
	{
		$this->unit->delete();
	}

	public function insert()
	{
		$this->unit->insert();
	}


	public function index()
	{
		$data = ['vueJS' => 'unit.js'];


		$this->load->view('unit/list', [
			'header' => $this->load->view('includes/header', $data, true),
			'footer' => $this->load->view('includes/footer', $data, true)
		]);
	}
	

	public function get()
	{
		echo json_encode($this->unit->get());
	}

}