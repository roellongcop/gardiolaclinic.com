<?php defined('BASEPATH') OR exit('No direct script access allowed');?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <!-- Meta, title, CSS, favicons, etc. -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title> <?= (null !== $this->session->userdata('clinic_name'))? $this->session->userdata('clinic_name'): 'Dental Clinic' ?> </title>

        <?= link_tag('assets/bootstrap/css/bootstrap.min.css'); ?>
        <?= link_tag('assets/font-awesome/css/font-awesome.min.css'); ?>

        <?= link_tag('assets/nprogress/nprogress.css'); ?>
        <?= link_tag('assets/iCheck/skins/flat/green.css'); ?>
        <?= link_tag('assets/data_table/css/style.min.css'); ?>
        <?= link_tag('assets/datatables.net-buttons-bs/css/buttons.bootstrap.min.css'); ?>
        <?= link_tag('assets/drog_drop/css/dropzone.css'); ?>
        <?= link_tag('assets/select2/css/select2.min.css'); ?>
        <?= link_tag('assets/scrollbar/css/scrollbar.min.css'); ?>
        <?= link_tag('assets/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css'); ?>

        <?= link_tag('assets/pnotify/dist/pnotify.css'); ?>
        <?= link_tag('assets/pnotify/dist/pnotify.buttons.css'); ?>
        <?= link_tag('assets/pnotify/dist/pnotify.nonblock.css'); ?>
        <?= link_tag('assets/checkboxmaster/awesome-bootstrap-checkbox.css'); ?>
        <?= link_tag('assets/vue-good-table-master/vue-good-table.min.css'); ?>

        <?= link_tag('assets/custom/css/custom.min.css'); ?>
        <?= link_tag('assets/my_style/style.css'); ?>
        <script>
            var clinic_name = "<?= (null !== $this->session->userdata('clinic_name'))? ucwords($this->session->userdata('clinic_name')): '' ?>"
            var base_url = "<?= base_url(); ?>";
        </script>



    </head>

    <body class="nav-md footer_fixed">
        <div class="container body" style="height: 220px;">
            <div class="main_container">
                <div id="myApp" >
                    <!-- <my-header :user="activeUser"></my-header> -->

                    <div class="col-md-3 left_col menu_fixed">
                        <div class="left_col scroll-view">
                            <div class="navbar nav_title" style="border: 0;">
                                <a href="index.html" class="site_title">
                                    <i class="fa fa-user-md"></i>
                                    <span><?= ucwords('Hi '.$this->session->userdata('usertype')) ?></span>
                                </a>
                            </div>
                            <div class="clearfix"></div>

                            <!-- menu profile quick info -->
                            <div class="profile clearfix">
                                <div class="profile_pic">
                                    <img :src="image" alt="..." class="img-circle profile_img">
                                </div>
                                <div class="profile_info">
                                    <span>Welcome,</span>
                                    <h2>{{ activeUser }}</h2>
                                </div>
                                <div class="clearfix"></div>
                            </div><br>
                            <!-- /menu profile quick info -->

                            <!-- sidebar menu -->
                            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                                <div class="menu_section">
                                    <h3>General</h3>
                                    <ul class="nav side-menu">
                                        <li>
                                            <a :href="dashboard">
                                                <i class="fa fa-dashboard"></i>
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a :href="reservation">
                                                <i class="fa fa-pencil"></i>
                                                Dental Appointments
                                            </a>
                                        </li>
                                        <li>
                                            <a :href="patients">
                                                <i class="fa fa-group"></i>
                                                Patients
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i class="fa fa-dropbox"></i> Inventory
                                                <span class="fa fa-chevron-down"></span>
                                            </a>
                                            <ul class="nav child_menu">
                                                 <li><a :href="item">Items</a></li>
                                                 <li><a :href="package">Packages</a></li>
                                                 <!-- <li><a :href="category">Item Categories</a></li> -->
                                                 <li><a :href="supplier">Suppliers</a></li>
                                                 <li><a :href="unit">Unit of Measurement</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a>
                                                <i class="fa fa-area-chart"></i> Graphs
                                                <span class="fa fa-chevron-down"></span>
                                            </a>
                                            <ul class="nav child_menu">
                                                <li><a :href="inventoryChart">Inventory</a></li>
                                                <li><a :href="reservationChart">Reservation</a></li>
                                            </ul>
                                        </li>

                                        <?php if($this->session->userdata('usertype') == 'doctor') : ?>
                                        <li>
                                            <a>
                                                <i class="fa fa-home"></i> Our Shop
                                                <span class="fa fa-chevron-down"></span>
                                            </a>
                                            <ul class="nav child_menu">
                                                <li><a :href="service">Services</a></li>
                                            </ul>
                                        </li>
                                        <?php else: ?>
                                            <li>
                                                <a>
                                                    <i class="fa fa-home"></i> Our Shop
                                                    <span class="fa fa-chevron-down"></span>
                                                </a>
                                                <ul class="nav child_menu">
                                                    <li><a :href="opening">Opening Hours</a></li>
                                                    <li><a :href="service">Services</a></li>
                                                    <li><a :href="about">About Us</a></li>
                                                    <li><a :href="images">Images</a></li>
                                                    <li><a :href="carousel">Site Carousel</a></li>
                                                </ul>
                                            </li>
                                        <?php endif; ?>

                                        <li>
                                            <a>
                                                <i class="fa fa-database"></i> Archived
                                                <span class="fa fa-chevron-down"></span>
                                            </a>
                                            <ul class="nav child_menu">
                                                <li><a href="<?= base_url('archived-users') ?>">Admin Users</a></li>
                                                <li><a href="<?= base_url('archived-appointments') ?>">Appointments</a></li>
                                                <li><a href="<?= base_url('archived-items') ?>">Items</a></li>
                                                <li><a href="<?= base_url('archived-packages') ?>">Package</a></li>
                                                <li><a href="<?= base_url('archived-suppliers') ?>">Suppliers</a></li>
                                                <li><a href="<?= base_url('archived-units') ?>">Unit of Measurement</a></li>
                                                <li><a href="<?= base_url('archived-openings') ?>">Opening Hours</a></li>
                                                <li><a href="<?= base_url('archived-services') ?>">Services</a></li>
                                                <li><a href="<?= base_url('archived-abouts') ?>">About Us</a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a :href="users">
                                                <i class="fa fa-user"></i>Admin Users
                                            </a>
                                        </li>

                                        <!-- <li>
                                            <a :href="logout">
                                                <i class="fa fa-power-off"></i>Logout
                                            </a>
                                        </li> -->
                                    </ul>
                                </div>
                            </div>
                            <!-- /sidebar menu -->
                        </div>
                    </div>

                    <!-- top navigation -->
                    <div class="ph top_nav h">
                        <div class="nav_menu">
                            <nav>
                                <div class="nav toggle">
                                    <a id="menu_toggle"><i class="fa fa-bars"></i></a>
                                </div>
                                <ul class="nav navbar-nav navbar-right">
                                    <li class="">
                                        <a href="#" class="user-profile dropdown-toggle"
                                            data-toggle="dropdown" aria-expanded="false">
                                            <img :src="image">
                                            <span class=" fa fa-angle-down"></span>
                                        </a>
                                        <ul class="dropdown-menu dropdown-usermenu pull-right">
                                            <li>
                                                <a :href="profile">
                                                    <i class="fa fa-user pull-right"></i> Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a :href="logout">
                                                    <i class="fa fa-sign-out pull-right"></i> Log Out
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <!-- /top navigation -->
