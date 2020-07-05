<?= $header ?>
<!-- page content -->
<div class="right_col" role="main" id="reservationPage">
    <input type="hidden" name="" id="alert" value="<?= $this->session->flashdata('success') ?>">
	<h3><i class="fa fa-pencil"></i> {{ title }} </h3>
	<div class="clearfix"></div>
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">

			<!-- -------------------------MAIN DATA------------------------------- -->

			<div class="x_panel" id="mainData">
				<div class="x_title">
					<div class="btn-group">
						<button class="btn btn-success pull-left" @click="showPrintForm">
							<i class="fa fa-print"></i> Print
						</button>
						<button v-if="printStatus!='FINISHED'" class="btn btn-primary" @click="showManageForm">
							<i class="fa fa-book"></i> Details
						</button>
						<button v-if="printStatus=='FINISHED'" class="btn btn-primary"
							@click="showHistoryForm">
							<i class="fa fa-book"></i> History
						</button>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="x_content">
					<div class="" role="tabpanel" data-example-id="togglable-tabs">
						<ul id="myTab" class="nav nav-tabs bar_tabs" role="tablist">
							<li role="presentation" class="active" @click="printData=[];printStatus='PENDING'">
								<a href="#tab_content1" id="home-tab" role="tab"
									data-toggle="tab" aria-expanded="true">Pending</a>
							</li>
							<li role="presentation" class="" @click="printData=[];printStatus='APPROVED'">
								<a href="#tab_content2" role="tab" id="profile-tab"
									data-toggle="tab" aria-expanded="false">Approved</a>
							</li>
							<li role="presentation" class="" @click="printData=[];printStatus='FINISHED',getFinishedReservations">
								<a href="#tab_content3" role="tab" id="profile-tab"
									data-toggle="tab" aria-expanded="false">Finished</a>
							</li>
						</ul>
						<div id="myTabContent" class="tab-content">
							<div role="tabpanel" class="tab-pane fade active in" id="tab_content1" aria-labelledby="home-tab">
								<my-table :columns="columns" :rows="pending" @selected="getSelected"> </my-table>
							</div>
							<div role="tabpanel" class="tab-pane fade" id="tab_content2" aria-labelledby="profile-tab">
								<my-table :columns="columns" :rows="approved" @selected="getSelected"> </my-table>
							</div>
							<div role="tabpanel" class="tab-pane fade" id="tab_content3" aria-labelledby="profile-tab">
								<my-table :columns="columns" :rows="finished" @selected="getSelected"> </my-table>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- -------------------------END MAIN DATA------------------------------- -->

 			<print-form v-show="printForm" :reservations="printData" :type="printStatus"
				@cancel="cancel"></print-form>

 			<manage-form :materials="materials" v-show="manageForm" @table-change="tableChange" :diagnosis="diagnosis"
        :treatment="treatment" :teeth_status="status"
 				:user="userType" :selected="selected" @cancel="cancel">
 			</manage-form>


			<history-form v-show="historyForm" :materials="materials" :records="history"
        :selected="selected" @cancel="cancel">
 			</history-form>

 			<history-table v-show="historyTable" :records="history":selected="selected" @cancel="cancel">
 			</history-table>
		</div>
	</div>
</div>
<?= $footer ?>
