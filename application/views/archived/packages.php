<?= $header ?>
<!-- page content -->
<div class="right_col" role="main" id="archived-packages"> 
	<h3><i class="fa fa-pencil"></i> {{ title }} </h3>   
	<div class="clearfix"></div>
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">

			<!-- -------------------------MAIN DATA------------------------------- --> 

			<div class="x_panel" id="mainData">
				<div class="x_title">
					<button class="btn btn-primary" @click="restore">
						<i class="fa fa-database"></i>
						Restore Selected
					</button>
				</div>
				<div class="x_content">   
					<my-table :columns="columns" :rows="rows" @selected="getSelected"></my-table>
				</div>
			</div>
			<!-- -------------------------END MAIN DATA------------------------------- -->

		</div> 
	</div> 
</div> 
<?= $footer ?> 
