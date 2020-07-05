<?= $header ?>
<!-- page content -->
<div class="right_col" role="main" id="dashboardPage">
	<div class="clearfix"></div>
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">
			<!-- ===========BOUNDARY============ -->
			<totals :totals="totals"></totals>
			<!-- =========STOCK CHART========== -->

			<div class="col-md-5">
				<div class="x_panel">
					<div class="x_title">
						<h2>Inventory Stocks</h2>
						<div class="clearfix"></div>
					</div>
					<div class="x_content" style="height: 295px;">
						<canvas id="stockChart"></canvas>
							<div class="row"><hr></div>
						<div class="col-md-3">
							<div id="empty"></div>
							<label class="pull-left"> Empty</label>
						</div>
						<div class="col-md-3">
							<div id="full"></div>
							<label class="pull-left"> Full</label>
						</div>
						<div class="col-md-3">
							<div id="critical"></div>
							<label class="pull-left"> Critical</label>
						</div>
						<div class="col-md-3">
							<div id="safe"></div>
							<label class="pull-left"> Safe</label>
						</div>
					</div>
				</div>
			</div>
     <!-- ==========END STOCK CHART========== -->

			<!-- ==========SALES CHART========== -->
			<div class="col-md-7">
				<div class="x_panel">
					<div class="x_title">
						<h2><i class="fa fa-calendar"></i>
							All Reservations As of year {{ year }}
						</h2>
						<div class="clearfix"></div>
					</div>
					<div id="canvas" class="x_content"></div>
				</div>
			</div>
 
			<!-- ==========END SALES CHART========== -->
     		<!-- ==========BOUNDARY========== -->
		</div>
	</div>
</div>
<?= $footer ?>
