<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class About extends CI_Controller
{

	public function __construct()
	{
		parent:: __construct();
		$this->load->model('admin/About_model', 'about');
	}


	/*===========================================
	UPDATE BASIC INFORMATION OF THE COMPANY
	NAME, ADDRESS, EMAIL ETC.,
	METHOD = POST
	AJAX
	===========================================*/
	public function updateBasicInformation()
	{
		$this->about->updateBasicInformation();
	}




	/*===========================================
	FETCHING BASIC INFORMATION OF THE COMPANY
	NAME, ADDRESS, EMAIL ETC.,
	AJAX
	===========================================*/
	public function getBasicInformation()
	{
		echo $this->about->getBasicInformation();
	}


	/*==============================================
	DISPLAYING COMPANY INFORMATION BY PARAMETER 'ID'
	===============================================*/
	public function findAbout($id)
	{
		$data['vueJS'] = 'about.js';
		$data['header'] = $this->load->view('includes/header', $data, true);
		$data['footer'] = $this->load->view('includes/footer', $data, true);

		$this->load->view('about/view_form', $data);
	}


	/*=============================================
	DISPLAYING THE ABOUTS TEMPLATE
	=============================================*/
	public function index()
	{
		$data['vueJS'] = 'about.js';
		$data['header'] = $this->load->view('includes/header', $data, true);
		$data['footer'] = $this->load->view('includes/footer', $data, true);

		$this->load->view('about/list', $data);
	}


	/*=================================
	FETCHING ALL COMPANY INFORMATION
	REQUEST BY AJAX
	=================================*/
	public function get()
	{
		echo json_encode($this->about->get());
	}


	/*=================================
	DELETE COMPANY'S INFORMATION
	PARAMETER 'ID' OF THE INFORMATION
	=================================*/
	public function delete($id)
	{
		$this->about->delete($id);
	}




	/*=================================
	UPDATE COMPANY'S INFORMATION BY ID
	METHOD = POST
	AJAX
	=================================*/
	public function update()
	{
		$this->about->update();
	}


	/*=================================
	SAVING COMPANY'S INFORMATION
	METHOD = POST
	AJAX
	=================================*/
	public function save()
	{
		$this->about->save();
	}



}
