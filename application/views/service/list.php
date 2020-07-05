<?= $header ?>

<!-- page content -->
<div class="right_col" role="main" id="servicePage"> 
	<input id="alert" type="hidden" value="<?= $this->session->flashdata('success') ?>">
	<h3><i class="fa fa-pencil"></i> {{ title }} </h3>   
	<div class="clearfix"></div>
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">
			<!-- -------------------------MAIN DATA------------------------------- --> 

			

			<div class="x_panel" id="mainData"> 
				<div class="x_title">
						<button class="btn btn-primary" @click="showAddForm"> 
							<i class="fa fa-plus-square"></i> Add New Service
						</button><br><br><br>
						<em>Click the title to view</em>
						<div class="clearfix"></div>
				</div>
				<div class="x_content"><br>
					<div class="x_panel" v-for="service in services">
						<h3 class="x_title tip">
							<a  title="Click to view" href="#" @click="showViewForm(service)">
								<label class="package_title">{{ service.name }}</label>
							</a>
						</h3> 
						<div class="col-md-12"><h3>Price:  {{ convertPrice(service) }}</h3> </div>
						<div class="col-md-12" v-html="service.description"></div>
					</div> 
				</div>
			</div>
			<!-- -------------------------END MAIN DATA------------------------------- -->
 			
 			<div class="x_panel" id="addForm" > 
				<div class="x_title">
					<button class="btn btn-default" @click="hideAddForm"> 
						<i class="fa fa-angle-left"></i> Back
					</button> 
					<div class="clearfix"></div>
				</div>
				<div class="x_content">  
					<?= form_open('admin/service/save') ?>
						<div class="col-md-10"><br>
							<div class="col-md-7">
								<input placeholder="Service Name" type="text" 
									class="form-control input-lg" name="name" required>
							</div>
							<div class="col-md-5">
								<input placeholder="Price Php" type="number" 
									class="form-control input-lg" name="price" required>
							</div>
							<div class="col-md-12"><br>
								<textarea name="description" class="ckeditor" required>
								</textarea>
							</div><br><hr>
							<div class="col-md-12"><br>
								<button class="btn btn-primary btn-lg">
									<i class="fa fa-check-circle"></i>
									Save
								</button>
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
