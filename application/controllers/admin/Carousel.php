<?php 
defined('BASEPATH') OR exit('No direct script access allowed');


class Carousel extends CI_Controller 
{

	function __construct()
	{
		parent:: __construct();
		$this->load->model('admin/carousel_model', 'carousel');
	} 
	
	public function index()
	{
		$data['vueJS'] = 'carousel.js';
		$data['header'] = $this->load->view('includes/header', $data, true);
		$data['footer'] = $this->load->view('includes/footer', $data, true);
		
		$this->load->view('carousel/list', $data);
	}

	public function get()
	{
		echo json_encode($this->carousel->get());
	}

	public function delete()
	{
		$this->carousel->delete();
	}

	public function update()
	{
		$this->carousel->update();
	}

	public function save()
	{
		$this->carousel->save();
	}

 

}