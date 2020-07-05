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
				<p class="lead">EMAIL VERIFICATION</p><br><hr>
				 Please Click the link below to verify your account.<br><br>
				<a class="btn btn-primary btn-lg" href="<?= $code ?>">
					Verifiy Email
				</a>
    		</center>
    		 
		</div>
	</div>
</body>
</html>