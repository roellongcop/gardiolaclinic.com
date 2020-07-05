<?php defined('BASEPATH') OR exit('No direct script access allowed');
 
class Patient extends CI_Controller 
{

	public function __construct()
	{
		parent:: __construct();
		$this->load->model('admin/Patient_model', 'patient');
	}

	public function getPatients()
	{
		echo json_encode($this->patient->getPatients());
	}

	public function getServices()
	{
		echo json_encode($this->patient->getServices());
	}
	
	public function savePatient()
 	{
 		$this->patient->savePatient();
 	}

	public function index()
	{
		$data = ['vueJS' => 'patient.js']; 
		
		$this->load->view('patient/list', [
			'header' => $this->load->view('includes/header', $data, true),
			'footer' => $this->load->view('includes/footer', $data, true)
		]);
	}
	 

}