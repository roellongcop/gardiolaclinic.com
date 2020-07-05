<?php 
defined('BASEPATH') OR exit('No direct script access allowed');
 
class Item_model extends CI_Model
{ 
	

	public function getSuppliers()
	{
		$query = $this->db->select('id, name AS text')
			->from('tbl_supplier')
			->where('is_deleted', 0)
			->get();

		return $query->result_array();
	}

	public function getCategories()
	{
		$query = $this->db->select('id, name AS text')
			->from('tbl_category')
			->where('is_deleted', 0)
			->get();

		return $query->result_array();
	}

	
	public function getUnits()
	{
		$query = $this->db->select('id, name AS text')
			->from('tbl_unit')
			->where('is_deleted', 0)
			->get();

		return $query->result_array();
	}
 

	public function delete()
	{
		$items = $this->input->post('items');
		foreach ($items as $item)
		{
			$this->db->where('id', $item['id']);
			$this->db->update('tbl_item', [
				'is_deleted' => 1
			]);
		}
	}

	public function generate_stock($qty, $max, $min)
	{
		if($qty == 0)
		{
			return "Empty";
		}
		elseif($qty >= $max)
		{
			return "Full";
		}
		elseif($qty <= $min)
		{
			return "Critical";
		}
		else
		{
			return "Safe";
		}
	}



	public function update()
	{
		$items = $this->input->post('items');
		foreach ($items as $item)
		{ 
			$this->db->where(['id' => $item['id']]);
			$this->db->update('tbl_item', [
				'name' => ucfirst($item['name']),
				'price' => $item['price'],
				'max' => $item['max'],
				'min' => $item['min'],
				'quantity' => $item['quantity'], 
				'category_id' => $item['category_id'],
				'supplier_id' => $item['supplier_id'],
				'unit_id' => $item['unit_id'],
				'stock' => $this->generate_stock($item['quantity'], $item['max'], $item['min'])
			]);
		}
	}
 
 
	public function insert()
	{
		$items = $this->input->post('items');
		foreach ($items as $item)
		{
			$this->db->insert('tbl_item', [
				'name' => ucwords($item['name']),
				'price' => $item['price'],
				'max' => $item['max'],
				'min' => $item['min'],
				'quantity' => $item['quantity'], 
				'category_id' => $item['category_id'],
				'supplier_id' => $item['supplier_id'],
				'unit_id' => $item['unit_id'],
				'stock' => $this->generate_stock($item['quantity'], $item['max'], $item['min'])
			]);
		}
	}

	public function get($id = '')
	{
		if($id === '')
		{ 
			$query = $this->db->select('i.id, i.name, i.quantity, i.price, i.max, 
				i.min, i.stock, c.id AS category_id, c.name AS category_name, s.id AS supplier_id, 
				s.name as supplier_name, u.id AS unit_id, u.name as unit_name')
				->from('tbl_item AS i')
				->join('tbl_category AS c', 'i.category_id = c.id')
				->join('tbl_supplier AS s', 'i.supplier_id = s.id')
				->join('tbl_unit AS u', 'i.unit_id = u.id')
				->order_by('i.id', 'DESC')
				->where('i.is_deleted', 0)
				->get();

			return $query->result_array();
		}
	}

}