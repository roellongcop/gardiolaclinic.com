
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">


<!-- SITE TITLE -->
<title> <?= isset($clinic_name)? $clinic_name: 'Dental Clinic' ?> </title>
<link href="<?=base_url('assets/assets/css/theme.css')?>" rel="stylesheet">
<link href="<?=base_url('assets/assets/css/theme_violet.css')?>" rel="stylesheet">
<link href="<?=base_url('assets/assets/css/theme_red.css')?>" rel="stylesheet">
<link href="<?=base_url('assets/assets/css/theme_green.css')?>" rel="stylesheet">
<!-- =========================
      FAV AND TOUCH ICONS
============================== -->
<link rel="shortcut icon" href="assets/assets/images/web_logo.jpg">
<?= link_tag('assets/assets/images/apple-touch-icon.png','apple-touch-icon')?>
<?= link_tag('assets/assets/images/apple-touch-icon-114x114.png','apple-touch-icon')?>
<?= link_tag('assets/assets/images/apple-touch-icon-72x72.png','apple-touch-icon')?>
<?= link_tag('assets/font-awesome-4.7.0/css/font-awesome.css')?>

<!-- CALENDAR -->
<link href="<?= base_url('assets/fullcalendar/dist/fullcalendar.min.css')?>" rel="stylesheet">
 <link href="<?= base_url('assets/fullcalendar/dist/fullcalendar.print.css')?>" rel="stylesheet" media="print">

<!-- =========================
     STYLESHEETS
============================== -->

<link href="<?=base_url('assets/pnotify/dist/pnotify.css')?>" rel="stylesheet">
<link href="<?=base_url('assets/pnotify/dist/pnotify.buttons.css')?>" rel="stylesheet">
<link href="<?=base_url('assets/pnotify/dist/pnotify.nonblock.css')?>" rel="stylesheet">

<link href="<?=base_url('assets/checkboxmaster/awesome-bootstrap-checkbox.css')?>" rel="stylesheet">


<link href="<?=base_url('assets/assets/css/master.css')?>" rel="stylesheet">
<link href="<?= base_url('assets/style.css')?>" rel="stylesheet">
<script type="text/javascript">
    var clinic_name = "<?= isset($clinic_name)? ucwords($clinic_name): '' ?>"
</script>
</head>

<body data-spy="scroll" data-target=".navbar">

<!-- =========================
     TOP BAR
============================== -->
<div class="top-bar" id="top-bar">
    <div class="container">
        <div class="row">

            <!-- TOP BAR LEFT -->
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div class="top-bar-adress" id="el-address">
                    <i class="flaticon-navigation-arrow"></i>
                    {{ address }}
                </div>
            </div>
            <!-- PARA SA ALERT -->
            <!-- TOP BAR RIGHT -->
            <?php  if (isset($_SESSION['currentuser'])): ?>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <div class="top-bar-mail" id="el-notif">
                        <a href="#recommendation" data-toggle="modal" @click="notif=0">
                            <i class="fa fa-envelope"></i>
                            <!-- <label style="color: red" v-if="notif" >
                                {{ notif }}
                            </label> -->
                        </a>
                       <?= $this->session->userdata('currentuser') ?>
                    </div>
                </div>
           <?php endif ?>
        </div>
    </div>
</div>


<!-- ================================ -->
            <!-- OK -->
<!-- =============================== -->
<div class="header" id="header">
    <div class="container">
        <div class="row">
            <!-- HEADER LOGO -->
            <div class="col-lg-4 col-md-4 col-sm-5 col-xs-12">
                <div class="header-logo" style="width: 500px;">
                    <a href="#">
                        <img src="<?= base_url('assets/assets/images/logo.svg')?>" alt="" />
                        <span class="bold600 color-child-6"><?= $clinic_name ?> </span>
                        <!-- <span class="color-child-5">DENTALS</span> -->
                    </a>
                </div>
            </div>

            <!-- HEADER BUTTONS -->
            <div class="col-lg-8 col-md-8 col-sm-7 col-xs-12">
                <div class="header-button">
                    <?php if (isset($_SESSION['currentuser'])  && $_SESSION['usertype'] == 'patient'): ?>
                        <a href="<?= site_url('logout')?>" class="fancybox-3 btn btn-default"
                            id="logut">Log Out
                        </a>
                    <?php else: ?>
                        <a class="fancybox-3 btn btn-default "
                            data-toggle="modal" data-target="#registration" id="signup"
                            style="float: right;">
                            <span class="plus">+</span>Sign Up / Sign In
                        </a>
                    <?php endif ?>
                </div>
            </div>
        </div>
    </div>
</div>




<div class="top-menu" id="top-menu">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="mobile-bar-cont">
                    <div class="top-menu-logo">
                        <a href="#"><img src="<?= base_url()?>assets/assets/images/logo.svg" alt="" />
                            <span class="bold600 color-child-6"><?= $clinic_name ?></span>
                        </a>
                    </div>
                    <div class="mobile-bar">
                        <div class="show-menu" id="show-menu">
                            <i class="fa fa-navicon"></i>
                        </div>
                        <div class="color-sw-open-1" id="color-sw-open-1">
                           <i class="fa fa-gear"></i>
                        </div>
                    </div>
                </div>
                <ul class="nav navbar-nav">
                    <li class="<?= (isset($page) && $page == 'home')? 'active': '' ?>">
                        <a href="<?=site_url('home')?>">HOME</a>
                    </li>
                    <li class="<?= (isset($page) && $page == 'about')? 'active': '' ?>">
                        <a href="<?=site_url('about')?>">ABOUT US</a>
                    </li>
                    <li class="<?= (isset($page) && $page == 'services')? 'dropdown active': '' ?>">
                        <a data-toggle="dropdown" href="#">SERVICES</a>
                        <ul class="dropdown-menu" role="menu" id="el-service">
                            <li v-for="service in services">
                                <a @click="showService(service.id)" href="#">
                                    {{ service.name }}
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="<?= (isset($page) && $page == 'contact')? 'active': '' ?>">
                        <a href="<?=site_url('contact')?>">CONTACT US</a>
                    </li>
                    <?php if (isset($_SESSION['currentuser'])): ?>
                        <li class="<?= (isset($page) && $page == 'appointment')? 'active': '' ?>">
                            <a href="<?=site_url('bookreservation')?>">
                                MAKE APPOINTMENT
                            </a>
                        </li>
                    <?php endif ?>
                </ul>
                <?php if (isset($_SESSION['currentuser'])): ?>
                    <ul class= "nav navbar-nav" style="float: right">
                        <li class="<?= (isset($page) && $page == 'reservations')? 'active': '' ?>">
                            <a href="<?= site_url('reservation')?>">MY RESERVATION</a>
                        </li>
                        <li class="<?= (isset($page) && $page == 'settings')? 'active': '' ?>">
                            <a href="<?=site_url('settings')?>" >SETTINGS</a>
                        </li>
                    </ul>
                <?php endif ?>

            </div>
        </div>
    </div>
</div>
<!-- =========================
     END MAIN MENU
============================== -->


<!-- =========================
    COLOR SWITHER
============================== -->
<div class="color-sw-open" id="color-sw-open">
    <i class="fa fa-gear"></i>
</div>

<div class="color-sw" id="color-sw">
    <div class="color-sw-header">
        Style switcher
        <span class="color-sw-close" id="color-sw-close">
            <i class="fa fa-close"></i>
        </span>
    </div>
    <div class="color-sw-body">
        <p>Choose color style</p>
        <div class="color-sw-item" id="blue">
            <div></div>
        </div>
        <div class="color-sw-item" id="violet">
            <div></div>
        </div>
        <div class="color-sw-item" id="red">
            <div></div>
        </div>
        <div class="color-sw-item" id="green">
            <div></div>
        </div>
    </div>
</div>


<!-- =========================
    END COLOR SWITHER
============================== -->

<div id="el-recommendation">
    <recommendation :recommendations="recommendations"></recommendation>
</div>
