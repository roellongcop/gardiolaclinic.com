<?php defined('BASEPATH') OR exit('No direct script access allowed');
 
/*==================
ADMIN ROUTER
==================*/
$route['update_reservation'] = 'admin/reservation/updateStatus';
$route['dashboard'] = 'admin/dashboard';
 
$route['archived-users']        = 'admin/archived/users';
$route['archived-appointments'] = 'admin/archived/appointments';
$route['archived-items']        = 'admin/archived/items';
$route['archived-packages']     = 'admin/archived/packages';
$route['archived-suppliers']    = 'admin/archived/suppliers';
$route['archived-units']        = 'admin/archived/units';
$route['archived-openings']     = 'admin/archived/openings';
$route['archived-services']     = 'admin/archived/services';
$route['archived-abouts']       = 'admin/archived/abouts'; 

// -----------------------------------------SITE--------------------------------------------



$route['register_patient']       = 'site/user/register';


// $route['save_appointment']       = 'site/home/bookedAppointment';


$route['bookreservation']       = 'site/home/bookReservation';
// $route['bookedAppointment']       = 'site/home/bookedAppointment';

$route['updateAccount']          = 'site/home/updateAccount';

$route['viewReservation/(:any)'] = 'site/home/viewReservation/$1';

$route['user_login']             = 'site/gate/login';
$route['logout']                 = 'site/gate/logout';
$route['verify/(:any)']          = 'site/user/verify/$1';
$route['update_password']        = 'site/home/updatePassword';
$route['service/(:any)']         = 'site/home/findService/$1';
$route['register']               = 'site/user/register';

$route['settings']               = 'site/home/settings';
$route['home']                   = 'site/home';
$route['calendar']               = 'site/home/calendar';
$route['contact']                = 'site/home/contactUs';
$route['about']                  = 'site/home/aboutUs';
$route['reservation']            = 'site/home/reservations';




$route['default_controller'] = 'default_controller';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
