<?php 
defined('BASEPATH') OR exit('No direct script access allowed');
 
class About_model extends CI_Model { 




	/*
		pag kuha ng basic information ng clinic 
		name, email, facebook, address
	*/
	public function getBasicInformation()
	{
		$query = $this->db->get_where('tbl_about', ['name' => 'basic']);

		return $query->row()->description;
	}


	/*
		pagccheck kung wala pang basic information yung clinic
		para malaman kung ieedit ba o mag iinsert ng information
	*/
	public function isBasicEmpty()
	{
		$query = $this->db->get_where('tbl_about', ['name' => 'basic']);

		return $query->num_rows() == 0;
	}


	/*
		paguupdate ng basic information
	*/
	public function updateBasicInformation()
	{ 
		$post = $this->input->post();
		if ($this->isBasicEmpty()) 
		{
			$this->db->insert('tbl_about', [
				'name' => 'basic',
				'description' => json_encode($post['basic'])
			]); 
		}
		else
		{
			$this->db->where(['name' => 'basic']);
			$this->db->update('tbl_about', [
				'description' => json_encode($post['basic'])
			]);
		} 
		$this->session->clinic_name = $this->getClinicName();
	}






	public function getClinicName()
	{
		$query = $this->db->get_where('tbl_about', ['name' => 'basic']);
		$information = json_decode($query->row()->description);
		return $information->name;
	}






	public function get($id = "")
	{
		if ($id === "") 
		{
			$query = $this->db->select()
				->from('tbl_about')
				->order_by('id', 'DESC')
				->where('name !=', 'basic')
				->where('is_deleted', 0)
				->get();
			return $query->result_array();
		}
		$query = $this->db->get_where('tbl_about', ['id' => $id]);
		return $query->row_array();
	}






	public function save()
	{
		$post = $this->input->post();

		$this->db->insert('tbl_about', [
			'name' => ucwords($post['name']),
			'description' => $post['description']
		]);

		$this->session->set_flashdata('success', 'Successfully Added');
		redirect(base_url('admin/about'));
	}




	public function delete($id)
	{
		$this->db->where(['id' => $id]);
		$this->db->update('tbl_about', ['is_deleted' => 1]);

		$this->session->set_flashdata('success', 'Successfully Deleted');
		
		redirect(base_url('admin/about'));
	}


	public function update()
	{
		$post = $this->input->post();

		$this->db->where(['id' => $post['id']]);
		$this->db->update('tbl_about', [
			'name' => ucwords($post['name']),
			'description' => $post['description']
		]);

		$this->session->set_flashdata('success', 'Successfully Updated');
		redirect(base_url('admin/about'));
	}

}