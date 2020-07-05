<?php
defined('BASEPATH') OR exit('No direct script access allowed');


class Archived_model extends CI_Model {




	public function get($tbl)
	{
		if ($tbl == "tbl_reservation")
		{
			$query = $this->db->select('a.id AS patient_id, CONCAT(a.fname, " ", a.mi, ". ", a.lname)
 				AS fullname, a.address, a.cp_num, a.email, a.gender, r.id, r.r_status, r.typeser,
 				r.daystart, r.timestart, r.recommendation')
	 			->from('tbl_account AS a')
	 			->join('tbl_reservation AS r', 'r.patient_id = a.id')
	 			->where('r.r_status', 'disapproved')
	 			->order_by('r.id', 'DESC')
	 			->get();

	 		return $query->result_array();
		}
		elseif($tbl == "tbl_item")
		{
			$query = $this->db->select('i.id, i.name, i.quantity, i.price, i.max, i.min, i.stock, c.id AS 
				category_id, c.name AS category_name, s.id AS supplier_id, s.name as supplier_name, u.id AS 
				unit_id, u.name as unit_name')
				->from('tbl_item AS i')
				->join('tbl_category AS c', 'i.category_id = c.id')
				->join('tbl_supplier AS s', 'i.supplier_id = s.id')
				->join('tbl_unit AS u', 'i.unit_id = u.id')
				->order_by('i.id', 'DESC')
				->where('i.is_deleted', 1)
				->get();

			return $query->result_array();
		}
		elseif($tbl == "tbl_account")
		{
			$query = $this->db->select('id, CONCAT(fname, " ", mi, ". ", lname) AS fullname, address, 
				email, cp_num, username, gender, type')
				->from('tbl_account')
				->where('type !=', 'patient')
				->where('is_deleted', 1)
				->get();
			return $query->result_array();
		}
		elseif($tbl == "tbl_package")
		{
			$query = $this->db->select('p.id, p.name, p.service_id, p.items, s.name AS service_name')
				->from('tbl_package AS p')
				->join('tbl_service AS s', 's.id = p.service_id')
				->where('p.is_deleted', 1)
				->order_by('p.id', 'DESC')
				->get();
			return $query->result_array();
		}
		else
		{
			$query = $this->db->get_where($tbl, ['is_deleted' => 1]);
			return $query->result_array();
		}
	}


	public function restore()
	{
		$data = $this->input->post('selected');
		$tbl = $this->input->post('tbl');
		if ($tbl == "tbl_reservation")
		{
			foreach ($data as $row)
			{
				$this->db->update($tbl,
					array('r_status' => 'pending'),
					array('id' => $row['id'])
				);
			}
		}
		else
		{
			foreach ($data as $row)
			{
				$this->db->update($tbl,
					array('is_deleted' => 0),
					array('id' => $row['id'])
				);
			}
		}
	}

}
