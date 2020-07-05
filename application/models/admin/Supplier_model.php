<?php 
defined('BASEPATH') OR exit('No direct script access allowed');
 
class Supplier_model extends CI_Model
{ 
	

	public function delete()
	{
		$suppliers = $this->input->post('suppliers');
		foreach($suppliers as $supplier)
		{
			$this->db->update('tbl_supplier', 
				array('is_deleted' => 1), 
				array('id' => $supplier['id'])
			);
		}
	}

	public function update()
	{
		$suppliers = $this->input->post('suppliers');
		foreach($suppliers as $supplier)
		{ 
			$this->db->update('tbl_supplier', 
				array(
					'name' => ucwords($supplier['name']),
					'telephone' => $supplier['telephone'],
					'address' => ucwords($supplier['address'])
				), 
				array('id' => $supplier['id'])
			);
		}
	}

	public function insert()
	{
		$suppliers = $this->input->post('suppliers');
		foreach($suppliers as $supplier)
		{ 
			$this->db->insert('tbl_supplier', 
				array(
					'name' => ucwords($supplier['name']),
					'telephone' => $supplier['telephone'],
					'address' => ucwords($supplier['address'])
				)
			);
		}
	}

	public function get($id = '')
	{
		if($id === '')
		{
			$query = $this->db->select()
				->from('tbl_supplier') 
				->where('is_deleted', 0)
				->order_by('id', 'DESC')
				->get();
			return $query->result_array();
		}
	}

}