<?= $header ?>
<!-- page content -->
<div class="right_col" role="main" id="itemPage"> 
	<h3><i class="fa fa-pencil"></i> {{ title }} </h3> 
	<div class="clearfix"></div>
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">
			<!--  -----------------------MAIN DATA--------------------- -->
			<div class="x_panel" id="mainData">
				<div class="x_title" v-if="userType=='dentalaide'">
					<div class="btn-group pull-left">
						<button class="btn btn-primary" @click="showAddForm"> 
							<i class="fa fa-plus-square"></i> Add Item
						</button>
						<button class="btn btn-success" @click="showUpdateForm">
							<i class="fa fa-edit"></i>
						</button>
						<button class="btn btn-danger" @click="showDeleteForm">
							<i class="fa fa-trash"></i>
						</button>
						<button class="btn btn-dark" @click="showPrintForm">
							<i class="fa fa-print"></i>
						</button>
					</div>  
					<div class="clearfix"></div>
				</div>
				<div class="x_content">  
					<div class="" role="tabpanel" data-example-id="togglable-tabs">
						<ul id="myTab" class="nav nav-tabs bar_tabs" role="tablist">
							<li role="presentation" class="active" @click="selected=[]">
								<a href="#tab_content1" id="home-tab" role="tab" 
									data-toggle="tab" aria-expanded="true">Consumable</a>
							</li>
							<li role="presentation" class="" @click="selected=[]">
								<a href="#tab_content2" role="tab" id="profile-tab" 
									data-toggle="tab" aria-expanded="false">Not Consumable</a>
							</li>
						</ul>  
						<div id="myTabContent" class="tab-content">
							<div role="tabpanel" class="tab-pane fade active in" id="tab_content1" aria-labelledby="home-tab">
								<my-table :columns="columns" :rows="consumables" @selected="getSelected"></my-table>
							</div>
							<div role="tabpanel" class="tab-pane fade" id="tab_content2" aria-labelledby="profile-tab">
								<my-table :columns="columns" :rows="notConsumables" @selected="getSelected"></my-table>
							</div>
						</div>
          </div>
				</div>
			</div>
 

			<add-form 
				v-if="addForm" @cancel="cancel" :units="units" :suppliers="suppliers" 
				:categories="categories" @save="save"> 
			</add-form>

			<update-form 
				v-if="updateForm" @cancel="cancel" :units="units" :suppliers="suppliers" 
				:categories="categories" :items="selected" @save="save"> 
			</update-form>

			<delete-form 
				v-if="deleteForm" @cancel="cancel" :items="selected" @save="save">
			</delete-form>

			<print-form 
				v-if="printForm" @cancel="cancel" :items="selected" :heads="heads" :logo="logo"
				:type="itemType">
			</print-form>
			<!-- -------------------------END MAIN DATA------------------------------- -->
		</div>
	</div> 
</div> 
<?= $footer ?> 
