Vue.component('transaction', {
	template: `
		<div @mouseover="parseRecords">
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
						<input type="text" class="form-control" v-model="selected.patient_id" readonly>
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
					<div class="x_panel">
						<div id="print">
							<div class="row">
								<div class="col-md-12 col-sm-12 col-xs-12"><br>
									<div class="row">
				            <center>
				            	<h3>
				                <img style="float:center;" width="50" height="50"
				                	:src="logo" alt="" />
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
									<p class="underline"> {{ selected.patient_id }} </p>
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
										<span v-show="! parseData(record.details).complaints">
											N/A
										</span>
									</p>
								</div>

								<div class="col-md-4 col-sm-4 col-xs-4">
									<label>Medical History:</label>
									<p class="underline">
										<span v-for="(medical, index) in parseData(record.details).medical_history">
											{{ medical }}<span v-if="index!=parseData(record.details).medical_history.flength-1">, </span>
										</span>
										<span v-show="! parseData(record.details).medical_history">
											N/A
										</span>
									</p>
								</div>

								<div class="col-md-4 col-sm-4 col-xs-4">
									<label>Dental History: </label>
									<p class="underline">
										<span v-for="(dental, index) in parseData(record.details).dental_history">
											{{ dental }}<span v-if="index!=parseData(record.details).dental_history.length-1">, </span>
										</span>
										<span v-show="! parseData(record.details).dental_history">
											N/A
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
												<th> TOOTH NO. </th>
												<th> STATUS </th>
												<th> DIAGNOSIS </th>
												<th> TREATMENT </th>
											</tr>
										</thead>
										<tbody class="capitalize">
											<!-- ============DIAGNOSIS============== -->
											<tr v-show="!parseData(record.diagnosis_treatment).length">
												<td colspan="5">	N/A.</td>
											</tr>
											<tr v-for="(dt, index) in parseData(record.diagnosis_treatment)"
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


							<div class="row"><div class="col-md-12"><hr></div></div>

							<div class="row" v-show="showImages">
								<div class="col-md-6 text-center"  v-if="record.img_before">
									<center><label>BEFORE: </label>
									<img :src="path(record.img_before)"  class="img-responsive thumbnail" ></center>
								</div>
								<div class="col-md-6 text-center"  v-if="record.img_after">
									<center><label>AFTER: </label>
									<img :src="path(record.img_after)" class="img-responsive thumbnail" ></center>
								</div>
							</div>



						</div>

						<button @click="print" class="btn btn-success btn-lg pull-right">
							<i class="fa fa-print"></i> Print
						</button>
						<div class="col-md-12"><br><hr></div> <br><br><br><hr>
					</div>
				</div>
			</div>
		</div>
	`,
	props: {
		selected: Object,
		record: Object,
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
			hoverOnce: true,
			showImages: true
		}
	},
	methods: {
		path(img) {
			return base_url + img
		},
		parseData(data) {
			if (data) {
				return JSON.parse(data)
			}
			else {
				return [];
			}
		},
		parseRecords() {
			if (this.hoverOnce) {
				// this.details = JSON.parse(this.records[0].details);
				// this.diagnosis_treatment = JSON.parse(this.records[0].diagnosis_treatment);
				// console.log(JSON.parse(this.records[1].diagnosis_treatment))
				// console.log(this.records)
			}
			this.hoverOnce = false
		},
		print(id) {
			this.showImages = false;
			$('#print').printThis();
		},
		cancel() {
			this.$emit('cancel')
		},
		fullName(reservation) {
			return reservation.fname + ' ' +  reservation.mi + '. ' + reservation.lname
		},
	}
})

Vue.component('history-table', {
	template: `
			<div class="x_panel">
				<div class="x_title">
					<button class="btn btn-default pull-left" @click="cancel">
						<i class="fa fa-angle-left"></i>
					</button>
					<h2> <b>DENTAL HISTORY</b> </h2>
					<ul class="nav navbar-right panel_toolbox">
						<li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
						<li><a class="close-link"><i class="fa fa-close"></i></a></li>
					</ul>
					<div class="clearfix"></div>
				</div>
				<div class="x_content">
					<transaction v-show="oneRecord" :record="selectedRecord" :materials="materials" :selected="selected" @cancel="back">

					</transaction>
					
					


					<div v-show="historyTable">
						<button @click="print" class="btn btn-success pull-right">
							<i class="fa fa-print"></i> Print
						</button>
						<div id="table-data">
							<div class="row">
								<center>
									<h3><img style="float:center;" width="50" height="50" :src="src">{{ clinicName }}</h3>
									<date></date>
									
									<h4> DENTAL HISTORY </h4>
								</center>
							</div>

							<div class="row">
								<div class="col-md-12 col-sm-12 col-xs-12"></div>
							</div>
							<!-- <div class="row">
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
									<p class="underline"> {{ selected.patient_id }} </p>
								</div>
							</div> -->
						
							<table class="table table-bordered">
								<thead>
									<tr>
										<th>SERVICE</th>
										<th>DATE</th>
										<th>TIME</th>
										<th>RECOMMENDATION</th>
										<th width="50">TRANSACTION</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="record in records">
										<td> {{ record.typeser }} </td>
										<td> {{ record.daystart }} </td>
										<td> {{ record.timestart }} </td>
										<td> {{ record.recommendation }} </td>
										<td class="text-center">
											<button class="btn btn-primary btn-sm" @click="getRecords(record)">
												<i class="fa fa-hand-pointer-o"></i>
											</button>
										</td>
									</tr>
								</tbody>
							</table>

						</div>
					</div>
				</div>
			</div>
	`,
	props: {
		selected: Object,
		records: Array
	},
	data() {
		return {
			src: base_url + 'assets/assets/images/logo.svg',
			selectedRecord: {},
			historyTable: true,
			oneRecord: false,
			materials: []
		}
	},
	computed: {
		clinicName() {
			return clinic_name
		}
	},
	methods: {
		getRecords(record) {
			var self = this
			$.ajax({
				url: base_url + 'admin/reservation/getMaterials',
				data: { service: record.typeser },
				method: 'post',
				dataType: 'json',
				success: function(materials) {
					self.materials = materials
				}
			});
			this.selectedRecord = record
			this.historyTable = false;
			this.oneRecord = true;
		},
		back() {
			this.selectedRecord = {}
			this.historyTable = true;
			this.oneRecord = false;
		},
		cancel() {
			this.$emit('cancel')
		},
		print() {
			$('#table-data').printThis();
		}
	}
});

Vue.component('history-form', {
	template: `
		<div @mouseover="parseRecords">
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
						<input type="text" class="form-control" v-model="selected.patient_id" readonly>
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
				                <img style="float:center;" width="50" height="50"
				                	:src="logo" alt="" />
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
									<p class="underline"> {{ selected.patient_id }} </p>
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
										<span v-show="! parseData(record.details).complaints">
											N/A
										</span>
									</p>
								</div>

								<div class="col-md-4 col-sm-4 col-xs-4">
									<label>Medical History:</label>
									<p class="underline">
										<span v-for="(medical, index) in parseData(record.details).medical_history">
											{{ medical }}<span v-if="index!=parseData(record.details).medical_history.flength-1">, </span>
										</span>
										<span v-show="! parseData(record.details).medical_history">
											N/A
										</span>
									</p>
								</div>

								<div class="col-md-4 col-sm-4 col-xs-4">
									<label>Dental History: </label>
									<p class="underline">
										<span v-for="(dental, index) in parseData(record.details).dental_history">
											{{ dental }}<span v-if="index!=parseData(record.details).dental_history.length-1">, </span>
										</span>
										<span v-show="! parseData(record.details).dental_history">
											N/A
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
												<th> TOOTH NO. </th>
												<th> STATUS </th>
												<th> DIAGNOSIS </th>
												<th> TREATMENT </th>
											</tr>
										</thead>
										<tbody class="capitalize">
											<!-- ============DIAGNOSIS============== -->
											<tr v-show="!parseData(record.diagnosis_treatment).length">
												<td colspan="5">	N/A.</td>
											</tr>
											<tr v-for="(dt, index) in parseData(record.diagnosis_treatment)"
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
									<!-- <label>Diagnosis: </label>
									<p class="underline">
										<span v-for="diagnosis in parseData(record.diagnosis_treatment).diagnosis">
											{{ diagnosis }},
										</span> <span v-html="parseData(record.diagnosis_treatment).other_diagnosis"></span>
									</p>
								</div>
								<div class="col-md-4 col-sm-4 col-xs-4">
									<label>Treatment: </label>
									<p class="underline">
										<span v-for="treatment in parseData(record.diagnosis_treatment).treatment">
											{{ treatment }},
										</span> <span v-html="parseData(record.diagnosis_treatment).other_treatment"></span>
									</p> -->
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


							<div class="row"><div class="col-md-12"><hr></div></div>

							<div class="row" v-show="showImages">
								<div class="col-md-6 text-center"  v-if="record.img_before">
									<center><label>BEFORE: </label>
									<img :src="path(record.img_before)"  class="img-responsive thumbnail" ></center>
								</div>
								<div class="col-md-6 text-center"  v-if="record.img_after">
									<center><label>AFTER: </label>
									<img :src="path(record.img_after)" class="img-responsive thumbnail" ></center>
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
			hoverOnce: true,
			showImages: true
		}
	},
	methods: {
		path(img) {
			return base_url + img
		},
		parseData(data) {
			if (data) {
				return JSON.parse(data)
			}
			else {
				return [];
			}
		},
		parseRecords() {
			if (this.hoverOnce) {
				// this.details = JSON.parse(this.records[0].details);
				// this.diagnosis_treatment = JSON.parse(this.records[0].diagnosis_treatment);
				// console.log(JSON.parse(this.records[1].diagnosis_treatment))
				// console.log(this.records)
			}
			this.hoverOnce = false
		},
		print(id) {
			this.showImages = false;
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

Vue.component('manage-form', {
	template: `
		<div @mouseover="parseRecords">
			<div id="add-recommendation" class="modal fade" role="dialog">
				<div class="modal-dialog">
					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal">&times;</button>
							<h4 class="modal-title">Add Recommendation</h4>
						</div>
						<div class="modal-body">
							<textarea class="form-control" style="height: 200px;"
								placeholder="Provide Reccomendation" v-model="recommendation">
							</textarea>
						</div>
						<div class="modal-footer">
							<a class="btn btn-default" data-dismiss="modal">Close</a>
							<a @click="addRecommendation" class="btn btn-primary" data-dismiss="modal">
								<i class="fa fa-check-circle"></i> Save Recommendation
							</a>
						</div>
					</div>
				</div>
			</div>


			<div class="x_panel">
				<div class="x_title">
					<a class="btn btn-default pull-left" @click="cancel">
						<i class="fa fa-angle-left"></i>
					</a>
					<h2>Personal Information </h2>
					<ul class="nav navbar-right panel_toolbox">
						<li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
						<li><a class="close-link"><i class="fa fa-close"></i></a></li>
					</ul>
					<div class="clearfix"></div>
				</div>
				<div class="x_content">
					<div class="col-md-12"><br></div>
					<div class="form-group col-md-8">
						<label>Fullname:</label>
						<input type="text" class="form-control" v-model="fullname" readonly>
					</div>
					<div class="form-group col-md-4">
						<label>Patient ID:</label>
						<input type="text" class="form-control" v-model="selected.patient_id" readonly>
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
					<div class="col-md-12"><br></div>
				</div>
			</div>

			<div class="x_panel">
				<div class="x_title">
					<h2> Dental Request </h2>
					<ul class="nav navbar-right panel_toolbox">
						<li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
						<li><a class="close-link"><i class="fa fa-close"></i></a></li>
					</ul>
					<div class="clearfix"></div>
				</div>
				<div class="x_content">
					<div class="col-md-12"><br></div>
					<h3 v-if="selected.r_status == 'pending'">
						<label class="label label-warning">Pending</label>
					</h3>
					<h3 v-else-if="selected.r_status == 'approved'">
						<label class="label label-primary">Approved </label>
					</h3>
					<h3 v-else>
						<label class="label label-success">Finished </label>
					</h3>

					


					<div v-if="user=='doctor'">

						<div class="col-md-12"><br></div>
						<div class="form-group col-md-4">
							<h4><label>Date: </label>  </h4>
							<h4 class="underline">{{ selected.daystart }}</h4>
						</div>
						<div class="form-group col-md-4">
							<h4><label>Time: </label>  </h4>
							<h4 class="underline">{{ selected.timestart }}</h4>
						</div>
						<div class="form-group col-md-4">
							<h4><label>Service: </label>  </h4>
							<h4 class="underline">{{ selected.typeser }}</h4>
						</div>

						<div class="col-md-12"><br></div>
						<div class="row">
							<div class="col-md-4 col-sm-4 col-xs-4">
								<h4><label>Chief Complaint:</label></h4>
								<h4 class="underline">
									<span v-for="(complaint, index) in details.complaints">
										{{ complaint }}<span v-if="index!=details.complaints.length-1">, </span>
									</span>
									<span v-show="!details.complaints.length">
										N/A
									</span>
								</h4>
							</div>

							<div class="col-md-4 col-sm-4 col-xs-4">
								<h4><label>Medical History:</label></h4>
								<h4 class="underline">
									<span v-for="(medical, index) in details.medical_history">
										{{ medical }}<span v-if="index!=details.medical_history.length-1">, </span>
									</span>
									<span v-show="!details.medical_history.length">
										N/A
									</span>
								</h4>
							</div>

							<div class="col-md-4 col-sm-4 col-xs-4">
								<h4><label>Dental History: </label></h4>
								<h4 class="underline">
									<span v-for="(dental, index) in details.dental_history">
										{{ dental }}<span v-if="index!=details.dental_history.length-1">, </span>
									</span>
									<span v-show="!details.dental_history.length">
										N/A
									</span>
								</h4>
							</div>
						</div>


						<div class="col-md-12"><br></div>


						<div class="col-md-12 underline" v-if="selected.r_status=='approved'"><br><br></div>

						<div class="col-md-12" id="teeth-list" v-if="selected.r_status=='approved'">
							<h4><label>SELECT TOOTH HERE</label></h4>
							<div class="row">
								<div class="col-md-4">
									<img :src="teethImage" alt=""  width="300" height="600">
									<label for="">TEETH IMAGE</label>
								</div>
								<div class="col-md-8">
									<label>CHOOSE TOOTH NUMBER</label>
									<div class="btn-group btn-group-justified">
										<a href="#teeth-list" v-for="x in totalTeeth" v-if="x <= 16"
											@click="addToTable(x)" class="btn btn-default">
											{{ x }}
										</a>
									</div>
									<div class="row"> <br> </div>
									<div class="btn-group btn-group-justified">
										<a href="#teeth-list" v-for="x in totalTeeth" v-if="x >= 17"
											@click="addToTable(x)" class="btn btn-default">
											{{ x }}
										</a>
									</div> <hr>

									<p class="lead"> DIAGNOSIS AND TREATMENT TABLE </p>
									<table class="table table-bordered">
										<thead>
											<tr>
												<th> NO. </th>
												<th> STATUS </th>
												<th> DIAGNOSIS </th>
												<th> TREATMENT </th>
												<th> REMOVE </th>
											</tr>
										</thead>
										<tbody>
											<!-- ============DIAGNOSIS============== -->
											<tr v-show="!temp_diagnosis_treatment.length">
												<td colspan="5">	No Data Found.</td>
											</tr>
											<tr v-for="(dt, index) in temp_diagnosis_treatment" v-if="temp_diagnosis_treatment.length">
												<td> {{ dt.teethNumber }} </td>
												<td>
													<input list="status" class="form-control" v-model="dt.status"
														@change="checkStatus(dt.status)">
													<datalist id="status">
													  <option v-for="s in teeth_status" :value="s">{{ s }}</option>
													</datalist>
												</td>
												<td>
													<input list="diagnosis" class="form-control" v-model="dt.diagnosis"
														@change="checkDiagnosis(dt.diagnosis)">
													<datalist id="diagnosis">
													  <option v-for="d in diagnosis" :value="d">{{ d }}</option>
													</datalist>
												</td>
												<td>
													<input list="treatment" class="form-control" v-model="dt.treatment"
														@change="checkTreatment(dt.treatment)">
													<datalist id="treatment">
													  <option v-for="t in treatment" :value="t">{{ t }}</option>
													</datalist>
												</td>
												<td>
													<center>
														<button @click="remove(index)" class="btn btn-danger btn-sm">
															<i class="fa fa-minus"></i>
														</button>
													</center>
												</td>
											</tr>

										</tbody>
									</table> <hr>

									<p class="lead"> MATERIALS </p>
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
												<td colspan="3">	No Data Found.</td>
											</tr>
											<tr v-for="material in materials" v-if="materials.length">
												<td> {{ material.name }} </td>
												<td> {{ material.unit_name }} </td>
												<td> {{ material.qty }} </td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

						</div>







						<div class="col-md-12 underline" v-if="selected.r_status=='approved'"><br><br></div>

						<div class="form-group col-md-12">
							<h4><label>Recommendation: </label>
								<a :disabled="selected.r_status != 'approved'" @click="recommendation=selected.recommendation"
									class="btn btn-success btn-sm" data-toggle="modal"
									data-target="#add-recommendation">
									<i class="fa fa-plus-square"></i>
								</a>
							</h4>
							<div class="underline">
								<pre style="font-family:Arial"> <h4 style="line-height: 1.8">{{ (selected.recommendation)? selected.recommendation: 'N/A' }}</h4> </pre>
							</div>
						</div>

					</div>
					<div class="col-md-2">
						<div class="checkbox checkbox-primary" v-show="selected.r_status == 'pending' &&
					  		user=='dentalaide'">
							<input v-model="approvedCheckbox" type="checkbox" name="checkbox1">
							<label for="checkbox1"> <h4 style="margin-top: -1px;">Approved</h4> </label>
						</div>
						<div class="checkbox checkbox-danger" v-show="selected.r_status == 'pending' &&
					  		user=='dentalaide'">
							<input v-model="disapprovedCheckbox" type="checkbox" name="checkbox2">
							<label for="checkbox2"><h4 style="margin-top: -1px;">Disapproved</h4>  </label>
						</div>
						<div class="checkbox checkbox-success"  v-show="selected.r_status != 'finished' && user == 'doctor'
							&& selected.r_status == 'approved'"><br>
							<input v-model="finishedCheckbox" type="checkbox" name="checkbox3">
							<label for="checkbox3"> <h4 style="margin-top: -1px;">Finished</h4> </label>
						</div>
					</div>
					<div class="col-md-10">
						<div v-if="status == 'disapproved'">
						<label>Provide Reason: </label>
						<textarea class="form-control" v-model="reason" style="height: 100px;">
						</textarea>
						</div>
					</div>

					<div class="col-md-2"></div>
					<div class="col-md-10">
						<div v-show="finishedCheckbox">
							<div class="col-md-6 text-center">
								<center><label>BEFORE: </label>
								<img id="image-before" class="img-responsive thumbnail" alt="Click to upload" @click="uploadBefore">
								<input style="display:none" type="file" id="before" @change="previewImageBefore"></center>
							</div>
							<div class="col-md-6 text-center">
								<center><label>AFTER: </label>
								<img id="image-after" class="img-responsive thumbnail" alt="Click to Upload" @click="uploadAfter">
								<input style="display:none" type="file" id="after" @change="previewImageAfter"></center>
							</div>
						</div>
					</div>

					<div class="col-md-12"><br><hr></div>
				  	<form method="post" :action="base">
				  		<input type="hidden" name="id" :value="selected.id">
				  		<input type="hidden" name="status" :value="status">
				  		<input type="hidden" name="email" :value="selected.email">
				  		<input type="hidden" name="recommendation" :value="selected.recommendation">
				  		<input type="hidden" name="reason" :value="reason">
				  		<input type="hidden" name="service_name" :value="selected.typeser">
				  		<input type="hidden" name="diagnosis_treatment" :value="diagnosis_treatment">
						<button @click="uploadImages"  @mouseover="stringifyDiagnosisAndTreatment" :disabled="! status" type="submit"
							class="btn btn-primary btn-lg pull-right">
							<i class="fa fa-check-circle"></i>
							Done
						</button>
				  	</form>
				</div>
			</div>
		</div>
	`,
	props: {
		selected: Object,
		user: String,
		diagnosis: Array,
		treatment: Array,
		teeth_status: Array,
		materials: Array
	},
	data() {
		return {
			tabTeeth: true,
			tabDiagnosisAndTreatment: false,
			totalTeeth: 32,
			status: this.selected.r_status,
			recommendation: '',
			reason: '',
			base: base_url + 'update_reservation',
			// diagnosis: [],
			// treatment: [],
			otherDiagnosis: "",
			otherTreatment: "",
			diagnosis_treatment: {diagnosis: [], treatment: [], other_diagnosis: "", other_treatment: ""},
			details: {complaints: [], medical_history: [], dental_history: []},
			hoverOnce: true,
			stringify: true,
			approvedCheckbox: false,
			disapprovedCheckbox: false,
			finishedCheckbox: false,
			temp_diagnosis_treatment: [],
			teethImage: base_url + 'img/teeth.png',
			upperTeeth: base_url + 'img/upper.png',
			lowerTeeth: base_url + 'img/lower.png',
			selectedTeethNumber: 0
		}
	},

	watch: {
		approvedCheckbox() {
			if (this.approvedCheckbox) {
				this.disapprovedCheckbox = false;
				this.finishedCheckbox = false;
				this.status = 'approved';
			}
		},
		disapprovedCheckbox() {
			if (this.disapprovedCheckbox) {
				this.approvedCheckbox = false;
				this.finishedCheckbox = false;
				this.status = 'disapproved';
			}
		},
		finishedCheckbox() {
			if (this.finishedCheckbox) {
				this.disapprovedCheckbox = false;
				this.approvedCheckbox = false;
				this.status = 'finished';
			}
		},
	},

	computed: {
		fullname() {
			return this.selected.fname + ' ' + this.selected.mi + '. ' + this.selected.lname
		}
	},

	methods: {
		checkStatus(status) {
			var self = this;
			if (! self.teeth_status.includes(status)) {
				$.ajax({
					url: base_url + 'admin/reservation/insertStatus',
					data: {name: status},
					method: 'post',
					dataType: 'json',
					success: function(response) {
						self.$emit('table-change', response)
					}
				})
			}
		},
		checkDiagnosis(diagnosis) {
			var self = this;
			if (! self.diagnosis.includes(diagnosis)) {
				$.ajax({
					url: base_url + 'admin/reservation/insertDiagnosis',
					data: {name: diagnosis},
					method: 'post',
					dataType: 'json',
					success: function(response) {
						self.$emit('table-change', response)
					}
				})
			}
		},
		checkTreatment(treatment) {
			var self = this;
			if (! self.treatment.includes(treatment)) {
				$.ajax({
					url: base_url + 'admin/reservation/insertTreatment',
					data: {name: treatment},
					method: 'post',
					dataType: 'json',
					success: function(response) {
						self.$emit('table-change', response)
					}
				})
			}
		},
		addToTable(teethNumber) {
			this.temp_diagnosis_treatment.unshift({
				teethNumber: teethNumber,
				status: '',
				diagnosis: '',
				treatment: ''
			});
		},
		remove(index) {
			this.temp_diagnosis_treatment.splice(index, 1)
		},
		uploadImages() {
			var before = $('#before').prop('files')[0];
			var after = $('#after').prop('files')[0];

	        var form_data = new FormData();
	        form_data.append('before', before);
	        form_data.append('after', after);

	        $.ajax ({
	            url: base_url + 'admin/reservation/uploadImages',
	            cache: false,
	            contentType: false,
	            processData: false,
	            data: form_data,
	            type: 'post',
	            success: function(response) {
	            	console.log(response)
	            }
	        });
		},
		previewImageBefore() {
			var self = this
            var oFReader = new FileReader();
			oFReader.readAsDataURL(document.getElementById("before").files[0]);

			oFReader.onload = function(oFREvent) {
				document.getElementById("image-before").src = oFREvent.target.result;
			};

			var before = $('#before').prop('files')[0];

	        var form_data = new FormData();
	        form_data.append('before', before);
	        form_data.append('id', self.selected.id)

	        $.ajax ({
	            url: base_url + 'admin/reservation/uploadBeforeImage',
	            cache: false,
	            contentType: false,
	            processData: false,
	            data: form_data,
	            type: 'post',
	            success: function(response) {
	            	console.log(response)
	            }
	        });

		},
		previewImageAfter() {
			var self = this
            var oFReader = new FileReader();
			oFReader.readAsDataURL(document.getElementById("after").files[0]);

			oFReader.onload = function(oFREvent) {
				document.getElementById("image-after").src = oFREvent.target.result;
			};

			var after = $('#after').prop('files')[0];

	        var form_data = new FormData();
	        form_data.append('after', after);
	        form_data.append('id', self.selected.id)
	        $.ajax ({
	            url: base_url + 'admin/reservation/uploadAfterImage',
	            cache: false,
	            contentType: false,
	            processData: false,
	            data: form_data,
	            type: 'post',
	            success: function(response) {
	            	console.log(response)
	            }
	        });
		},
		uploadBefore() {
			$('#before').click();
		},
		uploadAfter() {
			$('#after').click();
		},
		changeStatus(status) {
			// this.activeCheckbox = false
			// if (this.status != 'finished') {
			// 	this.status = status
			// }
			// else {
			// 	this.status = this.selected.r_status
			// }
		},
		parseRecords() {
			if (this.hoverOnce) {
				if (this.selected.details) {
					this.details = JSON.parse(this.selected.details);
				}
				if (this.selected.diagnosis_treatment) {
					this.diagnosis_treatment = JSON.parse(this.selected.diagnosis_treatment);
				}
			}
			this.hoverOnce = false
		},
		stringifyDiagnosisAndTreatment() {
			if (this.stringify) {
				this.diagnosis_treatment = JSON.stringify(this.temp_diagnosis_treatment);
			}
			this.stringify = false
		},
		addRecommendation() {
			this.selected.recommendation =  this.recommendation
		},
		cancel() {
			this.hoverOnce = true
			this.stringify = true
			this.$emit('cancel')
		},
		updateStatus() {
			var self = this
			$.ajax({
				url: base_url + 'admin/reservation/updateStatus',
				data: {
					id: self.selected.id,
					status: self.status,
					email: self.selected.email,
					recommendation: self.selected.recommendation,
					reason: self.reason,
					service_name: self.selected.typeser,
					diagnosis_treatment: self.diagnosis_treatment,
				},
				method: 'post',
				dataType: 'json',
				success: function(response) {
					console.log(response)
					// window.location.href = base_url + 'admin/reservation'
				}
			})
		}
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
						<a class="btn btn-success" @click="print">
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
							
							<h4 v-if="type=='FINISHED'"> LATEST {{ type }} RESERVATIONS</h4>
            				<h4 v-else>{{ type }} RESERVATIONS</h4>
                		</center>
            		</div>
					<h2> Total Records : {{ reservations.length }}  </h2>
					<table class="table table-bordered">
						<thead>
							<tr>
								<th>FULLNAME</th>
								<th>DAY</th>
								<th>TIME</th>
								<th>TYPE OF SERVICE</th>
								<th>RECOMMENDATION</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="reservation in reservations">
								<td>{{ fullname(reservation) }} </td>
								<td> {{ reservation.daystart }} </td>
								<td> {{ reservation.timestart }} </td>
								<td> {{ reservation.typeser }} </td>
								<td> {{ reservation.recommendation }} </td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<label v-if="!reservations.length">No Data selected...</label>
		</div>
	`,
	props: {
		reservations: Array,
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
		fullname(patient) {
			return patient.fname + ' ' + patient.mi + '. ' + patient.lname
		},
		cancel() {
			this.$emit('cancel')
		},
		print() {
			$("#tableData").printThis();
		},
		fullName(reservation) {
			return reservation.fname + ' ' +  reservation.mi + '. ' + reservation.lname
		}
	}
})



var app = new Vue({
	el: '#reservationPage',
	data: {
		title: 'Dental Appointment',
		printStatus: 'PENDING',
		userType: '',
		reservations: [],
		printData: [],
		patients: [],
		history: [],
		pending: [],
		approved: [],
		finished: [],
		columns: [
    	{ label: 'FIRSTNAME', field: 'fname',  sortable: false },
    	{ label: 'MI', field: 'mi',  sortable: false },
    	{ label: 'LASTNAME', field: 'lname',  sortable: false },
    	{ label: 'DATE', field: 'daystart',  sortable: false },
    	{ label: 'TIME', field: 'timestart',  sortable: false },
    	{ label: 'TYPE OF SERVICE', field: 'typeser',  sortable: false },
    	{ label: 'RECOMMENDATION', field: 'recommendation',  sortable: false }
    ],
		selected: {},
		checkAll: false,
		manageForm: false,
		printForm: false,
		historyForm: false,
		historyTable: false,
		diagnosis: [],
		treatment: [],
		status: [],
		materials: []
	},

	mounted() {
		this.getFinishedReservations()
		this.messageBox()
		this.getUserType()
		this.getAllReservations()
		this.getDiagnosisTreatmentStatus()
	},
	methods: {
		tableChange(response) {
			app.diagnosis = response.diagnosis
			app.treatment = response.treatment
			app.status = response.status
		},
		getDiagnosisTreatmentStatus() {
			$.ajax({
				url: base_url + 'admin/reservation/getDiagnosisTreatmentStatus',
				dataType: 'json',
				success: function(response) {
					app.diagnosis = response.diagnosis
					app.treatment = response.treatment
					app.status = response.status
				}
			})
		},
		messageBox() {
			var message = $('#alert').val()
			if (message) {
				new PNotify({
					title: "Success",
					type: "success",
					text: message,
					nonblock: {nonblock: true},
					styling: 'bootstrap3',
				});
			}
		},
		getSelected(data) {
 			app.printData = data.selectedRows
	 	},
		getFinishedReservations() {
			$.ajax({
				url: base_url + 'admin/reservation/getFinishedReservations',
				dataType: 'json',
				success: function(reservations) {
					app.finished = reservations
				}
			})
		},
		getAllReservations() {
			$.ajax({
				url: base_url + 'admin/reservation/getAllReservations',
				dataType: 'json',
				success: function(reservations) {
					app.pending = []
					app.approved = []
					for(index in reservations) {
						if(reservations[index].r_status == 'pending') {
							app.pending.push(reservations[index])
						}
						else if(reservations[index].r_status == 'approved') {
							app.approved.push(reservations[index])
						}
						else {}
					}
				}
			})
		},
		getUserType() {
			$.ajax({
				url: base_url + 'admin/item/getUserType',
				dataType: 'json',
				success: function(userType) {
					app.userType = userType
				}
			})
		},
		checkAllPending() {
			app.printData = []
			if (! app.checkAll) {
				for(index in app.reservations) {
					if (app.reservations[index].r_status == 'pending') {
						app.printData.unshift(app.reservations[index])
					}
				}
			}
		},
		checkAllApproved() {
			app.printData = []
			if (! app.checkAll) {
				for(index in app.reservations) {
					if (app.reservations[index].r_status == 'approved') {
						app.printData.unshift(app.reservations[index])
					}
				}
			}
		},
		checkAllFinished() {
			app.printData = []
			if (! app.checkAll) {
				app.printData = app.patients
			}
		},
		truncateRecommedation(reservation) {
			if (reservation.recommendation) {
				var recommendation = reservation.recommendation
				return recommendation.slice(0, 20) + '....'
			}
			return 'N/A'
		},
		checkAllBox() {
			// alert('ok')
		},
		cancel() {
			app.historyTable = false
			app.historyForm = false
			app.manageForm = false
			app.printForm = false
			$('#mainData').show()
		},
		createImage() {
			if (app.selected.gender == 'Male') {
				app.selected.image = base_url + 'img/male.png'
			}
			else {
				app.selected.image = base_url + 'img/female.png'
			}

		},
		showPrintForm(reservation) {
			if(! app.printData.length) {
	 			app.notify('danger', 'No Records Selected')
	 		}
	 		else {
				$('#mainData').hide()
				app.printForm = true;
			}
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
		showHistoryForm() {
			if(app.printData.length != 1) {
	 			app.notify('danger', 'Please Select one(1) Record')
	 		}
	 		else {
				$.ajax({
					url: base_url + 'admin/reservation/getFinishedById',
					data: {id: app.printData[0].patient_id},
					method: 'post',
					dataType: 'json',
					success: function(reservations) {
						app.history = reservations
						app.selected = app.printData[0]
						$('#mainData').hide()
						// app.historyForm = true;
						app.historyTable = true;
					}
				})
			}
		},
		getMaterials() {
			$.ajax({
				url: base_url + 'admin/reservation/getMaterials',
				data: { service: app.printData[0].typeser },
				method: 'post',
				dataType: 'json',
				success: function(materials) {
					app.materials = materials
				}
			});
		},
		showManageForm() {
			if(app.printData.length != 1) {
	 			app.notify('danger', 'Please Select one(1) Record')
	 		}
	 		else {
 				app.getMaterials();
				app.selected = app.printData[0];
				app.createImage();
				$('#mainData').hide();
				app.manageForm = true;
			}
		},
		fullName(reservation) {
			return reservation.fname + ' ' +  reservation.mi + '. ' + reservation.lname
		}
	}

})
