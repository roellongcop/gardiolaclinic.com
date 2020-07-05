<?= $header ?>
<!-- page content -->
<div class="right_col" role="main" id="profilePage"> 
	<h3><i class="fa fa-user-md"></i> My Profile </h3>   
	<div id="alert"></div>
	<div class="clearfix"></div>
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12"><br>
			<!-- -------------------------BOUNDARY------------------------------- -->
			<div class="col-md-3">
				<div class="col-md-12 widget widget_tally_box">
					<div class="x_panel fixed_height_390" >
						<div class="x_content">
							<div class="flex">
								<ul class="list-inline widget_profile_box">
									<li><a><i class="fa fa-facebook"></i></a></li>
									<li >
										<img :src="imagePath" alt="..." 
											class="img-circle profile_img">
									</li>
									<li></li>
								</ul>
							</div>
							<h3 class="name">{{ fullName(profile) }}</h3>

							<div class="flex text-center">
								<ul class="list-inline count2">
									<label>Username: {{profile.username}}</label>
								</ul>
							</div>
							<p>	Administrator Account can access all system 
							functions and settings.</p> <hr> 
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-9">
				<div class="x_panel">
					<div class="x_title">
						<h2>Update Profile</h2>
						<ul class="nav navbar-right panel_toolbox">
							<li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li> 
							<li><a class="close-link"><i class="fa fa-close"></i></a></li>
						</ul>
						<div class="clearfix"></div>
					</div>
					<div class="x_content">
						<div class="" role="tabpanel" data-example-id="togglable-tabs">
							<ul id="myTab" class="nav nav-tabs bar_tabs" role="tablist">
								<li role="presentation" class="active">
									<a href="#tab_content1" id="home-tab" role="tab" 
										data-toggle="tab" aria-expanded="true">Basic Information</a>
								</li>
								<li role="presentation" class="">
									<a href="#tab_content2" role="tab" id="profile-tab" 
										data-toggle="tab" aria-expanded="false">Credentials</a>
								</li> 
							</ul>
							<div id="myTabContent" class="tab-content">
								<div role="tabpanel" class="tab-pane fade active in" id="tab_content1" aria-labelledby="home-tab">
									<basic-information :profile="profile" @save="getProfile"></basic-information>
								</div>
								<div role="tabpanel" class="tab-pane fade" id="tab_content2" aria-labelledby="profile-tab">
									<table class="table">
										<tbody>
											<tr>
												<th>New Username</th>
												<td>
													<input style="text-transform: lowercase;" 
													type="text" class="form-control" v-model="update.username">
												</td>
											</tr>
											<tr>
												<th>Old Password {{ password_error }}</th>
												<td>
													<input  style="text-transform: lowercase;" 
														@input="oldPassword" type="password" 
														class="form-control" v-model="old_password" 
														@input="checkPassword()">
												</td>
											</tr>
											<tr>
												<th>New Password {{ error }}</th>
												<td>
													<input style="text-transform: lowercase;" 
														type="password" class="form-control" 
														v-model="update.password" 
														@input="checkPassword()">
												</td>
											</tr>
											<tr>
												<th>Re-enter Password {{ error }}</th>
												<td>
													<input style="text-transform: lowercase;" 
														type="password" class="form-control" 
														v-model="update.repassword" 
														@input="checkPassword()">
												</td>
											</tr>
											<tr>
												<th>User type</th>
												<td>
													<select v-model="update.user" class="form-control">
														<option :value="'doctor'">Doctor</option>
														<option :value="'dentalaide'">Dentalaide</option>
													</select>
												</td>
											</tr>
											<tr>
												<td colspan="2">
													<button class="btn btn-default btn-lg" 
														@click= "reset()">Reset</button>
													<button class="btn btn-success btn-lg" 
														@click="updateProfile()" 
														:disabled="disable">Save Changes
													</button>
												</td>
											</tr>
										</tbody>
									</table>  
								</div> 
							</div>
						</div>

					</div>
				</div>
			</div>
			<!-- -------------------------BOUNDARY------------------------------- -->
		</div> 
	</div> 
</div> 
<?= $footer ?> 

