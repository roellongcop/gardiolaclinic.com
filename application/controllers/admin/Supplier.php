<?php defined('BASEPATH') OR exit('No direct script access allowed');
 
class Supplier extends CI_Controller 
{

	public function __construct()
	{
		parent:: __construct();
		$this->load->model('admin/Supplier_model', 'supplier');
	}

	public function update()
	{
		$this->supplier->update();
	}
 

	public function delete()
	{
		$this->supplier->delete();
	}

	public function insert()
	{
		$this->supplier->insert();
	}
 


	public function index()
	{
		$data = ['vueJS' => 'supplier.js']; 
		
		$this->load->view('supplier/list', [
			'header' => $this->load->view('includes/header', $data, true),
			'footer' => $this->load->view('includes/footer', $data, true)
		]);
	}
	

	public function get()
	{
		echo json_encode($this->supplier->get());
	}

}