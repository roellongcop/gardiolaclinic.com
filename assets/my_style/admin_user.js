Vue.component('add-form', {
	template: `
		<div class="x_panel">
			<div class="x_title">
				<h4 class="pull-right">Total Entity: ({{ users.length }})</h4>
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a>
				<button @click="appendInput" class="btn btn-success pull-left">
					<i class="fa fa-plus-square"></i> Entity
				</button>
				<div class="clearfix"></div>
			</div>
			<div class="x_content">
				<form @submit.prevent="insertUser">
					<div v-if="users.length" v-for="(user, index) in users" class="col-md-12">
						<div class="x_panel">
							<label> Entity No: {{ users.length - index }} </label>
							<a @click="spliceUser(index)" class="btn btn-danger pull-right btn-sm">
								<i class="fa fa-minus-square"></i>
							</a>
							<div class="col-md-12"></div>
							<div class="form-group col-md-4">
								<label>Firstname:</label>
								<input type="text" class="form-control" v-model="user.fname" required>
							</div>
							<div class="form-group col-md-4">
								<label>Middle Initial:</label>
								<input type="text" class="form-control" v-model="user.mi" maxlength="1" required>
							</div>
							<div class="form-group col-md-4">
								<label>Lastname:</label>
								<input type="text" class="form-control" v-model="user.lname" required>
							</div>
							<div class="col-md-12"><br></div>
							<div class="form-group col-md-8">
								<label>Address:</label>
								<input type="text" class="form-control" v-model="user.address" required>
							</div>
							<div class="form-group col-md-4">
								<label>Email:</label>
								<input style="text-transform: lowercase;" type="email"
									class="form-control" v-model="user.email" required>
							</div>
							<div class="col-md-12"><br></div>
							<div class="form-group col-md-4">
								<label>Mobile:</label>
								<input type="text" class="form-control" v-model="user.mobile" required>
							</div>
							<div class="form-group col-md-4">
								<label>Gender:</label>
								<select class="form-control" v-model="user.sex" required>
									<option :value="'Male'">Male</option>
									<option :value="'Female'">Female</option>
								</select>
							</div>
							<div class="form-group col-md-4">
								<label>Usertype:</label>
								<select class="form-control" v-model="user.type" required>
									<option :value="'doctor'">Doctor</option>
									<option :value="'dentalaide'">Dentalaide</option>
								</select>
							</div>
							<div class="col-md-12"><br></div>
							<div class="form-group col-md-4">
								<label>Username:</label>
								<input style="text-transform: lowercase;" type="text"
									class="form-control" v-model="user.username" required>
							</div>
							<div class="form-group col-md-4">
								<label>Password:</label>
								<input style="text-transform: lowercase;" type="password"
									@change="checkPasswords(index)"
									class="form-control" v-model="user.password" required>
							</div>
							<div class="form-group col-md-4">
								<label>Re-enter Password:</label>
								<input style="text-transform: lowercase;" type="password"
									@change="checkPasswords(index)"
									class="form-control" v-model="user.password2" required>
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<button type="submit" v-if="users.length" class="btn btn-primary btn-lg">
							<span class="fa fa-check-circle"></span> Save
						</button>
					</div>
				</form>
			</div>
		</div>
	`,
	data() {
		return {
			users: [
				{fname: '', mi: '', lname: '', address: '', email: '', mobile: '', sex: 'Male',
				type: 'doctor', username: '', password: '', password2: ''}
			]
		}
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
		checkPasswords(index) {
			if (this.users[index].password == this.users[index].password2) {
				this.notify('success', 'Password Matched')
			}
			else {
				this.notify('danger', 'Password not Matched')
				this.users[index].password2 = ''
			}
		},
		cancel() {
			this.$emit('cancel')
		},
		spliceUser(index) {
			this.users.splice(index, 1)
		},
		appendInput() {
			var newInput = {fname: '', mi: '', lname: '', address: '', email: '', mobile: '', sex: 'Male',
				type: 'doctor', username: '', password: '', password2: ''}
			this.users.unshift(newInput);
		},
		insertUser() {
			var self = this
			$.ajax({
				url : base_url + 'admin/user/insert',
				data : {users : this.users},
				method : 'post',
				success: function(response){
					self.$emit('save', 'success', 'Successfully Added')
				}
			});
		},
	}
})

Vue.component('update-form', {
	template: `
		<div class="x_panel">
			<div class="x_title">
				<h4 class="pull-right">Total Entity: ({{ users.length }})</h4>
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a>
				<div class="clearfix"></div>
			</div>
			<div class="x_content">
				 <form @submit.prevent="updateUser">
					<div v-if="users.length" v-for="(user, index) in users" class="col-md-12">
						<div class="x_panel">
							<label> User ID: {{ user.id }} </label>

							<div class="col-md-12"><br></div>
							<div class="form-group col-md-4">
								<label>Firstname:</label>
								<input type="text" class="form-control" v-model="user.fname" required>
							</div>
							<div class="form-group col-md-4">
								<label>Middle Initial:</label>
								<input type="text" class="form-control" v-model="user.mi" maxlength="1" required>
							</div>
							<div class="form-group col-md-4">
								<label>Lastname:</label>
								<input type="text" class="form-control" v-model="user.lname" required>
							</div>
							<div class="col-md-12"><br></div>
							<div class="form-group col-md-8">
								<label>Address:</label>
								<input type="text" class="form-control" v-model="user.address" required>
							</div>
							<div class="form-group col-md-4">
								<label>Email:</label>
								<input style="text-transform: lowercase;" type="email"
									class="form-control" v-model="user.email" required>
							</div>
							<div class="col-md-12"><br></div>
							<div class="form-group col-md-4">
								<label>Mobile:</label>
								<input type="text" class="form-control" v-model="user.cp_num" required>
							</div>
							<div class="form-group col-md-4">
								<label>Gender:</label>
								<select class="form-control" v-model="user.gender" required>
									<option :value="'Male'">Male</option>
									<option :value="'Female'">Female</option>
								</select>
							</div>
							<div class="form-group col-md-4">
								<label>Usertype:</label>
								<select class="form-control" v-model="user.type" required>
									<option :value="'doctor'">Doctor</option>
									<option :value="'dentalaide'">Dentalaide</option>
								</select>
							</div>
							<div class="col-md-12"><br></div>
							<div class="form-group col-md-4">
								<label>Username:</label>
								<input style="text-transform: lowercase;" type="text"
									class="form-control" v-model="user.username" required>
							</div>
							<div class="form-group col-md-4">
								<label>Password:</label>
								<input style="text-transform: lowercase;" type="password"
									class="form-control" v-model="user.pass" required>
							</div>
							<div class="form-group col-md-4">
								<label>Re-enter Password:</label>
								<input style="text-transform: lowercase;" type="password"
									class="form-control" v-model="user.pass" required>
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<button type="submit" v-if="users.length" class="btn btn-primary btn-lg">
							<span class="fa fa-check-circle"></span> Save
						</button>
					</div>
				</form>
				<label v-if="!users.length">No Data selected...</label>
			</div>
		</div>
	`,
	props: {
		users: Array
	},
	methods: {
		cancel() {
			this.$emit('cancel')
		},
		updateUser() {
			var self = this
			$.ajax({
				url : base_url + 'admin/user/update',
				data : {users : this.users},
				method : 'post',
				success: function(response){
					self.$emit('save', 'success', 'Successfully Updated')
				}
			});
		},
	}
})

Vue.component('delete-form', {
	template: `
		<div class="x_panel">
			<div class="x_title">
				<h4 class="pull-right">Total Entity: ({{ users.length }})</h4>
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a>
				<div class="clearfix"></div>
			</div>
			<div class="x_content">
		 		<div v-if="users.length">
					<h5>Are you sure you want to Delete : </h5>
					<h2>
						<ul style="text-transform: capitalize">
							<li v-for="user in users">
								{{ fullName(user) }}
							</li>
						</ul>
					</h2>
				</div>
				<label v-if="!users.length">No Data selected...</label>

				<div class="col-md-12">
					<a v-if="users.length" class="btn btn-danger btn-lg" @click="deleteUser">
						<span class="fa fa-trash"></span> Delete
					</a>
			 	</div>
		 	</div>
		</div>
	`,

	props: {
		users: Array
	},
	methods: {
		fullName(user) {
			return user.fname + ' ' + user.mi + '. ' + user.lname
		},
		cancel() {
			this.$emit('cancel')
		},
		deleteUser() {
			var self = this
			$.ajax({
				url : base_url + 'admin/user/delete',
				data : { users : this.users },
				method : 'post',
				success: function(response){
					self.$emit('save', 'success', 'Successfully Deleted')
				}
			});
		},
	}
})

Vue.component('print-form', {
	template: `
		<div class="x_panel">
			<div class="x_title">
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a>
				<div class="clearfix"></div>
			</div>
			<div class="x_panel">
        		<div class="row">
					<div class="pull-right">
						<a href="#itemPage" class="btn btn-default" @click="cancel">
							<span class="fa fa-minus-square"></span> Cancel
						</a>
						<a class="btn btn-primary" @click="printItems">
							<span class="fa fa-print"></span> Print
						</a>
					</div>
				</div>
				<div id="tableData">
            		<div class="row">
                		<center>
            				<h3>
                				<img style="float:center;" width="50" height="50" :src="src">
								{{ clinicName }}
							</h3>
							<date></date>
							
            				<h4>LIST OF ADMIN USERS</h4>
                		</center>
            		</div>
					<h2> Total Records : {{ users.length }}  </h2>
					<table class="table table-bordered">
						<thead>
							<tr>
								<th>FULLNAME</th>
								<th>ADDRESS</th>
								<th>EMAIL</th>
								<th>MOBILE NO</th>
								<th>SEX</th>
								<th>USERNAME</th>
								<th>PASSWORD</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="user in users">
								<td> {{ fullName(user) }} </td>
								<td> {{ user.address }} </td>
								<td style="text-transform: lowercase"> {{ user.email }} </td>
								<td> {{ user.cp_num }} </td>
								<td> {{ user.gender }} </td>
								<td style="text-transform: lowercase"> {{ user.username }} </td>
								<td style="text-transform: lowercase"> {{ user.pass }} </td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<label v-if="!users.length">No Data selected...</label>
		</div>
	`,
	props: {
		users: Array
	},
	data() {
		return {
			src: base_url + 'assets/assets/images/logo.svg'
		}
	},
	computed: {
		clinicName() {
			return clinic_name
		}
	},
	methods: {
		fullName(user) {
			return user.fname + ' ' + user.mi + '. ' + user.lname
		},
		cancel() {
			this.$emit('cancel')
		},
		printItems() {
			$("#tableData").printThis();
		},
	}
})



var app = new Vue({
	el: '#unitPage',
	data:{
		addForm: false,
		updateForm: false,
		deleteForm: false,
		checkAll : false,
		printForm: false,
		users : [],
		selected : [],
		title: 'Users Management',
		users: [],
		columns: [
    	{ label: 'FIRSTNAME', field: 'fname',  sortable: false },
    	{ label: 'MI', field: 'mi',  sortable: false },
    	{ label: 'LASTNAME', field: 'lname',  sortable: false },
    	{ label: 'ADDRESS', field: 'address',  sortable: false },
    	{ label: 'EMAIL', field: 'email',  sortable: false },
    	{ label: 'MOBILE NO', field: 'cp_num',  sortable: false },
    	{ label: 'SEX', field: 'gender',  sortable: false },
    	{ label: 'USERTYPE', field: 'type',  sortable: false },
    	{ label: 'USERNAME', field: 'username',  sortable: false }
    	// { label: 'PASSWORD', field: 'pass',  sortable: false }
    ],
	},
 	mounted() {
 		this.getUsers()
 	},
	methods: {
		getUsers() {
	 		$.ajax({
	 			url: base_url + 'admin/user/getUsers',
	 			dataType: 'json',
	 			success: function(users) {
	 				app.users = users
	 			}
	 		})
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
		getSelected(data) {
 			app.selected = data.selectedRows
	 	},
	 	save(type, message) {
			app.selected = []
	 		app.notify(type, message)
			app.getUsers()
			app.title = 'User Management'
			$('#mainData').show()
			app.addForm = false
			app.updateForm = false
			app.deleteForm = false
			app.printForm = false
		},
		cancel() {
			app.title = 'User Management'
			$('#mainData').show()
			app.addForm = false
			app.updateForm = false
			app.deleteForm = false
			app.printForm = false
		},
		showAddForm() {
			app.title = 'Add Users'
			$('#mainData').hide()
			app.addForm = true
		},
		showPrintForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Users Selected')
	 		}
	 		else {
				app.title = 'Print Users'
				$('#mainData').hide()
				app.printForm = true
			}
		},
		showUpdateForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Users Selected')
	 		}
	 		else {
				app.title = 'Update Users'
				$('#mainData').hide()
				app.updateForm = true
			}
		},
		showDeleteForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Users Selected')
	 		}
	 		else {
				app.title = 'Delete Users'
				$('#mainData').hide()
				app.deleteForm = true
			}
		},
		checkAllBox() {
			app.selected = []
			if (! app.checkAll) {
				app.selected = app.users
			}
		},
	}
});
