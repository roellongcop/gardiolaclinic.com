<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

<!DOCTYPE html>
<html>
<head>
	<title>Inventory</title>
	<?= link_tag('assets/bootstrap/css/bootstrap.min.css'); ?> 
    <?= link_tag('assets/font-awesome/css/font-awesome.min.css'); ?> 
    <?= link_tag('assets/nprogress/nprogress.css'); ?>  
    <?= link_tag('assets/animate.css/animate.min.css'); ?>  
    <?= link_tag('assets/custom/css/custom.min.css'); ?>
    <?= link_tag('assets/my_style/style.css'); ?>
</head>
	<body class="login">
		<a class="hiddenanchor" id="signup"></a>
		<a class="hiddenanchor" id="signin"></a>

		<div class="login_wrapper" id="loginPage">
			<div class="animate form login_form">
				<section class="login_content">
					<h1>Login Form</h1>
					<div class="alert alert-danger" v-if="error">
						<span class="pull-right" @click="error = false"> &times;</span>
						Login Failed
					</div>
					<input type="text" class="form-control" placeholder="Username" 
						v-model="user.name"><br>
					<input type="password" class="form-control" placeholder="Password" 
						v-model="user.password"><br>
					<a class="btn btn-default" id="btn_login" @click="login()">Log in</a>
					<div class="clearfix"></div>
					<div class="separator">
						<div class="clearfix"></div><br>
						<h1><i class="fa fa-wrench"></i> POS / Inventory Management</h1>
						<p>©<?= date('Y') ?> All Rights Reserved. Maron Builders Company</p>
					</div>
				</section>
			</div>

			<div id="register" class="animate form registration_form">
				<section class="login_content">
					<h1>Forgot Password</h1>
					<p>Try to input your <strong>password code</strong> below</p>
					<input type="text" id="code" class="form-control" 
						placeholder="Input Password Code"><br>
					<a class="btn btn-default" id="submit_code">Submit</a>
					<div class="clearfix"></div>
					<div class="separator">
						<p id="user_code" class="change_link">
							<a href="#signin" class="to_register"> Back to Log in </a>
						</p> 
						<div class="clearfix"></div><br>
						<h1><i class="fa fa-wrench"></i> Inventory Management</h1>
						<p>©<?= date('Y') ?> All Rights Reserved. Cavite State University - 
							Carmona, Campus</p>
					</div>
				</section>
			</div>
		</div>
	</body>
	<script>
		var base_url = "<?= base_url() ?>";
	</script>
    <?= script_tag('assets/jquery/dist/jquery.min.js') ?>
    <?= script_tag('assets/js_frmwrk/axios.js') ?>  
    <?= script_tag('assets/js_frmwrk/vue.js') ?>  
    <?= script_tag('assets/my_style/'. $vueJS) ?> 

</html>