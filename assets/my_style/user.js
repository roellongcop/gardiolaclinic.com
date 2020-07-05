Vue.component('basic-information', {
	template: `
		<div> 
				<div class="col-md-12"><br></div>
				<div class="form-group col-md-4">
					<label>Firstname:</label>
					<input type="text" class="form-control" v-model="profile.fname" required>
				</div> 
				<div class="form-group col-md-4">
					<label>Middle Initial:</label>
					<input type="text" class="form-control" v-model="profile.mi" 
						maxlength="1" required>
				</div> 
				<div class="form-group col-md-4">
					<label>Lastname:</label>
					<input type="text" class="form-control" v-model="profile.lname" required>
				</div> 
				<div class="col-md-12"><br></div>
				<div class="form-group col-md-8">
					<label>Address:</label>
					<input type="text" class="form-control" v-model="profile.address" required>
				</div> 
				<div class="form-group col-md-4">
					<label>Email:</label>
					<input style="text-transform: lowercase;" type="text" class="form-control" 
						v-model="profile.email" required>
				</div> 
				<div class="col-md-12"><br></div>
				<div class="form-group col-md-4">
					<label>Mobile Number:</label>
					<input type="text" class="form-control" v-model="profile.cp_num" required>
				</div> 
				<div class="form-group col-md-4">
					<label>Gender:</label>
					<select class="form-control" v-model="profile.gender">
						<option>Male</option>
						<option>Female</option>
					</select>
				</div> 
				<div class="form-group col-md-4"><br>
					<center>
						<button @click="updateBasicInformation" class="btn btn-primary btn-lg">
							<i class="fa fa-check-circle"></i>
							Save Changes
						</button>
					</center>
				</div> 
				<div class="col-md-12"><br></div> 
		</div>
	`,

	props: {
		profile: Object
	},
	methods: {
		notify(type, message) {
			new PNotify({
				title: type.toUpperCase(),
				type: type,
				text: message,
				nonblock: {nonblock: true},
				styling: 'bootstrap3', 
			});
		},
		updateBasicInformation() {
			var self = this
			$.ajax({
				url: base_url + 'admin/user/updateBasicInformation',
				data: this.profile,
				method: 'post',
				success: function(response) {
					self.notify('success', 'Successfully Updated')
					self.$emit('save')
				}
			})
		},
	}
})

 
 
 var app = new Vue({
	el: '#profilePage',
	data:{
		disable       : true,
		old_password  : '',
		password_error: '',
		error         : '',
		profile       : {},
		update        : {id: '', username: '', password: '', user: '', repassword: ''},
		imagePath    : base_url + 'img/admin.png'
	},
	mounted() {
		this.getProfile() 
	},
	methods:{  
		reset() {
			app.update = {}
			app.error = ''
			app.password_error = ''
			app.old_password = ''
		},
		checkDisable() {
			if (app.password_error == "(Ok)" && app.error == "(Ok)") {
				app.disable = false
			}
			else {
				app.disable = true
			}
		},
		oldPassword() {
			$.ajax({
				url : base_url + 'admin/user/old_password',
				data: {old_password: app.old_password},
				method: 'post',
				success: function(response){ 
					if (response == true) {
						app.password_error = "(Ok)" 
					}
					else {
						app.password_error = "(Not Found)" 
					} 
				}
			}) 
			app.checkDisable()
		},
		checkPassword() {
			if (app.update.password != app.update.repassword) {
				app.error = "(Password not match)"
			}
			else {
				app.error = "(Ok)"
			}
			app.checkDisable()
		},
		notify(type, message) {
			new PNotify({
				title: type.toUpperCase(),
				type: type,
				text: message,
				nonblock: {nonblock: true},
				styling: 'bootstrap3', 
			});
		},
		updateProfile() {
			$.ajax({
				url : base_url + 'admin/user/update_profile',
				data: app.update,
				method: 'post',
				success: function(response){ 
					app.notify('success', 'Successfully Updated')
					app.getProfile()
					app.update = {}
					app.old_password = ''
					app.error = ""
					app.password_error = ""
				}
			}) 
		},
		
		getProfile() {
			$.ajax({
				url : base_url + 'admin/user/profile_data',
				dataType: 'json',
				success: function(response){ 
					app.profile = response
					app.update.id = app.profile.id
				}
			}) 
		}, 
		fullName(user) {
			return user.fname + ' ' + user.mi + '. ' + user.lname
		}
	}

});