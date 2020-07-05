<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Reservation extends CI_Controller
{

	public function __construct()
	{
		parent:: __construct();
		$this->load->model('admin/Reservation_model', 'reservation');
	}


	public function insertTreatment()
	{
		$treatment = $this->input->post('name');
		if (! empty($treatment))
		{
			if (! $this->reservation->insertTreatment($treatment))
			{
				echo "No Input Found";
			}
			else
			{
				$this->getDiagnosisTreatmentStatus();
			}
		}
	}



	public function getMaterials()
	{
		$service = $this->input->post('service');
		if (empty($service))
		{
			echo json_encode([]);
		}
		else
		{
			$materials = $this->reservation->getMaterials($service);
			if (empty($materials))
			{
				echo json_encode([]);
			}
			else
			{
				echo json_encode($materials);
			}
		}
	}


	public function insertDiagnosis()
	{
		$diagnosis = $this->input->post('name');
		if (! empty($diagnosis))
		{
			if (! $this->reservation->insertDiagnosis($diagnosis))
			{
				echo "No Input Found";
			}
			else
			{
				$this->getDiagnosisTreatmentStatus();
			}
		}
	}



	public function insertStatus()
	{
		$teeth_status = $this->input->post('name');
		if (! empty($teeth_status))
		{
			if (! $this->reservation->insertStatus($teeth_status))
			{
				echo "No Input Found";
			}
			else
			{
				$this->getDiagnosisTreatmentStatus();
			}
		}
	}

	public function getDiagnosisTreatmentStatus()
	{
		echo json_encode([
			'diagnosis' => $this->reservation->getDiagnosis(),
			'treatment' => $this->reservation->getTreatment(),
			'status' => $this->reservation->getStatus()
		]);
	}

	public function updateStatus()
	{
		$this->reservation->updateStatus();
	}


	public function uploadAfterImage()
	{
		$config['upload_path']          = './img/uploads/';
    $config['allowed_types']        = 'gif|jpg|png';

		$this->load->library('upload', $config);
		if ( ! $this->upload->do_upload('after'))
		{
			echo "Error";
		}
		else
		{
			$this->reservation->updateImageAfter(
				$this->input->post('id'),
				$this->upload->data('file_name')
			);
		}
	}


	public function uploadBeforeImage()
	{
		$config['upload_path']          = './img/uploads/';
		$config['allowed_types']        = 'gif|jpg|png';

		$this->load->library('upload', $config);

		if ( ! $this->upload->do_upload('before'))
		{
			echo "Error";
		}
		else
		{
			$this->reservation->updateImageBefore(
				$this->input->post('id'),
				$this->upload->data('file_name')
			);
		}
	}



	public function getFinishedReservations()
	{
		echo json_encode($this->reservation->getFinishedReservations());
	}

	public function getAllReservations()
	{
		echo json_encode($this->reservation->getReservations());
	}

	public function getReservations()
	{
		echo json_encode($this->reservation->getReservations($this->input->post('id')));
	}

	public function getFinishedById()
	{
		echo json_encode($this->reservation->getFinishedById($this->input->post('id')));
	}



	public function index()
	{
		$data = ['vueJS' => 'reservation.js'];

		$this->load->view('reservation/list', [
			'header' => $this->load->view('includes/header', $data, true),
			'footer' => $this->load->view('includes/footer', $data, true)
		]);
	}

}
