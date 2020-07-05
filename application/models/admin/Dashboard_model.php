<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard_model extends CI_Model
{


	public function getClinicName()
	{
		$query = $this->db->get_where('tbl_about', array('name' => 'basic'));

		if ($query->num_rows())
		{
			$information = json_decode($query->row()->description);
			return $information->name;
		}

		return ;

	}


	public function monthly_total($year, $month)
	{
		$match = $year . '/' . $month;
		$query = $this->db->select()
			->from('tbl_reservation')
			->like('YEAR(daystart)', $year)
			->like('MONTH(daystart)', $month) 
			->get();
		return $query->num_rows();
	}

	public function getTotals($type)
	{
		if ($type == 'patients')
		{
			$query = $this->db->get_where('tbl_account', [
				'type' => 'patient',
				'verify' => 1
			]);
		}
		elseif($type == 'reservations')
		{
			$query = $this->db->get_where('tbl_reservation', array('r_status' => 'pending'));
		}
		else
		{
			$query = $this->db->get('tbl_item');
		}

		return $query->num_rows();
	}


	public function getReservationChart($year)
 	{
 		$totals = array();
		array_push($totals, $this->monthly_total($year , '1'));
		array_push($totals, $this->monthly_total($year , '2'));
		array_push($totals, $this->monthly_total($year , '3'));
		array_push($totals, $this->monthly_total($year , '4'));
		array_push($totals, $this->monthly_total($year , '5'));
		array_push($totals, $this->monthly_total($year , '6'));
		array_push($totals, $this->monthly_total($year , '7'));
		array_push($totals, $this->monthly_total($year , '8'));
		array_push($totals, $this->monthly_total($year , '9'));
		array_push($totals, $this->monthly_total($year , '10'));
		array_push($totals, $this->monthly_total($year , '11'));
		array_push($totals, $this->monthly_total($year , '12'));
		return $totals;
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




}
