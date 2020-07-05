<?php 
defined('BASEPATH') OR exit('No direct script access allowed');
 
class Image_model extends CI_Model
{ 


	public function upload($image) 
	{
		$query = $this->db->insert('tbl_image',
			array('path' => 'img/uploads/'. $image)
		);
	}

	public function removeImage() 
	{
		$this->db->delete('tbl_image', array('id' => $this->input->post('id')));
	}

	public function getImages() 
	{
		$query = $this->db->get('tbl_image');
		return $query->result_array();
	}
}