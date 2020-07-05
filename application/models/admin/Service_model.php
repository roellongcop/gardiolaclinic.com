<?php 
defined('BASEPATH') OR exit('No direct script access allowed');
 
class Service_model extends CI_Model { 
	
	public function getServices($id = "")
	{
		if ($id === "") 
		{
			$query = $this->db->select()
			->from('tbl_service')
			->where('is_deleted', 0)
			->order_by('id', 'DESC')
			->get();
			return $query->result_array();
		}
		$query = $this->db->get_where('tbl_service', array('id' => $id));
		return $query->row_array();
	}

	public function save()
	{
		$post = $this->input->post();
		$this->db->insert('tbl_service',
			array(
				'name' => ucwords($post['name']),
				'description' => $post['description'],
				'price' => $post['price'],
				'is_deleted' => 0
			)
		);
		$this->session->set_flashdata('success', 'Successfully Save');
		redirect(base_url('admin/service'));
	}

	public function delete($id)
	{
		$this->db->update('tbl_service', 
			array('is_deleted' => 1),  
			array('id' => $id)
		);
		$this->session->set_flashdata('success', 'Successfully Deleted');
		redirect(base_url('admin/service'));
	}

	public function update()
	{
		$post = $this->input->post();
		$this->db->update('tbl_service',
			array(
				'name' => ucwords($post['name']),
				'description' => $post['description'],
				'price' => $post['price'],
				'is_deleted' => 0
			),
			array('id' => $post['id'])
		);
		$this->session->set_flashdata('success', 'Successfully Updated');
		redirect(base_url('admin/service'));
	}

}