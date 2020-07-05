<?php 
defined('BASEPATH') OR exit('No direct script access allowed');
 
class Open_model extends CI_Model
{ 

	
 
	public function delete()
	{
		$opens = $this->input->post('opens');
		foreach ($opens as $open)
		{
			$this->db->where('id', $open['id']);
			$this->db->update('tbl_opening', [
				'is_deleted' => 1
			]);
		}
	}

	public function update()
	{
		$opens = $this->input->post('opens');
		foreach ($opens as $open)
		{
			$this->db->where(['id' => $open['id']]);
			$this->db->update('tbl_opening', [
				'day' => $open['day'],
				'open' => $open['open'],
				'close' => $open['close']
			]);
		}
	}

	public function insert()
	{
		$opens = $this->input->post('opens');

		foreach ($opens as $open)
		{
			$this->db->insert('tbl_opening', [
				'day' => $open['day'],
				'open' => $open['open'],
				'close' => $open['close']
			]);
		}
	}

	public function get($id = '')
	{
		if($id === '')
		{
			$query = $this->db->select()
				->from('tbl_opening')
				->where('is_deleted', 0)
				->order_by('id', 'DESC')
				->get();
				
			return $query->result_array();
		}
	}

}