<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="<?= base_url('assets/bootstrap/css/bootstrap.min.css') ?>">
</head>
<body>
	<div class="container">
		<div class="jumbotron">
			<center>
				<h3>
  				<img style="float:center;" width="50" height="50"
  					src="<?= base_url('assets/assets/images/logo.svg') ?>" alt="" />
				 <?= $clinic_name ?>
				</h3>
  		</center>

			<h3>Email Announcement </h3>
			<h4>Your Appointment Request was set to <label class="label label-primary"><?= $status ?></label></h4> <hr>
			<?php if ($status == "disapproved") : ?>
				<h3>Reason: </h3><br>
				<ul>
					<li><?= $reason ?></li>
				</ul>
			<?php endif; ?>
			<br><br>

			<h4>Gardiola Dental Clinic</h4>
			
		</div>
	</div>
</body>
</html>
