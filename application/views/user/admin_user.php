<?= $header ?>
<!-- page content -->
<div class="right_col" role="main" id="unitPage">
	<h3><i class="fa fa-pencil"></i> {{ title }} </h3>
	<div class="clearfix"></div>
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">

			<!-- ============MAIN DATA============ -->

			<div class="x_panel" id="mainData">
				<div class="x_title">
					<div class="btn-group pull-left">
						<button class="btn btn-primary" @click="showAddForm">
							<i class="fa fa-plus-square"></i> Add User
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
					<my-table :columns="columns" :rows="users" @selected="getSelected"></my-table>
				</div>
			</div>
			<!-- ============END MAIN DATA============ -->



			<add-form v-show="addForm" @cancel="cancel"  @save="save"></add-form>

			<update-form v-show="updateForm" :users="selected"
				@cancel="cancel" @save="save">
			</update-form>

			<delete-form v-show="deleteForm" :users="selected"
				@cancel="cancel" @save="save">
			</delete-form>

			<print-form v-show="printForm" :users="selected"
				@cancel="cancel">
			</print-form>


		</div>
	</div>
</div>
<?= $footer ?>
