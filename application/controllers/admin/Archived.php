<?php defined('BASEPATH') OR exit('No direct script access allowed');
 
class Archived extends CI_Controller 
{

	public function __construct()
	{
		parent:: __construct();
		$this->load->model('admin/Archived_model', 'archived');
	}

	public function appointments()
	{
		$data['vueJS'] = 'archived.js';
		$data['header'] = $this->load->view('includes/header', $data, true);
		$data['footer'] = $this->load->view('includes/footer', $data, true);

		$this->load->view('archived/appointments', $data);
	}

	public function items()
	{
		$data['vueJS'] = 'archived.js';
		$data['header'] = $this->load->view('includes/header', $data, true);
		$data['footer'] = $this->load->view('includes/footer', $data, true);

		$this->load->view('archived/items', $data);
	}

	public function packages()
	{
		$data['vueJS'] = 'archived.js';
		$data['header'] = $this->load->view('includes/header', $data, true);
		$data['footer'] = $this->load->view('includes/footer', $data, true);

		$this->load->view('archived/packages', $data);
	}

	public function suppliers()
	{
		$data['vueJS'] = 'archived.js';
		$data['header'] = $this->load->view('includes/header', $data, true);
		$data['footer'] = $this->load->view('includes/footer', $data, true);

		$this->load->view('archived/suppliers', $data);
	}

	public function units()
	{
		$data['vueJS'] = 'archived.js';
		$data['header'] = $this->load->view('includes/header', $data, true);
		$data['footer'] = $this->load->view('includes/footer', $data, true);

		$this->load->view('archived/units', $data);
	}

	public function get()
	{
		echo json_encode($this->archived->get($this->input->post('tbl')));
	}


	public function openings()
	{
		$data['vueJS'] = 'archived.js';
		$data['header'] = $this->load->view('includes/header', $data, true);
		$data['footer'] = $this->load->view('includes/footer', $data, true);

		$this->load->view('archived/openings', $data);
	}


	public function services()
	{
		$data['vueJS'] = 'archived.js';
		$data['header'] = $this->load->view('includes/header', $data, true);
		$data['footer'] = $this->load->view('includes/footer', $data, true);

		$this->load->view('archived/services', $data);
	}

	public function abouts()
	{
		$data['vueJS'] = 'archived.js';
		$data['header'] = $this->load->view('includes/header', $data, true);
		$data['footer'] = $this->load->view('includes/footer', $data, true);

		$this->load->view('archived/abouts', $data);
	}


	public function users()
	{
		$data['vueJS'] = 'archived.js';
		$data['header'] = $this->load->view('includes/header', $data, true);
		$data['footer'] = $this->load->view('includes/footer', $data, true);

		$this->load->view('archived/users', $data);
	}
 
	public function restore()
	{
		$this->archived->restore();
		
		echo json_encode([
			'message' => "Restoring Success.",
			'status' => 1
		]);
	}

}