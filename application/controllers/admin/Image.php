<?php defined('BASEPATH') OR exit('No direct script access allowed');
 
class Image extends CI_Controller 
{

	public function __construct()
	{
		parent:: __construct();
		$this->load->model('admin/Image_model', 'image');
	}

	public function index()
	{
		$data = ['vueJS' => 'image.js']; 
		
		$this->load->view('image/list', [
			'header' => $this->load->view('includes/header', $data, true),
			'footer' => $this->load->view('includes/footer', $data, true)
		]);
	}

	public function removeImage() 
	{
		$this->image->removeImage();
	}

	public function getImages() 
	{
        echo json_encode($this->image->getImages());
	}

	public function upload() 
	{
		$targetDir = './img/uploads/';
		$image = $_FILES['file']['name'];
		$targetFile = $targetDir . $image;
		move_uploaded_file($_FILES['file']['tmp_name'], $targetFile);

		$this->image->upload($image);
    }
    

}