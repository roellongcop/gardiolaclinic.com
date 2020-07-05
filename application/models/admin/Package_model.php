<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Package_model extends CI_Model
{


	public function getServices()
	{
		$query = $this->db->select('name, id')
			->from('tbl_service')
			->where('is_deleted', 0)
			->get();

		return $query->result_array();
	}

	public function getInventoryItems()
	{
		$query = $this->db->select('i.id, i.name, u.name as unit_name')
			->from('tbl_item AS i')
			->join('tbl_unit AS u', 'i.unit_id = u.id')
			->join('tbl_category AS c', 'i.category_id = c.id')
			->where('c.name', 'Consumable')
			->get();

		return $query->result_array();
	}

	public function delete()
	{
		$post = $this->input->post();
		$this->db->update('tbl_package',
			array('is_deleted' => 1),
			array('id' => $post['id'])
		);
	}

	public function update()
	{
		$post = $this->input->post();
		$this->db->update('tbl_package',
			array(
				'name' => ucwords($post['name']),
				'service_id' => $post['service_id'],
				'items' => json_encode($post['items']),
				'is_deleted' => 0
			),
			array('id' => $post['id'])
		);

	}

	public function insert()
	{
		$post = $this->input->post();

		$this->db->insert('tbl_package',
			array(
				'name' => ucwords($post['name']),
				'service_id' => $post['service_id'],
				'items' => json_encode($post['items']),
				'is_deleted' => 0
			)
		);
	}

	public function get($id = '')
	{
		if($id === '')
		{
			$query = $this->db->select('p.id, p.name, p.service_id, p.items,
					s.name AS service_name')
				->from('tbl_package AS p')
				->join('tbl_service AS s', 's.id = p.service_id')
				->where('p.is_deleted', 0)
				->order_by('p.id', 'DESC')
				->get();
			return $query->result_array();
		}
	}

}
