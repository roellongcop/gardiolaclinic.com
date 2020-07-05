s<?=$header?>
<div id="el-reservation">
	<div class="page-title page-title-about bg-pattern" data-bgcolor="5295BD">
	    <div class="page-title-overlay">
	        <div class="container">
	            <h1 class="bold600 color-child-6"><i class="fa fa-pencil"></i> RESERVATIONS</h1>
	        </div>
	    </div>
	</div>


	<div class="container"> <br><br><br>
		<ul class="nav nav-tabs">
			<li class="active">
				<a data-toggle="tab" href="#tab_per">Reservations</a>
			</li>
			<li><a data-toggle="tab" href="#tab_sec">History</a></li>
			<!-- <li><a data-toggle="tab" href="#teeth-chart">Teeth Chart</a></li> -->
		</ul>
		<div class="tab-content">
			<div id="tab_per" class="tab-pane fade in active">
				<reservations :reservations="reservations"></reservations>
			</div>

			<div id="tab_sec" class="tab-pane fade">
				<div class="container"><br>
					<h1 class="bold600 color-child-6">My History</h1>
					<table class="table table-bordered">
						<thead>
							<tr>
								<th>SERVICE ACQUIRED</th>
								<th>DATE</th>
								<th>TIME</th>
								<th>DETAILS</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="reservation in reservations" v-if="reservation.r_status=='finished'">
								<td>{{ reservation.typeser }}</td>
								<td>{{ reservation.daystart }}</td>
								<td>{{ reservation.timestart }}</td>
								<td width="100">
									<button  @click="findItems(reservation)"
										class="btn btn-primary btn-sm">
										<i class="fa fa-info-circle"></i>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<!-- <div id="teeth-chart" class="tab-pane fade">
				<div class="col-md-4"></div>
				<div class="col-md-4">
					<img src="<?php echo base_url('img/teeth.png') ?>" alt="" class="img-responsive">
				</div>
				<div class="col-md-4"></div>
			</div> -->
		</div>
	</div>

		<div style="margin: 100px;" class="panel panel-default" v-if="details">
			<div class="panel-heading">
				<p class="lead"> <b>Dental Details</b> </p>
				<div class="clearfix"></div>
			</div>
			<div class="panel-body">
				<div id="tableData">
					<div class="row">
						<div class="col-md-12 col-sm-12 col-xs-12"><br>
							<div class="row">
		            <center>
		            	<h3>
		                <img style="float:center;" width="50" height="50" src="<?php echo base_url('assets/assets/images/logo.svg') ?>" alt="" />
										{{ clinicName }}
									</h3>
									<date></date>
									<p class="lead"><b>DENTAL HISTORY</b></p>
		                		</center>
		            		</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 col-sm-12 col-xs-12"><br></div>
					</div>
					<div class="row">
						<div class="col-md-4 col-sm-4 col-xs-4">
							<label>First Name </label>
							<p class="underline">
								{{ patient.fname }}
							</p>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-4">
							<label>Middle Initial </label>
							<p class="underline">
								{{ patient.mi }}
							</p>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-4">
							<label>Last Name </label>
							<p class="underline">
								{{ patient.lname }}
							</p>
						</div>
					</div>


					<div class="row"> </div>


					<div class="row">
						<div class="form-group col-md-8 col-sm-8 col-xs-8">
							<label>Address </label>
							<p class="underline">{{ patient.address }}</p>
						</div>
						<div class="form-group col-md-4 col-sm-4 col-xs-4">
							<label>Email </label>
							<p class="underline">{{ patient.email }}</p>
						</div>
					</div>


					<div class="row"> </div>


					<div class="row">
						<div class="col-md-4 col-sm-4 col-xs-4">
							<label>Mobile Number </label>
							<p class="underline">
								{{ patient.cp_num }}
							</p>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-4">
							<label>Sex </label>
							<p class="underline">
								{{ patient.gender }}
							</p>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-4">
							<label>Patient ID </label>
							<p class="underline">
								{{ patient.id }}
							</p>
						</div>
					</div>


					<div class="row"> </div>

					<div class="row">
						<div class="col-md-12 col-sm-12 col-xs-12">
							<p class="lead text-center"><b>DENTAL ASSESSMENT</b></p>
						</div>
					</div>



					<div class="row"> </div>


					<div class="row">
						<div class="col-md-4 col-sm-4 col-xs-4">
							<label>Service </label>
							<p class="underline">
								{{ selected.typeser }}
							</p>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-4">
							<label>Date & Time </label>
							<p class="underline">
								{{ selected.daystart + ' ' + selected.timestart }}
							</p>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-4">
							<label>Status </label>
							<p class="underline">
								{{ selected.r_status }}
							</p>
						</div>
					</div>

					<div class="row"> </div>



					<div class="row">
						<div class="col-md-4 col-sm-4 col-xs-4">
							<label>Chief Complaint:</label>
							<p class="underline">
								<span v-for="(complaint, index) in reservationDetails.complaints">
									{{ complaint }}<span v-if="index!=reservationDetails.complaints.length-1">, </span>
								</span>
								<span v-show="!reservationDetails.complaints">
									N/A
								</span>
							</p>
						</div>

						<div class="col-md-4 col-sm-4 col-xs-4">
							<label>Medical History:</label>
							<p class="underline">
								<span v-for="(medical, index) in reservationDetails.medical_history">
									{{ medical }}<span v-if="index!=reservationDetails.medical_history.length-1">, </span>
								</span>
								<span v-show="!reservationDetails.medical_history">
									N/A
								</span>
							</p>
						</div>

						<div class="col-md-4 col-sm-4 col-xs-4">
							<label>Dental History: </label>
							<p class="underline">
								<span v-for="(dental, index) in reservationDetails.dental_history">
									{{ dental }}<span v-if="index!=reservationDetails.dental_history.length-1">, </span>
								</span>
								<span v-show="!reservationDetails.dental_history">
									N/A
								</span>
							</p>
						</div>
					</div>


					<div class="row"> </div>


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
								<tbody>
									<!-- ============DIAGNOSIS============== -->
									<tr v-show="!parseData(selected.diagnosis_treatment).length">
										<td colspan="5">	N/A.</td>
									</tr>
									<tr v-for="(dt, index) in parseData(selected.diagnosis_treatment)"
										v-show="parseData(selected.diagnosis_treatment).length">

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
									<tr v-show="!items.length">
										<td colspan="3">	N/A.</td>
									</tr>
									<tr v-for="material in items" v-show="items.length">
										<td> {{ material.name }} </td>
										<td> {{ material.unit_name }} </td>
										<td> {{ material.qty }} </td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="row">
						<div class="form-group col-md-12 col-sm-12 col-xs-12">
							<label>Recommendation: </label>
							<div class="underline">
								<pre style="font-family:Arial"> <p style="line-height: 1.8">{{ (selected.recommendation)? selected.recommendation: 'N/A' }}</p> </pre>
							</div>
						</div>
					</div>

					<div class="row"> </div>
				</div>

				<div class="row"><div class="col-md-12"><hr></div></div>

				<div class="row" v-show="showImages">
					<div class="col-md-6 text-center"  v-if="selected.img_before">
						<center><label>BEFORE: </label>
						<img :src="path(selected.img_before)"  class="img-responsive thumbnail" ></center>
					</div>
					<div class="col-md-6 text-center"  v-if="selected.img_after">
						<center><label>AFTER: </label>
						<img :src="path(selected.img_after)" class="img-responsive thumbnail" ></center>
					</div>
				</div>


				<button @click="print" class="btn btn-success btn-lg pull-right">
					<i class="fa fa-print"></i> Print
				</button>
				<button @click="details=false" class="btn btn-danger btn-lg pull-right">
					<i class="fa fa-close"></i> Close
				</button>
				<div class="col-md-12"><br><hr></div> <br><br><br><hr>
			</div>
		</div>
</div>



<?=$footer?>
