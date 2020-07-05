<?= $header ?>
<!-- page content -->
<div class="right_col" role="main" id="packagePage"> 
	<h3><i class="fa fa-pencil"></i> {{ title }} </h3>   
	<div class="clearfix"></div>
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">

			<!-- -------------------------MAIN DATA------------------------------- --> 
			<div class="x_panel" id="mainData"> 
				<div class="x_title">
					<div class="btn-group pull-left">
						<button class="btn btn-primary" @click="showAddForm"> 
							<i class="fa fa-plus-square"></i> Add Package
						</button> 
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="x_content">    
					<div v-for="package in packages" class="col-md-4">
						<div class="container-fluid panel panel-default">
							<div class="x_title"><br>
								<div class="btn-group pull-right">
									<button class="btn btn-success btn-sm" 
										@click="showUpdateForm(package)">
										<i class="fa fa-edit"></i>
									</button>
									<button class="btn btn-danger btn-sm" 
										@click="showDeleteForm(package)">
										<i class="fa fa-trash"></i>
									</button>
								</div>
								<h2 class="package_title">{{ package.name }}</h2>
								<div class="clearfix"></div>
							</div>
							<div class="x_content">
								
								<label>{{ package.service_name }}</label>
								<ul class="list-group">
									<li v-for="item in makeJSON(package.items)" class="list-group-item"> 
										{{ item.qty + ' ' +  item.unit_name + ' of ' + item.name}}
									</li> 
								</ul>
							</div>
						</div>
					</div> 
				</div>
			</div>
			<!-- -------------------------END MAIN DATA------------------------------- -->
			<add-form 
				id="addForm" 
				:items="items" 
				:services="services" 
				@cancel="cancel"
				@save="save">
			</add-form>
			<update-form 
				id="updateForm" 
				:package="selected"
				:items="items" 
				:pickeditems="pickedItems"
				:services="services" 
				@cancel="cancel"
				@save="save">
			</update-form>
			<delete-form 
				id="deleteForm" 
				:package="selected"
				@cancel="cancel"
				@save="save">
			</delete-form>

			
		</div> 
	</div> 
</div> 
<?= $footer ?> 
