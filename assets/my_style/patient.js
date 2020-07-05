Vue.component('history-form', {
	template: `
		<div>
			<div class="x_panel">
				<div class="x_title">
					<button class="btn btn-default pull-left" @click="cancel">
						<i class="fa fa-angle-left"></i>
					</button>
					<h2>Personal Information </h2>
					<ul class="nav navbar-right panel_toolbox">
						<li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
						<li><a class="close-link"><i class="fa fa-close"></i></a></li>
					</ul>
					<div class="clearfix"></div>
				</div>
				<div class="x_content">
					<div class="col-md-12"><br></div>
					<div class="form-group col-md-4">
						<label>Firstname:</label>
						<input type="text" class="form-control" v-model="selected.fname" readonly>
					</div>
					<div class="form-group col-md-4">
						<label>Middle Initial:</label>
						<input type="text" class="form-control" v-model="selected.mi"
							maxlength="1" readonly>
					</div>
					<div class="form-group col-md-4">
						<label>Lastname:</label>
						<input type="text" class="form-control" v-model="selected.lname" readonly>
					</div>
					<div class="col-md-12"><br></div>
					<div class="form-group col-md-8">
						<label>Address:</label>
						<input type="text" class="form-control" v-model="selected.address" readonly>
					</div>
					<div class="form-group col-md-4">
						<label>Email:</label>
						<input style="text-transform: lowercase;" type="text" class="form-control"
							v-model="selected.email" readonly>
					</div>
					<div class="col-md-12"><br></div>
					<div class="form-group col-md-4">
						<label>Mobile Number:</label>
						<input type="text" class="form-control" v-model="selected.cp_num" readonly>
					</div>
					<div class="form-group col-md-4">
						<label>Gender:</label>
						<input type="text" class="form-control" v-model="selected.gender" readonly>
					</div>
					<div class="form-group col-md-4">
						<label>Patient ID:</label>
						<input type="text" class="form-control" v-model="selected.id" readonly>
					</div>
					<div class="col-md-12"><br></div>
				</div>
			</div>

			<div class="x_panel">
				<div class="x_title">
					<h2> Dental History </h2>
					<ul class="nav navbar-right panel_toolbox">
						<li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
						<li><a class="close-link"><i class="fa fa-close"></i></a></li>
					</ul>
					<div class="clearfix"></div>
				</div>
				<div class="x_content">
					<div v-for="(record, index) in records"  class="x_panel" v-if="index < limit">
						<div :id="'print'+ index">
							<div class="row">
								<div class="col-md-12 col-sm-12 col-xs-12"><br>
									<div class="row">
				                		<center>
				            				<h3>
				                				<img style="float:center;" width="50" height="50" :src="logo" alt="" />
												{{ clinicName }}
											</h3>
										<date></date>
											
											<p class="lead text-center"><b>Dental Report</b></p>
				                		</center>
				            		</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12 col-sm-12 col-xs-12"></div>
							</div>
							<div class="row">
								<div class="col-md-12 col-sm-12 col-xs-12"><br></div>
								<div class="form-group col-md-4 col-sm-4 col-xs-4">
									<label>Firstname:</label>
									<p class="underline"> {{ selected.fname }} </p>
								</div>
								<div class="form-group col-md-4 col-sm-4 col-xs-4">
									<label>Middle Initial:</label>
									<p class="underline"> {{ selected.mi }} </p>
								</div>
								<div class="form-group col-md-4 col-sm-4 col-xs-4">
									<label>Lastname:</label>
									<p class="underline"> {{ selected.lname }} </p>
								</div>
								<div class="col-md-12 col-sm-12 col-xs-12"><br></div>
								<div class="form-group col-md-8 col-sm-8 col-xs-8">
									<label>Address:</label>
									<p class="underline"> {{ selected.address }} </p>
								</div>
								<div class="form-group col-md-4 col-sm-4 col-xs-4">
									<label>Email:</label>
									<p style="text-transform: lowercase;" class="underline"> {{ selected.email }} </p>
								</div>
								<div class="col-md-12 col-sm-12 col-xs-12"><br></div>
								<div class="form-group col-md-4 col-sm-4 col-xs-4">
									<label>Mobile Number:</label>
									<p class="underline"> {{ selected.cp_num }} </p>
								</div>
								<div class="form-group col-md-4 col-sm-4 col-xs-4">
									<label>Gender:</label>
									<p class="underline"> {{ selected.gender }} </p>
								</div>
								<div class="form-group col-md-4 col-sm-4 col-xs-4">
									<label>Patient ID:</label>
									<p class="underline"> {{ selected.id }} </p>
								</div>
								<div class="col-md-12 col-sm-12 col-xs-12"><br><br>
									<p class="lead text-center"><b>Dental Assessment</b></p><br>
								</div>

								<div class="col-md-4 col-sm-4 col-xs-4">
									<label>Service: </label>
									<p class="underline"
										style="text-transform: capitalize">{{ record.typeser }}</p>
								</div>
								<div class="col-md-4 col-sm-4 col-xs-4">
									<label>Date and Time: </label>
									<p class="underline">
										{{ record.daystart + ' ' + record.timestart }}
									</p>
								</div>
								<div class="col-md-4 col-sm-4 col-xs-4">
									<label>Status: </label>
									<p style="text-transform: capitalize" class="underline">
										{{ record.r_status }}
									</p>
								</div>
							</div>

							<div class="row">
								<div class="col-md-12 col-sm-12 col-xs-12"><br><br></div>
							</div>


							<div class="row">
								<div class="col-md-4 col-sm-4 col-xs-4">
									<label>Chief Complaint:</label>
									<p class="underline">
										<span v-for="(complaint, index) in parseData(record.details).complaints">
											{{ complaint }}<span v-if="index!=parseData(record.details).complaints.length-1">, </span>
										</span>
									</p>
								</div>

								<div class="col-md-4 col-sm-4 col-xs-4">
									<label>Medical History:</label>
									<p class="underline">
										<span v-for="(medical, index) in parseData(record.details).medical_history">
											{{ medical }}<span v-if="index!=parseData(record.details).medical_history.length-1">, </span>
										</span>
									</p>
								</div>

								<div class="col-md-4 col-sm-4 col-xs-4">
									<label>Dental History: </label>
									<p class="underline">
										<span v-for="(dental, index) in parseData(record.details).dental_history">
											{{ dental }}<span v-if="index!=parseData(record.details).dental_history.length-1">, </span>
										</span>
									</p>
								</div>
							</div>


							<div class="row">
								<div class="col-md-12 col-sm-12 col-xs-12"><br><br></div>
							</div>




							<div class="row">
								<div class="col-md-12 col-sm-12 col-xs-12">
									<label>Diagnosis and Treatment Table: </label>
									<table class="table table-bordered">
										<thead>
											<tr>
												<th> TEETH NO. </th>
												<th> STATUS </th>
												<th> DIAGNOSIS </th>
												<th> TREATMENT </th>
											</tr>
										</thead>
										<tbody>
											<!-- ============DIAGNOSIS============== -->
											<tr v-show="!parseRecords(record.diagnosis_treatment).length">
												<td colspan="5">	N/A.</td>
											</tr>
											<tr v-for="(dt, index) in parseRecords(record.diagnosis_treatment)"
												v-show="parseData(record.diagnosis_treatment).length">

												<td> {{ dt.teethNumber }} </td>
												<td> {{ dt.status }} </td>
												<td> {{ dt.diagnosis }} </td>
												<td> {{ dt.treatment }} </td>
											</tr>

										</tbody>
									</table> <br>
									<label>Materials</label>
									<table class="table table-bordered">
										<thead>
											<tr>
												<th>NAME</th>
												<th>UNIT</th>
												<th>QUANTITY</th>
											</tr>
										</thead>
										<tbody>
											<tr v-show="!materials.length">
												<td colspan="3">	N/A.</td>
											</tr>
											<tr v-for="material in materials" v-show="materials.length">
												<td> {{ material.name }} </td>
												<td> {{ material.unit_name }} </td>
												<td> {{ material.qty }} </td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>



							<div class="row">
								<div class="col-md-12 col-sm-12 col-xs-12"><br><br></div>
							</div>


							<div class="row">
								<div class="form-group col-md-12 col-sm-12 col-xs-12">
									<label>Recommendation: </label>
									<div class="underline">
										<pre style="font-family:Arial"> <h4 style="line-height: 1.8">{{ (record.recommendation)? record.recommendation: 'N/A' }}</h4> </pre>
									</div>
								</div>
							</div>


							<div class="row">
								<div class="col-md-12 col-sm-12 col-xs-12"><br></div>
							</div>
							<div class="row">
								<div class="col-md-4 col-sm-4 col-xs-4"><br><br><br>
									<center><h4 class="underline" style="text-transform: uppercase">{{ user }} </h4>
									Signature over Printed name
									</center>
								</div>
							</div>

						</div>

						<button @click="print(index)" class="btn btn-success btn-lg pull-right">
							<i class="fa fa-print"></i> Print
						</button>
						<div class="col-md-12"><br><hr></div> <br><br><br><hr>
					</div>
					<ul class="pager">
						<li @click="limit -= 3" v-if="records.length > 0 && limit > 0">
							<a style="cursor: pointer">
								<i class="fa fa-angle-left"></i> less
							</a>
						</li>
						<li @click="limit += 3" v-if="records.length > limit">
							<a style="cursor: pointer">
								more <i class="fa fa-angle-right"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	`,
	props: {
		selected: Object,
		records: Array,
		materials: Array
	},
	computed: {
		clinicName() {
			return clinic_name
		},
		user() {
			var self = this
			$.ajax({
				url: base_url + 'admin/user/check_user',
				success: function(admin) {
					self.admin = admin
				}
			});
			return self.admin
		}
	},
	data() {
		return {
			logo: base_url + 'assets/assets/images/logo.svg',
			limit: 3,
			admin: null,
			details: "",
			diagnosis_treatment: "",
			hoverOnce: true
		}
	},
	methods: {
		parseData(data) {
			if (data) {
				return JSON.parse(data)
			}
			else {
				return [];
			}

		},
		parseRecords(record) {
			if (record) {
				return JSON.parse(record);
				// this.details = JSON.parse(this.records[0].details);
				// this.diagnosis_treatment = JSON.parse(this.records[0].diagnosis_treatment);
				// console.log(JSON.parse(this.records[1].diagnosis_treatment))
				// console.log(this.records)
			}
			return []
		},
		print(id) {
			$('#print' + id).printThis();
		},
		cancel() {
			this.$emit('cancel')
		},
		fullName(reservation) {
			return reservation.fname + ' ' +  reservation.mi + '. ' + reservation.lname
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
				<button class="btn btn-success pull-left" @click="print"  v-if="patients.length">
					<i class="fa fa-print"></i> Print
				</button>
				<div class="clearfix"></div>
			</div>
			<div class="x_content">
				<div id="tableData" v-if="patients.length">
            		<div class="row">
                		<center>
            				<h3>
            					<img style="float:center;" width="50" height="50" :src="src">
								{{ clinicName }}
							</h3>
							<date></date>
							
            				<h4>LIST OF {{ type }} PATIENTS</h4>
                		</center>
            		</div>
					<h2> Total Records : {{ patients.length }}  </h2>
					<table class="table table-bordered">
						<thead>
							<tr>
								<th>NAME</th>
								<th>GENDER</th>
								<th>EMAIL</th>
								<th>MOBILE NUMBER</th>
								<th>USERNAME</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="patient in patients">
								<td>{{ getFullName(patient) }}</td>
								<td> {{ patient.gender }} </td>
								<td> {{ patient.email }} </td>
								<td> {{ patient.cp_num }} </td>
								<td> {{ patient.username }} </td>
							</tr>
						</tbody>
					</table>
				</div>
				<label v-if="!patients.length">No Data selected...</label>
			</div>
		</div>
	`,
	props: {
		patients: Array,
		type: String
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
		cancel() {
			this.$emit('cancel');
		},
		getFullName(patient) {
			return patient.fname + ' ' + patient.mi + '. ' + patient.lname
		},
		print() {
			$("#tableData").printThis();
		}
	}
})



Vue.component('patient-form', {
	template: `
		<div>
			<div class="x_panel" v-show="saveSuccess">
				<div class="col-md-12"><br></div>
				<div class="col-md-12"><br><br><br><br>
					<center>
						<h3>New Patient was Successfully Registered</h3><br><br>
						<a :href="dental" class="btn btn-success btn-lg">
							Go to Dental Appointments
						</a>
					</center>
				</div>
				<div class="col-md-12"><br><br><br><br></div>
			</div>
			<div class="x_panel" id="patientForm">
				<div class="x_title">
					<button class="btn btn-default pull-left" @click="cancel">
						<i class="fa fa-angle-left"></i>
					</button>
					<h2>Personal Information</h2>
					<div class="clearfix"></div>
				</div>

				<div class="x_content">
					<div class="col-md-12"><br></div>
					<div class="form-group col-md-4">
						<label>Firstname:</label>
						<input type="text" class="form-control" v-model="patient.fname" required>
					</div>
					<div class="form-group col-md-4">
						<label>Middle Initial:</label>
						<input type="text" class="form-control" v-model="patient.mi"
							maxlength="1" required>
					</div>
					<div class="form-group col-md-4">
						<label>Lastname:</label>
						<input type="text" class="form-control" v-model="patient.lname" required>
					</div>
					<div class="col-md-12"><br></div>
					<div class="form-group col-md-8">
						<label>Address:</label>
						<input type="text" class="form-control" v-model="patient.address" required>
					</div>
					<div class="form-group col-md-4">
						<label>Email:</label>
						<input style="text-transform: lowercase;" type="text" class="form-control"
							v-model="patient.email" required>
					</div>
					<div class="col-md-12"><br></div>
					<div class="form-group col-md-4">
						<label>Mobile Number:</label>
						<input type="text" class="form-control" v-model="patient.cp_num" required>
					</div>
					<div class="form-group col-md-4">
						<label>Sex:</label>
						<select style="width: 100%" class="form-control" v-model="patient.gender">
							<option>Male</option>
							<option>Female</option>
						</select>
					</div>

					<div class="col-md-12"><br></div><br><hr><br>
	 			</div>
	 			<div class="x_title">
					<h2>Dental Appointment</h2>
					<div class="clearfix"></div>
				</div>
				<div class="x_content">
					<div class="col-md-12"><br></div>
					<div class="form-group col-md-4">
						<label>Date:</label>
                        <div class='input-group date'>
                            <input id="date" type='text'
                            	class="form-control datepicker" required>
                            <span class="input-group-addon">
                               <span class="glyphicon glyphicon-calendar"></span>
                            </span>
                        </div>
					</div>
					<div class="form-group col-md-4" @mouseover="findAvailableTime">
						<label>Time:</label>
						<select style="width: 100%" class="form-control" v-model="patient.time" required>
							<option v-for="time in availableTime"> {{ time }} </option>
						</select>
					</div>
					<div class="form-group col-md-4">
						<label>Service:</label>
						<select class="form-control"  v-model="patient.service" required>
							<option v-for="service in services"> {{ service.name }} </option>
						</select>
					</div>

					<div class="col-md-12"><hr></div>
					<div class="col-md-12"><br>
						<p class="lead"> CHIEF COMPLAINT </p>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox" v-model="complaints" value="Pain">
								<label for="radio"> Pain </label>
							</div>
						</div>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox"  v-model="complaints" value="Swelling">
								<label for="radio"> Swelling </label>
							</div>
						</div>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox"  v-model="complaints" value="Decayed">
								<label for="radio"> Decayed </label>
							</div>
						</div>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox"  v-model="complaints" value="Checkup">
								<label for="radio"> Checkup </label>
							</div>
						</div>
						<div class="form-group col-md-4">
							<input class="form-control" type="text" v-model="otherComplaints" placeholder="Other Complaints" >
						</div>
					</div>
					<div class="col-md-12"><hr></div>
					<div class="col-md-12"><br>
						<p class="lead"> MEDICAL HISTORY </p>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox" v-model="medicalHistory" value="Heart Ailment">
								<label for="radio"> Heart Ailment </label>
							</div>
						</div>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox" v-model="medicalHistory" value="Hypertension">
								<label for="radio"> Hypertension </label>
							</div>
						</div>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox" v-model="medicalHistory" value="Anemia">
								<label for="radio"> Anemia </label>
							</div>
						</div>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox" v-model="medicalHistory" value="Severe Headache">
								<label for="radio"> Severe Headache </label>
							</div>
						</div>
						<div class="form-group col-md-4">
							<input class="form-control" type="text" v-model="otherMedical" placeholder="Other Medical History" >
						</div>
						<div class="col-md-12"></div>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox" v-model="medicalHistory" value="Asthma">
								<label for="radio"> Asthma </label>
							</div>
						</div>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox" v-model="medicalHistory" value="Allergies">
								<label for="radio"> Allergies </label>
							</div>
						</div>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox" v-model="medicalHistory" value="Epilepsy">
								<label for="radio"> Epilepsy </label>
							</div>
						</div>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox" v-model="medicalHistory" value="Ulcer">
								<label for="radio"> Ulcer </label>
							</div>
						</div>
					</div>
					<div class="col-md-12"><hr></div>
					<div class="col-md-12"><br>
						<p class="lead"> DENTAL HISTORY </p>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox" v-model="dentalHistory" value="Permanent Filling">
								<label for="radio"> Permanent Filling </label>
							</div>
						</div>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox" v-model="dentalHistory" value="Temporary Filling">
								<label for="radio"> Temporary Filling </label>
							</div>
						</div>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox" v-model="dentalHistory" value="Oral Prophylaxis">
								<label for="radio"> Oral Prophylaxis </label>
							</div>
						</div>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox" v-model="dentalHistory" value="RCT">
								<label for="radio"> RCT </label>
							</div>
						</div>
						<div class="form-group col-md-4">
							<input class="form-control" type="text" v-model="otherDental" placeholder="Other Dental History" >
						</div>
						<div class="col-md-12"></div>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox" v-model="dentalHistory" value="Pulpectomy">
								<label for="radio"> Pulpectomy </label>
							</div>
						</div>
						<div class="form-group col-md-2">
							<div class="checkbox checkbox-primary">
								<input type="checkbox" v-model="dentalHistory" value="Alveolectomy">
								<label for="radio"> Alveolectomy </label>
							</div>
						</div>
					</div>
					<div class="col-md-12"><hr></div>


					<div class="col-md-12"><br>
						<center>
							<button @click="savePatient" class="btn btn-primary btn-lg">
								<i class="fa fa-check-circle"></i>
								Save Patient
							</button>
						</center>
					</div>
				</div>
				<div class="col-md-12"><br></div>
 			</div>
		</div>
	`,
	props: {
		services: Array
	},
	data() {
		return {
			patient: {
				fname: '', mi: '', lname: '', address: '', email: '', cp_num: '', gender: 'Male',
				date: '', time: '', service: ''
			},
			availableTime: [],
			saveSuccess: false,
			dental: base_url + 'admin/reservation',
			complaints: [],
			medicalHistory: [],
			dentalHistory: [],
			otherComplaints: null,
			otherMedical: null,
			otherDental: null,
		}
	},
	methods: {
		setAvailableTime() {
			this.availableTime = [
				'8:00 AM - 9:00 AM',
				'9:00 AM - 10:00 AM',
				'10:00 AM - 11:00 AM',
				'11:00 AM - 12:00 PM',
				'1:00 PM - 2:00 PM',
				'2:00 PM - 3:00 PM',
				'3:00 PM - 4:00 PM',
				'4:00 PM - 5:00 PM'
			]
		},
		checkOtherInputs() {
			if (this.otherComplaints) {
				this.complaints.push(this.otherComplaints);
			}
			if (this.otherMedical) {
				this.medicalHistory.push(this.otherMedical);
			}
			if (this.otherDental) {
				this.dentalHistory.push(this.otherDental);
			}
		},
		savePatient() {
			var self = this;
			self.checkOtherInputs();

			$.ajax({
				url: base_url + 'admin/patient/savePatient',
				data: {
					patient: self.patient,
					details: {
						complaints: self.complaints,
						medical_history: self.medicalHistory,
						dental_history: self.dentalHistory,
					}
				},
				method: 'post',
				success: function(response) {
					$('#patientForm').hide()
					self.saveSuccess = true
					console.log(response)
				}
			});
		},
		findAvailableTime() {
			var self = this
			this.setAvailableTime()
			var date = $('#date').val()
			this.patient.date = date
			$.ajax({
				url: base_url + 'site/home/findApointments',
				data: {date: date},
				method: 'post',
				dataType: 'json',
				success: function(response) {
					for(index in response) {
						for(x in self.availableTime) {
							if (self.availableTime[x] == response[index].timestart) {
								self.availableTime.splice(x, 1)
							}
						}
					}
				}
			})
		},
		cancel() {
			this.$emit('cancel')
		}
	}
})


var app = new Vue({
	el: '#patientPage',
	data: {
		addForm: false,
		historyForm : false,
		checkAll : false,
		printForm : false,
		selected: [],
		verifieds: [],
		notVerifieds: [],
		reservations: [],
		materials: [],
		patient: {},
		type: '',
		title: 'Patient List',
		services: [],
		columns: [
    	{ label: 'FIRSTNAME', field: 'fname',  sortable: false },
    	{ label: 'MIDDLE NAME', field: 'mi',  sortable: false },
    	{ label: 'LASTNAME', field: 'lname',  sortable: false },
    	{ label: 'GENDER', field: 'gender',  sortable: false },
    	{ label: 'EMAIL', field: 'email',  sortable: false },
    	{ label: 'MOBILE NO', field: 'cp_num',  sortable: false },
    	{ label: 'USERNAME', field: 'username',  sortable: false }
    ],
	},
	mounted() {
		this.getPatients()
		this.getServices()
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
		getPatients() {
			$.ajax({
				url: base_url + 'admin/patient/getPatients',
				dataType: 'json',
				success: function(patients) {
					app.verifieds = []
					app.notVerifieds = []
					for(index in patients) {
						if (patients[index].verify == 1) {
							app.verifieds.push(patients[index])
						}
						else {
							app.notVerifieds.push(patients[index])
						}
					}
				}
			})
		},
		getSelected(data) {
 			app.selected = data.selectedRows
	 	},
		getServices() {
			$.ajax({
				url: base_url + 'admin/patient/getServices',
				dataType: 'json',
				success: function(services) {
					app.services = services
				}
			})
		},
		getMaterials() {
			$.ajax({
				url: base_url + 'admin/reservation/getMaterials',
				data: { service: app.selected[0].typeser },
				method: 'post',
				dataType: 'json',
				success: function(materials) {
					app.materials = materials
				}
			});
		},
		showHistoryForm() {
			if(app.selected.length != 1) {
	 			app.notify('danger', 'Select One(1) Patient Only')
	 		}
	 		else {
				app.getMaterials();
	 			var patient = app.selected[0]
				$.ajax({
					url: base_url + 'admin/reservation/getReservations',
					data: {id : patient.id},
					method: 'post',
					dataType: 'json',
					success: function(reservations) {
						app.reservations = reservations
						app.patient = patient
						$('#mainData').hide()
						app.title = 'Patients Records'
						app.historyForm = true
					}
				});
	 		}

		},
		showAddForm() {
			app.title = 'Add Patient'
			$('#mainData').hide()
			// $('#addForm').show()
			app.addForm = true
		},
		cancel() {
			app.title = 'Patient List'
			app.addForm = false
			$('#mainData').show()
			app.printForm = false
			app.historyForm = false
			// $('#addForm').hide()
		},
		checkType() {
			app.type = 'VERIFIED'
			for(index in app.selected) {
				if (app.selected[index].verify == 0) {
					app.type = 'NOT VERIFIED'
				}
			}
		},
		showPrintForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Patient Selected')
	 		}
	 		else {
				app.checkType()
				$('#mainData').hide()
				app.title = 'Print Patients'
				app.printForm = true
	 		}
		},
		getFullName(patient) {
			return patient.fname + ' ' + patient.mi + '. ' + patient.lname
		},
		checkAllBox(verify) {
			app.selected = []
			if (! app.checkAll) {
				if (verify == 1) {
					app.selected = app.verifieds
				}
				else {
					app.selected = app.notVerifieds
				}
			}
		},
	}
});
