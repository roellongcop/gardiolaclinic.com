<?php 
defined('BASEPATH') OR exit('No direct script access allowed');
 
class Carousel_model extends CI_Model { 

 
	public function get($id = "")
	{
		if ($id === "") 
		{
			$query = $this->db->select()
			->from('tbl_carousel')
			->order_by('id', 'DESC') 
			->get();
			return $query->result_array();
		}
		$query = $this->db->get_where('tbl_carousel', array('id' => $id));
		return $query->row_array();
	}

	public function delete() 
	{
		$carousels = $this->input->post('carousels');
		foreach ($carousels as $carousel) 
		{
			$this->db->delete('tbl_carousel', [
				'id' => $carousel['id']
			]);
		}
	}

	public function update()
	{
		$carousels = $this->input->post('carousels');
		foreach ($carousels as $carousel) 
		{
			$this->db->update('tbl_carousel', [
				'greetings' => ucwords($carousel['greetings']),
				'title'     => ucwords($carousel['title']),
				'sub_title' => $carousel['sub_title'],
				'image'     => $carousel['image']
			], [
				'id' => $carousel['id']
			]);
		}
	}

	public function save()
	{
		$carousels = $this->input->post('carousels');
		foreach ($carousels as $carousel) 
		{
			$this->db->insert('tbl_carousel', [
				'greetings' => ucwords($carousel['greetings']),
				'title'     => ucwords($carousel['title']),
				'sub_title' => $carousel['sub_title'],
				'image'     => $carousel['image']
			]);
		}
	}
 

}