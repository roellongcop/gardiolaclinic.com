<?= $header ?>
<!-- page content -->
<div class="right_col" role="main" id="imagePage"> 
	<h3><i class="fa fa-pencil"></i> {{ title }} </h3>   
	<div class="clearfix"></div>
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">

			<!-- -------------------------MAIN DATA------------------------------- --> 
			
			<message v-if="message" :message="message"></message>
			
			<div class="x_panel" id="mainData"> 
				<div class="x_title">
					<div class="btn-group pull-left">
						<button class="btn btn-primary" @click="showUploadForm"> 
							<i class="fa fa-upload"></i> Upload Images
						</button> 
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="x_content">   
					<h2>UPLOADED IMAGES</h2><hr>
					<images :images="images" @remove="removeImage"></images>
					 
				</div>
			</div>

			<div class="x_panel" id="uploadForm" style="height: 500px;"> 
				<div class="x_title">
					<div class="btn-group pull-left">
						<button class="btn btn-default" @click="hideUploadForm"> 
							<i class="fa fa-angle-left"></i> Back
						</button> 
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="x_content">   
					<h2>Drag and Drop images here...</h2>
					<div class="image_upload_div">
						<?= form_open('admin/image/upload', 'class="dropzone"') ?>
					</div>
				</div>
			</div>
			<!-- -------------------------END MAIN DATA------------------------------- --> 

			
		</div> 
	</div> 
</div> 
<?= $footer ?> 
