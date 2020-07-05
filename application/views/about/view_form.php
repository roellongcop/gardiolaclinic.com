<?= $header ?>
<!-- page content -->
<div class="right_col" role="main" id="aboutPage">
	<h3><i class="fa fa-pencil"></i> {{ title }} </h3>
	<div class="clearfix"></div>
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">

			<!-- =========================MAIN DATA========================= -->

			<!-- =========================END MAIN DATA========================= -->

 			<div class="x_panel" id="mainData">
				<div class="x_title">
					<div class="btn-group">
						<a href="<?= base_url('admin/about') ?>" class="btn btn-default" >
							<i class="fa fa-angle-left"></i> Back
						</a>
						<div class="clearfix"></div>
					</div>
					<div class="x_content container-fluid">
						<?= form_open('admin/about/update', 'class="form-inline"') ?>
							<input type="hidden" value="<?= $about['id'] ?>" name="id">
							<div class="col-md-10"><br>
								<h4><label> Title: </label>
									<input style="width: 500px;" placeholder="Title" type="text" value="<?= $about['name'] ?>"
										class="form-control input-lg" name="name" required >
								</h4>

								<textarea  name="description" class="ckeditor" required>
									<?= $about['description'] ?>
								</textarea><br><hr>
								<button class="btn btn-success btn-lg">
									<i class="fa fa-check-circle"></i> Save Changes
								</button>
								<a href="<?= base_url('admin/about/delete/' . $about['id']) ?>"
									class="btn btn-danger btn-lg">
									<i class="fa fa-trash"></i> Delete
								</a>
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
</div>
<?= $footer ?>
