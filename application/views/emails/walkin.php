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
				<p class="lead">REGISTRATION</p><br><hr>
				<h4><b>CREDENTIALS</b></h4>
				<p><label>Username: <?= $username ?></label></p>
				<p><label>Password: <?= $password ?></label></p>
  		</center>
		</div>
	</div>
</body>
</html>
