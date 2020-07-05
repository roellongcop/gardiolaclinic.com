<?php defined('BASEPATH') OR exit('No direct script access allowed');
 
class Chart extends CI_Controller 
{

	public function __construct()
	{
		parent:: __construct();
		$this->load->model('admin/Chart_model', 'chart');
	}

	public function getReservationChart()
	{
		echo $this->chart->getReservationChart($this->input->post('year'));
	}


	public function inventory()
	{
		$data = ['vueJS' => 'chart_inventory.js'];

		$this->load->view('chart/inventory', [
			'header' => $this->load->view('includes/header', $data, true),
			'footer' => $this->load->view('includes/footer', $data, true)
		]);
	}

	public function reservation()
	{
		$data = ['vueJS' => 'chart_reservation.js'];

		$this->load->view('chart/reservation', [
			'header' => $this->load->view('includes/header', $data, true),
			'footer' => $this->load->view('includes/footer', $data, true)
		]);
	}

 

	public function inventory_chart($tbl, $by) 
	{
		if ($tbl == "stock") {
			echo json_encode([
				'label' => ['Empty', 'Critical', 'Safe', 'Full'],
				'data' => $this->chart->stock_chart()
			]);
		} else {
			echo json_encode([
				'label' => $this->chart->inventory_label($tbl),
				'data' => $this->chart->inventory_data($tbl, $by)
			]);
		}
	}
}