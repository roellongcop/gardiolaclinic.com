<?= $header ?>
<!-- page content -->
<div class="right_col" role="main" id="servicePage"> 
	<h3><i class="fa fa-pencil"></i> {{ title }} </h3>   
	<div class="clearfix"></div>
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">

			<!-- -------------------------MAIN DATA------------------------------- --> 
 
			<!-- -------------------------END MAIN DATA------------------------------- -->
 			
 			<div class="x_panel" id="mainData"> 
				<div class="x_title">
					<a href="<?= base_url('admin/service') ?>" class="btn btn-default"> 
						<i class="fa fa-angle-left"></i> Back
					</a> 
					<div class="clearfix"></div>
				</div>
				<div class="x_content">  
					<?= form_open('admin/service/update') ?>
						<input type="hidden" value="<?= $service['id'] ?>" name="id">
						<div class="col-md-10"><br>
							<div class="col-md-7">
								<input placeholder="Service Name" type="text" value="<?= $service['name'] ?>" 
									class="form-control input-lg" name="name" required>
							</div>
							<div class="col-md-5">
								<input placeholder="Price Php" type="number" value="<?= $service['price'] ?>" 
									class="form-control input-lg" name="price" required>
							</div>
							<div class="col-md-12"><br>
								<textarea name="description" class="ckeditor" required>
									<?= $service['description'] ?>
								</textarea>
							</div><br><hr>
							<div class="col-md-12"><br>
								<button class="btn btn-success btn-lg">
									<i class="fa fa-check-circle"></i> Save Changes
								</button>
								<a href="<?= base_url('admin/service/delete/' . $service['id']) ?>" 
									class="btn btn-danger btn-lg">
									<i class="fa fa-trash"></i> Delete
								</a>
							</div>
						</div>
						<div class="col-md-2"><br>
							<images :images="images"></images>
						</div> 
					<?= form_close() ?>
				</div>
			</div>
 
			
		</div> 
	</div> 
</div> 
<?= $footer ?> 
