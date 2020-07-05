<?php defined('BASEPATH') OR exit('No direct script access allowed');
 
class Category extends CI_Controller 
{

	public function __construct()
	{
		parent:: __construct();
		$this->load->model('admin/Category_model', 'category');
	}

	public function update()
	{
		$this->category->update();
	}
 

	public function delete()
	{
		$this->category->delete();
	}

	public function insert()
	{
		$this->category->insert();
	} 

	public function index()
	{
		$data = ['vueJS' => 'category.js'];

		$this->load->view('category/list', [
			'header' => $this->load->view('includes/header', $data, true),
			'footer' => $this->load->view('includes/footer', $data, true)
		]);
	}
	 
	public function get()
	{
		echo json_encode($this->category->get());
	}

}