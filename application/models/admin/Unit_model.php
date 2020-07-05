<?php 
defined('BASEPATH') OR exit('No direct script access allowed');
 
class Unit_model extends CI_Model
{ 
	
 
	public function delete()
	{
		$units = $this->input->post('units');
		foreach ($units as $unit)
		{
			$this->db->where('id', $unit['id']);
			$this->db->update('tbl_unit', [
				'is_deleted' => 1
			]);
		}
	}

	public function update()
	{
		$units = $this->input->post('units');
		foreach ($units as $unit)
		{
			$this->db->where('id', $unit['id']);
			$this->db->update('tbl_unit', [
				'name' => ucwords($unit['name'])
			]);
		}
	}

	public function insert()
	{
		$units = $this->input->post('units');

		foreach ($units as $unit)
		{
			$this->db->insert('tbl_unit', [
				'name' => ucwords($unit['name'])
			]);
		}
	}

	public function get($id = '')
	{
		if($id === '')
		{
			$query = $this->db->select('id, name')
				->from('tbl_unit')
				->where('is_deleted', 0)
				->order_by('id', 'DESC')
				->get();
			return $query->result_array();
		}
	}

}