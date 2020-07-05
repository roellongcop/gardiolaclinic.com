<?= $header ?>
<!-- page content -->
<div class="right_col" role="main" id="unitPage"> 
	<page-title :title="title"></page-title>
	<div class="clearfix"></div>
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">

			<!-- -------------------------MAIN DATA------------------------------- --> 

			<div class="x_panel" id="mainData"> 
				<div class="x_title">
					<menus @show-form="showForm"></menus>
				</div>
				<div class="x_content">   
					<my-table :columns="columns" :rows="rows" @selected="getSelected"></my-table><br><br><br><br>
				</div>
			</div>
			<!-- -------------------------END MAIN DATA------------------------------- -->


			<!-- ==========================FORMS================================ -->
			<add-form v-if="addForm" @cancel="cancel" @save="save"></add-form>
			<update-form v-if="updateForm" :units="selected" @cancel="cancel" @save="save"></update-form>
			<delete-form v-if="deleteForm" :units="selected" @cancel="cancel" @save="save"></delete-form>
			<print-form v-if="printForm" :units="selected" @cancel="cancel"></print-form>

			
		</div> 
	</div> 
</div> 
<?= $footer ?> 
