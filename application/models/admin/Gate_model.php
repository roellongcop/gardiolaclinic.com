<?php 
defined('BASEPATH') OR exit('No direct script access allowed');
 
class Gate_model extends CI_Model
{ 
	


 	public function logout() 
	{
		$this->session->unset_userdata(
			array('usertype', 'currentuser', 'userid', 'chk_ser')
		);
		session_destroy();
		redirect(site_url('home')); 
	}

}