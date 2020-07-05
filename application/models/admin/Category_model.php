<?php 
defined('BASEPATH') OR exit('No direct script access allowed');
 
class Category_model extends CI_Model
{ 
	

	public function delete()
	{
		$categories = $this->input->post('categories');
		foreach($categories as  $category)
		{
			$this->db->update('tbl_category', 
				['is_deleted' => 1], 
				['id' => $category['id']]
			);
		}
	}

	public function update()
	{
		$categories = $this->input->post('categories');
		foreach($categories as  $category) 
		{
			$this->db->update('tbl_category', [
				'name' => ucwords($category['name']),
				'description' => ucwords($category['description'])
			], ['id' => $category['id']]);
		}
	}

	public function insert()
	{
		$categories = $this->input->post('categories');
		foreach($categories as  $category)
		{
			$this->db->insert('tbl_category', [
				'name' => ucwords($category['name']),
				'description' => ucwords($category['description'])
			]);
		}
	}

	public function get($id = '')
	{
		if($id === '')
		{
			$query = $this->db->select()
				->from('tbl_category')
				->where('is_deleted', 0)
				->order_by('id', 'DESC')
				->get();
			return $query->result_array();
		}
	}

}