<?php defined('BASEPATH') OR exit('No direct script access allowed');
 
class Service extends CI_Controller 
{

	public function __construct()
	{
		parent:: __construct();
		$this->load->model('admin/Service_model', 'service');
	}

	public function convertPrice()
	{
		echo number_format($this->input->post('price'), 2);
	}

	public function findService($id)
	{ 
		$data = ['vueJS' => 'service.js']; 
		
		$this->load->view('service/view_form', [
			'service' => $this->service->getServices($id),
			'header' => $this->load->view('includes/header', $data, true),
			'footer' => $this->load->view('includes/footer', $data, true)
		]);
	}

	public function index()
	{
		$data = ['vueJS' => 'service.js']; 
		
		$this->load->view('service/list', [
			'header' => $this->load->view('includes/header', $data, true),
			'footer' => $this->load->view('includes/footer', $data, true)
		]);
	}

	public function getServices()
	{
		echo json_encode($this->service->getServices());
	}

	public function delete($id)
	{
		$this->service->delete($id);
	}

	public function update()
	{
		$this->service->update();
	}

	public function save()
	{
		$this->service->save();
	}

 

}