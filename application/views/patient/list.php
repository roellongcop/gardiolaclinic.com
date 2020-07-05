<?= $header ?>
<!-- page content -->
<div class="right_col" role="main" id="patientPage">
	<h3><i class="fa fa-pencil"></i> {{ title }} </h3>
	<div class="clearfix"></div>
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">

			<!-- -------------------------MAIN DATA------------------------------- -->

			<div class="x_panel" id="mainData">
				<div class="x_title">
					<div class="btn-group">
						<button class="btn btn-primary" @click="showAddForm">
							<i class="fa fa-plus-square"></i> Add Patient
						</button>
						<button class="btn btn-info"
							@click="showHistoryForm">
							<i class="fa fa-book"></i> Records
						</button>
						<button class="btn btn-success" @click="showPrintForm">
							<i class="fa fa-print"></i> Print
						</button>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="x_content">
					<div class="" role="tabpanel" data-example-id="togglable-tabs">
  						<ul id="myTab" class="nav nav-tabs bar_tabs" role="tablist">
    						<li role="presentation" class="active" @click="selected=[]">
    							<a href="#tab_content1" id="home-tab" role="tab" data-toggle="tab"
    								aria-expanded="true" >
    								Verified
    							</a>
    						</li>
   							<li role="presentation" class="" @click="selected=[]">
   								<a href="#tab_content2" role="tab" id="newPatient-tab" data-toggle="tab"
   									aria-expanded="false">
   									Not Verified
   								</a>
    						</li>
  						</ul>
  						<div id="myTabContent" class="tab-content">
    						<div role="tabpanel" class="tab-pane fade active in" id="tab_content1"
    							aria-labelledby="home-tab"><br>

								<my-table :columns="columns" :rows="verifieds" @selected="getSelected">
								</my-table>

    						</div>
    						<div role="tabpanel" class="tab-pane fade" id="tab_content2"
    							aria-labelledby="newPatient-tab"><br>
  								<my-table :columns="columns" :rows="notVerifieds" @selected="getSelected">
								</my-table>
    						</div>
  						</div>
					</div>

				</div>
			</div>
			<!-- -------------------------END MAIN DATA------------------------------- -->


 			<!-- =============FORMS======================= -->
 			<print-form :patients="selected" :type="type"
				v-if="printForm" @cancel="cancel"></print-form>

			<history-form v-show="historyForm" :materials="materials" :records="reservations" :selected="patient" @cancel="cancel">
 			</history-form>

 			<patient-form v-show="addForm" :services="services" @cancel="cancel"></patient-form>

		</div>
	</div>
</div>
<?= $footer ?>
