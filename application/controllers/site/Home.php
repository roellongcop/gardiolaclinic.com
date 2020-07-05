<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {
	public function __construct()
	{
		parent:: __construct();
		$this->load->model('site/Home_model','home');
	}

	public function checkIfReserved()
	{
		echo json_encode($this->home->checkIfReserved());
	}

	
	public function updateCredentials()
	{
		$this->home->updateCredentials();
	}

	public function updateProfile()
	{
		$this->home->updateProfile();
	}

	public function updateAccount()
	{
		$this->home->updateAccount();
		redirect(site_url('settings'));
	}


	
	public function findItems()
	{
		echo json_encode($this->home->findItems());
	}

	public function viewReservation($reservationID)
	{
		$data['clinic_name'] = $this->home->getClinicName();
		$data['vue'] = 'reservation.js';
		$data['page'] = 'reservations';

		$data['activeReservation'] = $this->home->getReservations($reservationID); 

		$data['header'] = $this->load->view('site/header',$data,TRUE);
		$data['footer'] = $this->load->view('site/footer',$data,TRUE);

		$this->load->view('site/reservation',$data);
	}
 

	public function bookedAppointment()
	{
		$this->home->bookedAppointment(); 
	}

	
	public function getProfileInformation()
	{
		echo json_encode($this->home->getProfileInformation());
	}
	

	public function getPatientInformation()
	{
		echo json_encode($this->home->getPatientInformation($this->session->userdata('userid')));
	}

	public function getPatientName()
	{
		echo json_encode($this->home->getPatientName());
	}
	
	public function getTermsAndConditions()
	{
		echo json_encode($this->home->getTermsAndConditions());
	}

	public function getServices()
	{
		echo json_encode($this->home->getServices());
	}

	public function findApointments()
	{
		echo json_encode($this->home->findApointments());
	}

	public function settings()
	{
		$data['clinic_name'] = $this->home->getClinicName();
		$data['vue']      = "settings.js";
		$data['page']     = 'settings';
 

		$data['header']   = $this->load->view('site/header',$data,TRUE);
		$data['footer']   = $this->load->view('site/footer',$data,TRUE);

		$this->load->view('site/settings',$data);
	}

	
	public function getFullDates()
	{
		echo json_encode($this->home->getFullDates());
	}

	public function bookReservation()
	{
		$data['clinic_name'] = $this->home->getClinicName();
		$data['page']        = "appointment";
		$data['vue']         = "bookappointment.js"; 
		
		$data['header']   = $this->load->view('site/header',$data, TRUE);
		$data['footer']   = $this->load->view('site/footer',$data, TRUE);

		$this->load->view('site/book_appointment',$data);
	}

	public function calendar()
	{
		$data['clinic_name'] = $this->home->getClinicName();
		$data['page']            = "calendar";
		$data['vue']            = "calendar.js"; 
		
		$data['header']   = $this->load->view('site/header',$data,TRUE);
		$data['footer']   = $this->load->view('site/footer',$data,TRUE);

		$this->load->view('site/calendar',$data);
	}

	public function contactUs()
	{
		$data['clinic_name'] = $this->home->getClinicName();
		$data['page']     = "contact";
		$data['vue']      = "contact.js";

		 
		
		$data['header'] = $this->load->view('site/header',$data,TRUE);
		$data['footer'] = $this->load->view('site/footer',$data,TRUE);

		$this->load->view('site/contact',$data);
	}

	

	public function getContacts()
	{
		echo $this->home->getContacts();
	}

	public function getClinicInformation()
	{
		echo json_encode($this->home->getClinicInformation());
	}

	public function aboutUs()
	{
		$data['clinic_name'] = $this->home->getClinicName();
		$data['page'] = "about";
		$data['vue'] = "about.js";

		$data['header'] = $this->load->view('site/header',$data,TRUE);
		$data['footer'] = $this->load->view('site/footer',$data,TRUE);

		$this->load->view('site/about',$data);
	}


	public function reservations()
	{
		$data['clinic_name'] = $this->home->getClinicName();
		$data['page']         = 'reservations';
		$data['vue']         = 'reservation.js';
		$data['reservations'] = $this->home->getReservations();

		$data['header'] = $this->load->view('site/header',$data,TRUE);
		$data['footer'] = $this->load->view('site/footer',$data,TRUE);

		$this->load->view('site/reservation',$data);
	}

	public function updatePassword()
	{
		$this->home->updatePassword();
		redirect(site_url('settings'));
	}
	 
	public function getReservations()
	{
		echo json_encode($this->home->getReservations());
	}

	public function getDashboardServices()
	{
		echo json_encode($this->home->getDashboardServices());
	}

	public function getClinicDescription()
	{
		echo json_encode($this->home->getClinicDescription());
	}

	public function getHappyPatients()
	{
		echo json_encode($this->home->getHappyPatients());
	}

	public function getClinicName()
	{
		echo json_encode($this->home->getClinicName());
	}
	

	public function index()
	{
		$data['page'] = "home";
		$data['vue']  = "home.js";

		$data['clinic_name'] = $this->home->getClinicName();
		$data['carousels'] = $this->home->getCarousel();
		$data['happy']    = $this->home->getHappyPatients();
 
		$data['header'] = $this->load->view('site/header', $data, TRUE);
		$data['footer'] = $this->load->view('site/footer', $data, TRUE);

 
		$this->load->view('site/home',$data); 
	}



	public function findservice($serviceID)
	{
		$data['clinic_name'] = $this->home->getClinicName();
		$data['page']     = 'services';
		$data['service']  = $this->home->findService($serviceID);

		$data['header']   = $this->load->view('site/header',$data,TRUE);
		$data['footer']   = $this->load->view('site/footer',$data,TRUE);
		$this->load->view('site/services',$data);
	}
}
