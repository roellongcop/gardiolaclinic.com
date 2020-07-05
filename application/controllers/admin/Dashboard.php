<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller
{

	public function __construct()
	{
		parent:: __construct();
		$this->load->model('admin/Dashboard_model', 'dashboard');
	}


	public function getTotals()
	{
		echo json_encode([
			'patients' =>  $this->dashboard->getTotals('patients'),
			'reservations' =>  $this->dashboard->getTotals('reservations'),
			'items' =>  $this->dashboard->getTotals('items')
		]);
	}


	public function getReservationChart()
	{
		echo json_encode(
			$this->dashboard->getReservationChart(date('Y'))
		);
	}


	public function index()
	{
		$this->session->set_userdata('clinic_name', $this->dashboard->getClinicName());

		$data = ['vueJS' => 'dashboard.js'];

		$this->load->view('dashboard/index', [
			'header' => $this->load->view('includes/header', $data, true),
			'footer' => $this->load->view('includes/footer', $data, true)
		]);
	}


	public function stock_chart()
	{
		echo json_encode($this->dashboard->stock_chart());
	}


}
