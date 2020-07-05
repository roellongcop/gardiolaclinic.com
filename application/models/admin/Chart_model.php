<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Chart_model extends CI_Model
{


	public function monthly_total($year, $month)
	{
		$match = $year . '/' . $month;
		$query = $this->db->select()
			->from('tbl_reservation')
			->like('daystart', $match, 'after')
			->get();
		return $query->num_rows();
	}

	public function getDistinctServices($year)
	{
		$services = [];
		$query = $this->db->select('DISTINCT(typeser)')
			->from('tbl_reservation')
			->where('YEAR(daystart)', $year)
			->get();

 		foreach ($query->result_array() as $service)
 		{
 			array_push($services, $service['typeser']);
 		}

 		return $services;
	}


	public function getReservationChart($year)
 	{
 		$totals = [];
 		$services = $this->getDistinctServices($year);
 		foreach ($services as $service)
 		{
 			$query = $this->db->select()
 				->from('tbl_reservation')
 				->where('typeser', $service)
        ->where('YEAR(daystart)', $year)
				->where('r_status', 'finished')
				->get();

			array_push($totals, $query->num_rows());
 		}
 		return json_encode([
 			'services' => $services,
 			'totals' => $totals
 		]);
 	// 	$totals = array();
		// array_push($totals, $this->monthly_total($year , '01'));
		// array_push($totals, $this->monthly_total($year , '02'));
		// array_push($totals, $this->monthly_total($year , '03'));
		// array_push($totals, $this->monthly_total($year , '04'));
		// array_push($totals, $this->monthly_total($year , '05'));
		// array_push($totals, $this->monthly_total($year , '06'));
		// array_push($totals, $this->monthly_total($year , '07'));
		// array_push($totals, $this->monthly_total($year , '08'));
		// array_push($totals, $this->monthly_total($year , '09'));
		// array_push($totals, $this->monthly_total($year , '10'));
		// array_push($totals, $this->monthly_total($year , '11'));
		// array_push($totals, $this->monthly_total($year , '12'));
		// return $totals;
 	}

	public function get_id($tbl, $name)
	{
		$query = $this->db->get_where($tbl, array('name' => $name));
		return $query->row()->id;
	}

	public function stock_chart()
	{
		$stock = array();

		$empty    = $this->db->get_where('tbl_item', array('stock' => 'Empty'));
		$full     = $this->db->get_where('tbl_item', array('stock' => 'Full'));
		$critical = $this->db->get_where('tbl_item', array('stock' => 'Critical'));
		$safe     = $this->db->get_where('tbl_item', array('stock' => 'Safe'));

		array_push($stock, $empty->num_rows());
		array_push($stock, $critical->num_rows());
		array_push($stock, $safe->num_rows());
		array_push($stock, $full->num_rows());

		return $stock;
	}


	public function inventory_data($tbl, $by)
	{
		$data = array();
		$query = $this->db->distinct('name')
			->from($tbl)
			->where('is_deleted', 0)
			->get();

		foreach ($query->result_array() as $name)
		{
			$id = $this->get_id($tbl, $name['name']);
			$total = $this->db->get_where('tbl_item', array($by => $id));

			if ($total)
			{
				array_push($data, $total->num_rows());
			}
		}
		return $data;
	}

	public function inventory_label($tbl)
	{
		$label = array();
		$query = $this->db->distinct('name')
			->from($tbl)
			->where('is_deleted', 0)
			->get();

		foreach ($query->result_array() as $name)
		{
			array_push($label, $name['name']);
		}
		return $label;
	}
}
