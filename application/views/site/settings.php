<?=$header?>

<div id="settings">
	<div class="page-title page-title-about bg-pattern" data-bgcolor="5295BD">
	    <div class="page-title-overlay">
	        <div class="container">

	           <h1 class="bold600 color-child-6"><i class="fa fa-gear"></i> SETTINGS</h1>
	        </div>
	    </div>
	</div>


	<div class="row">
		<div class="col-md-2"></div>
		<div class="col-md-8"><br>
			<!-- <div v-if="message" class="alert alert-success">
				<h2>{{ message }}</h2>
			</div> -->
			<div class="container"> <br><br><br>
				<ul class="nav nav-tabs">
					<li class="active">
						<a data-toggle="tab" href="#tab_per">Personal Information</a>
					</li>
					<li><a data-toggle="tab" href="#tab_sec">Security</a></li>
				</ul>
				<div class="tab-content">
				    <div id="tab_per" class="tab-pane fade in active">
			    		<form @submit.prevent="updateProfile"><br>
				    		<div class="row">
				    			<div class="col-md-4">
				    				<div class="form-group">
										<label for="usr">Last Name:</label>
										<input v-model="profile.lname" style="width: 311px;"
											type="text" class="form-control" name="lname" required="">
							      	</div>
				    			</div>
				    			<div class="col-md-4">
				    				<div class="form-group">
										<label for="usr">First Name:</label>
										<input v-model="profile.fname" style="width: 311px;"
											type="text" class="form-control" name="fname" required="">
							      	</div>
				    			</div>
				    			<div class="col-md-4">
				    				<div class="form-group">
				      				  	<label for="usr">Middle Initial:</label>
				      				  	<input type="text" v-model="profile.mi"
					      				  	style="width: 100px;" type="text" class="form-control"
					      				  	maxlength="1" name="mi">
							      	</div>
				    			</div>
				    		</div>
				    		<div class="row">
				    			<div class="col-md-12">
				    				<div class="form-group">
					      				<label for="usr">Address:</label>
					      				<input v-model="profile.address" style="width: 880px;"
					      					type="text" class="form-control" name="address" required="">
							    	</div>
				    			</div>
				    		</div>
				    		<div class="row">
				    			<div class="col-md-5">
				    				<div class="form-group">
					      				<label for="usr">E-mail Address:</label>
					      				<input v-model="profile.email" style="width: 400px;"
					      					type="text" class="form-control" name="email" required="">
							    	</div>
				    			</div>
				    			<div class="col-md-4">
				    				<div class="form-group">
					      				<label for="usr">Contact Number:</label>
					      				<input type="Number" v-model="profile.cp_num"
					      					style="width: 393px;" type="text" class="form-control"
					      					name="cp_num" required="">
							    	</div>
				    			</div>
				    		</div>
				    		<div style="margin-left: 770px">
				    			<button type="submit" class="btn btn-primary">Save</button>
				    		</div>
				    	</form>
				     </div>


				    <div id="tab_sec" class="tab-pane fade"><br><br>
				     	<form @submit.prevent="updateCredentials">
				    		<div class="row">
				    			<div class="col-md-4">
				    				<div class="form-group">
				      				  	<label for="usr"> New User Name :</label>
				      				  	<input  v-model="profile.username" style="width: 311px;"
				      				  		type="text" class="form-control" name="username" required="">
							      	</div>
				    			</div>
				    			<div class="col-md-4">
				    				<div class="form-group">
				      				  	<label for="usr">New Password :</label>
				      				  	<input style="width: 311px;" v-model="newPassword"
				      				  		type="password" class="form-control"
				      				  		required="">
							      	</div>
				    			</div>
				    			<div class="col-md-4">
				    				<div class="form-group">
				      				  	<label for="usr">Confirm Password :</label>
				      				  	<input  style="width: 311px;" v-model="confirmPassword"
				      				  		type="password" class="form-control" name="password"
				      				  		required="">
							      	</div>
				    			</div>
				    		</div>
			    			<button type="submit" class="btn btn-primary" :disabled="! isPasswordMatch()">Save</button>
				    	</form>
				    </div>
				</div> <br>
			</div>
		</div>
		<div class="col-md-2"></div>
	</div>


	<br><br><br><br><br><br><br>

</div>

<?=$footer?>
