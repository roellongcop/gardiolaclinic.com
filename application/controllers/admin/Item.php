<?php defined('BASEPATH') OR exit('No direct script access allowed');
 
class Item extends CI_Controller 
{


	public function __construct()
	{
		parent:: __construct();
		$this->load->model('admin/Item_model', 'item');
	}



	/*========================================
	GETTING THE CURRENT USERTYPE LOGIN
	REDIRECT TO HOME PAGE IF NOT FOUND
	RETURN => JSON
	========================================*/
	public function getUserType()
	{
		echo json_encode($this->session->userdata('usertype'));
	}


	/*=========================
	UPDATE ITEMS
	METHOD => POST
	=========================*/
	public function update()
	{
		$this->item->update();
	}


 	/*=======================================
 	GENERATE OWN SERIAL AND BARCODE
	RETURN => JSON
 	=======================================*/
	public function own_barcode()
	{
		$data['serial'] = $this->item->own_serial();
		$data['barcode'] = $this->barcode->generate_png($data['serial']);
		echo json_encode($data);
	}



	/*=========================================
	GENERATE BARCODE DEPENDS OF SERIAL GIVEN
	METHOD => POST
	RETURN => TEXT
	=========================================*/
	public function generate_barcode()
	{
		echo $this->item->generate_barcode();
	}


	/*========================
	DELETE ITEM BY ID 
	METHOD => POST 
	========================*/
	public function delete()
	{
		$this->item->delete();
	}



	/*===========================
	SAVING ITEM
	METHOD => POST
	===========================*/
	public function insert()
	{
		$this->item->insert();
	} 



	/*========================
	DISPLAYING ITEM PAGE 
	========================*/
	public function index()
	{
		$data = ['vueJS' => 'item.js'];

		$this->load->view('item/list', [
			'header' => $this->load->view('includes/header', $data, true),
			'footer' => $this->load->view('includes/footer', $data, true)
		]);
	}


	/*=======================================
	FETCHING ALL THE SUPPLIERS 
	NEEDED FOR CREATING ITEMS (DROPDOWN)
	RETURN => JSON
	=======================================*/
	public function getSuppliers()
	{
		echo json_encode($this->item->getSuppliers());
	}



	/*=======================================
	FETCHING ALL THE CATEGORIES 
	NEEDED FOR CREATING ITEMS (DROPDOWN)
	RETURN => JSON
	=======================================*/
	public function getCategories()
	{
		echo json_encode($this->item->getCategories());
	}

	
	/*=======================================
	FETCHING ALL THE UNITS 
	NEEDED FOR CREATING ITEMS (DROPDOWN)
	RETURN => JSON
	=======================================*/
	public function getUnits()
	{
		echo json_encode($this->item->getUnits());
	}


	/*=======================================
	FETCHING ALL THE ITEMS 
	RETURN => JSON
	=======================================*/
	public function get()
	{
		echo json_encode($this->item->get());
	}

}