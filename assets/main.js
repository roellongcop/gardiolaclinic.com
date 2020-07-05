Vue.component('recommendation', {
	template: `
		<div class="modal fade" id="recommendation" role="dialog" data-toggle="modal" 
		    data-dismiss="modal" style="margin-top: 100px">
		    <div class="row">
		        <div class="col-md-6 col-md-offset-3">
		            <div class="panel panel-login">
		                <div class="panel-heading">
		                    <div class="row">
		                        <div class="col-xs-6">
		                            <a href="#"><h3>Recommendation</h3></a>
		                        </div>
		                        <div class="col-xs-12">
		                        	<label v-if="! recommendations.length"> No Recommendations...</label>
	                                <table v-if="recommendations.length" id="example" class="table table-bordered table-striped">
	                                    <thead>
	                                        <tr class="info">
	                                            <th>Type Of Service</th>
	                                            <th>Recommendation</th>  
	                                            <th>View</th> 
	                                        </tr>
	                                    </thead>
	                                    <tbody> 
                                           <tr v-for="recommendation in recommendations">
                                                <td>{{ recommendation.typeser }} </td>
                                                <td>{{ recommendation.recommendation }} </td>
                                                <td>
                                                    <a @click="viewReservation(recommendation)" href="#" class="btn btn-primary">
                                                        View
                                                    </a>
                                                </td>
                                           </tr>
	                                    </tbody>
	                                </table> 
		                        </div>
		                    </div><hr>
		                </div>
		                <div class="panel-body">    
		                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
	`,
	props: {
		recommendations: Array
	},
	methods: {
		viewReservation(recommendation) {
			window.location.href =  base_url + 'viewReservation/' + recommendation.id
		}
	}
})

Vue.component('registration', {
	template: `
		<div>
			<div id="register-form" style="display: none;"> 
                <div class="container">
                    <ul class="nav nav-tabs">
                        <li class="active">
                            <a data-toggle="tab" href="#tab_per">Personal Information</a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#tab_sec">Credentials</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="tab_per" class="tab-pane fade in active"><br>
                            <div class="form-group">
                                <input type="text" name="fname" v-model="user.fname" id="first" 
                                    tabindex="4" placeholder="First Name" required 
                                    class="col-lg-4 col-md-4 col-sm-4 col-xs-4" 
                                    style="width: 205px;text-transform: capitalize;">

                                <input type="text"  name="mi" v-model="user.mi" id="mid" tabindex="4"  
                                    placeholder="Middle Initial"  
                                    class="col-lg-4 col-md-4 col-sm-4 col-xs-4" 
                                    maxlength="1" style="width: 205px;
                                    text-transform: capitalize">

                                <input type="text"  name="lname" v-model="user.lname" id="lastname" 
                                    tabindex="4"  placeholder="Last Name" required 
                                    class="col-lg-4 col-md-4 col-sm-4 col-xs-4" 
                                    style="width: 205px;text-transform: capitalize">
                                <br><br> <br>
                            </div>
                             <div class="form-group">
                                <input type="email" name="email" v-model="user.email" id="email" 
                                    tabindex="2"  placeholder="Email Address" 
                                    required class="col-lg-5 col-md-4 col-sm-4 col-xs-4" 
                                    style="width: 205px">

                                <input type="Number" name="cp_num" v-model="user.cp" id="number" 
                                    tabindex="2"  placeholder="Cellphone Number" 
                                    required class="col-lg-5 col-md-4 col-sm-4 col-xs-4" 
                                    style="width: 205px">

                                 <div tabindex="2" class="col-lg-2 col-md-4 col-sm-4 col-xs-4" 
                                    style="width: 205px">
                                    <select name="gender" class="selectBox-dropdown" v-model="user.sex">
                                    <option :value="'Male'">Male</option>
                                    <option :value="'Female'">Female</option>
                                  </select>
                                </div>
                                <br><br> <br>
                            </div>
                          

                            <div class="form-group">
                                <input name="address" type="text" v-model="user.address"
                                    id="address" tabindex="1" class="col-lg-6 col-md-6 col-sm-6 col-xs-6 booking-form-item" 
                                    placeholder="Address" value=""  required style=";text-transform: capitalize">
                            </div> 
                        </div>


                        <div id="tab_sec" class="tab-pane fade"><br><br>
                            <div class="form-group">
                                <input name="username" style="width: 300px" type="text" 
                                   v-model="user.username" id="usereg" tabindex="2" 
                                    class="booking-form-item" placeholder="Username" 
                                    required>
                                <input name="pass" style="width: 300px" type="password" 
                                    v-model="user.password" id="passwordreg" tabindex="1" 
                                    class="booking-form-item" placeholder="Password" 
                                    required >
                            </div>   
                            <div class="form-group">
                                <input style="width: 300px" type="password" 
                                    v-model="user.password2" id="confirm-password" 
                                    tabindex="1" class="booking-form-item" 
                                    placeholder="Confirm Password" required>
                            </div>
                          
                            <div class="form-group col-md-12">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <center>
                                            <button  type="submit" 
                                                id="register-submit" tabindex="4" 
                                                class="fancybox-4 btn btn-default" 
                                                :disabled="! checkUserData()">
                                                Register Now
                                            </button>
                                            <a id="close" type="button" class="btn btn-default" 
                                                data-dismiss="modal">Close</a>
                                        </center>
                                            
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> <br>
                </div>   
            </div>
		</div>
	`,
	data() {
		return {
			user: {
				fname: '',
				mi: '',
				lname: '',
				email: '',
				cp: '',
				sex: 'Male',
				address: '',
				username: '',
				password: '',
				password2: ''
			}
		}
	},
	methods: {
		notify(message) {
			new PNotify({
				title: "Success",
				type: "success",
				text: message,
				nonblock: {nonblock: true},
				addclass: 'dark',
				styling: 'bootstrap3', 
			});
		},
		checkUserData() {
			return (this.user.password == this.user.password2)
		},
		register() {
			var self = this
		 	$.ajax({
		 		url: base_url + 'site/user/register',
		 		data: self.user,
		 		method: 'post',
		 		dataType: 'json',
		 		success: function(message) {
		 			self.notify(message)
		 			self.user = {
		 				fname: '',
						mi: '',
						lname: '',
						email: '',
						cp: '',
						sex: 'Male',
						address: '',
						username: '',
						password: '',
						password2: ''
		 			}
		 			$('#close').click()
		 		}
		 	})
		}
	}
})



var appService = new Vue({
	el: '#el-app-service',
	data: {
		services: []
	},
	mounted() {
		this.getServices()
	},
	methods: {
		getServices() {
			var self = this
			$.ajax({
				url: base_url + 'site/main/getServices',
				dataType: 'json',
				success: function(services) {
					self.services = services
				}
			})
		}
	}
})


var service = new Vue({
	el: '#el-service',
	data: {
		services: []
	},
	mounted() {
		this.getServices()
	},
	methods: {
		showService(serviceID) {
			window.location.href = base_url + 'service/' + serviceID
		},
		getServices() {
			var self = this
			$.ajax({
				url: base_url + 'site/main/getServices',
				dataType: 'json',
				success: function(services) {
					self.services = services
				}
			})
		}
	}
})

var address = new Vue({
	el: '#el-address',
	data: {
		address: null
	},
	mounted() {
		this.getAddress()
	},
	methods: {
		getAddress() {
			var self = this
			$.ajax({
				url: base_url + 'site/main/getAddress',
				dataType: 'json',
				success: function(address) {
					self.address = address.toUpperCase()
				}
			})
		}
	}
})


var notif = new Vue({
	el: '#el-notif',
	data: {
		notif: null
	},
	mounted() {
		this.getNotif()
	},
	methods: {
		getNotif() {
			var self = this
			$.ajax({
				url: base_url + 'site/main/getNotif',
				dataType: 'json',
				success: function(notif) {
					self.notif = notif
				}
			})
		}
	}
})

var recom = new Vue({
	el: '#el-recommendation',
	data: {
		recommendations: []
	},
	mounted() {
		this.getRecommendations()
	},
	methods: {
		getRecommendations() {
			$.ajax({
				url: base_url + 'site/main/getRecommendation',
				dataType: 'json',
				success: function(recommendations) {
					if (recommendations) {
						recom.recommendations = recommendations
					}
					else {
						recom.recommendations = []
					}
				}
			})
		}
	}
})

var appOpening = new Vue({
	el: '#el-app-opening',
	data: {
		openings: []
	},
	mounted() {
		this.getOpening()
	},
	methods: {
		getOpening() {
			var self = this
			$.ajax({
				url: base_url + 'site/main/getOpening',
				dataType: 'json',
				success: function(openings) {
					self.openings = openings
				}
			})
		}
	}
})


var opening = new Vue({
	el: '#el-opening',
	data: {
		openings: []
	},
	mounted() {
		this.getOpening()
	},
	methods: {
		getOpening() {
			var self = this
			$.ajax({
				url: base_url + 'site/main/getOpening',
				dataType: 'json',
				success: function(openings) {
					self.openings = openings
				}
			})
		}
	}
})

var name = new Vue({
	el: '#el-clinic_name',
	data: {
		clinicName: ''
	},
	mounted() {
		this.getClinicName()
	},
	methods: {
		getClinicName() {
			var self = this
			$.ajax({
				url: base_url + 'site/main/getClinicName',
				dataType: 'json',
				success: function(name) {
					self.clinicName = new Date().getFullYear() + ' ' + name
				}
			})
		}
	}
})


var contact = new Vue({
	el: '#footer-item-3',
	data: {
		contact: {}
	},
	mounted() {
		this.getContacts()
	},
	methods: {
		getContacts() {
			var self = this
			$.ajax({
				url: base_url + 'site/main/getContacts',
				dataType: 'json',
				success: function(contact) {
					self.contact = contact
				}
			})
		}
	}
})


var reg = new Vue({
	el: '#registration', 
	mounted() {
		this.notify()
	},
	methods: {
		notify() {
			var message = $('#alert').val()
			var message2 = $('#alert2').val()
			if (message) {
				new PNotify({
					title: "Success",
					type: "success",
					text: message,
					nonblock: {nonblock: true},
					styling: 'bootstrap3', 
				});
			}
			else if(message2) {
				new PNotify({
					title: "Log in Failed",
					type: "danger",
					text: message2,
					nonblock: {nonblock: true},
					styling: 'bootstrap3', 
				});
			}
		}
	}
})

