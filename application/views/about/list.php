<?= $header ?>
<!-- page content -->
<div class="right_col" role="main" id="aboutPage">
	<input id="alert" type="hidden" value="<?= $this->session->flashdata('success') ?>">
	<h3><i class="fa fa-pencil"></i> {{ title }} </h3>
	<div class="clearfix"></div>
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">
			<!-- ===========================MAIN DATA=========================== -->
			<div class="x_panel" id="mainData">
				<div class="x_title">
					<button class="btn btn-primary" @click="showAddForm">
						<i class="fa fa-plus-square"></i> Add Clinic Information
					</button>
					<div class="clearfix"></div>
				</div>
				<div class="x_content"><br>
					<div class="" role="tabpanel" data-example-id="togglable-tabs">
  						<ul id="myTab" class="nav nav-tabs bar_tabs" role="tablist">
    						<li role="presentation" class="active">
    							<a href="#tab_content1" id="home-tab" role="tab" data-toggle="tab"
    								aria-expanded="true">Basic Information</a>
    						</li>
   							<li role="presentation" class="">
   								<a href="#tab_content2" role="tab" id="profile-tab" data-toggle="tab"
   									aria-expanded="false">Other Information</a>
    						</li>
						</ul>
  						<div id="myTabContent" class="tab-content">
    						<div role="tabpanel" class="tab-pane fade active in" id="tab_content1"
    							aria-labelledby="home-tab"><br>
    							<update-information
    								:clinic="basicInformation"
    								v-if="updateBasic"
    								@cancel="cancel">
								</update-information>
    							<basic-information
    								:clinic="basicInformation"
    								v-if="!updateBasic"
    								@update="updateBasic=true">
    							</basic-information>
							</div>
    						<div role="tabpanel" class="tab-pane fade" id="tab_content2"
    							aria-labelledby="profile-tab"><br>
    							<div class="x_panel" v-for="about in abouts">
									<h3 class="pull-left x_title tip" title="Click to view">
										<a href="#" @click="showViewForm(about)"
											class="package_title">{{ about.name }}</a>
									</h3>
									<div class="pull-right">
										<em>Click the title to view</em>
									</div>
									<div class="col-md-12" v-html="about.description"></div>
								</div>
							</div>
  						</div>
					</div>
				</div>
			</div>
			<!-- ===========================END MAIN DATA=========================== -->

 			<div class="x_panel" id="addForm" >
				<div class="x_title">
					<button class="btn btn-default" @click="hideAddForm">
						<i class="fa fa-angle-left"></i> Back
					</button>
					<div class="clearfix"></div>
				</div>
				<div class="x_content">
					<?= form_open('admin/about/save', 'class="form-inline"') ?>
						<div class="col-md-10"><br>
							<h4><label> Title: </label>
								<input style="width: 500px;" placeholder="Title" type="text"
									class="form-control input-lg" name="name" required >
							</h4>
							<textarea name="description" class="ckeditor" required>
							</textarea><br><hr>
							<button class="btn btn-primary btn-lg">
								<i class="fa fa-check-circle"></i>
								Save
							</button>
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
