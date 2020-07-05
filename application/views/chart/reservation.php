<?= $header ?>
<!-- page content -->
<div class="right_col" role="main" id="chartPage"> 
	<h3 class="pull-left h"><i class="fa fa-pencil"></i> Reservation Graph </h3> 
     <select v-model="selectedYear" class="form-control input-lg pull-right h" id="select-year"
          @change="createChart">
          <option v-for="x in year" v-if="x > 2015"> {{ x }} </option>
     </select>
	<div class="clearfix"></div>
	<div class="row">
		<div class="col-md-12 col-sm-12 col-xs-12">
               <div class="h"><br><br></div>
			<!-- -------------------------BOUNDARY------------------------------- -->
               <!-- ----------INVENTORY CHART------- -->
               <print-header id="printHeader"></print-header>
               <div class="col-md-4">
                    <div class="x_panel">
                         <div class="x_title">
                              <h2><i class="fa fa-book h"></i> Summary 
                                   <span v-if="labels.length" class="badge bg-green h" 
                                        style="color: white">{{ labels.length }}
                                   </span>
                              </h2>
                              <div class="clearfix"></div>
                         </div>
                         <div class="x_content"> 
                              <div class="col-md-9"> 
                                   <label>Services: </label>
                                   <p v-for="label in labels"> {{ label }} </p>
                              </div>
                              <div class="col-md-3"> 
                                   <label>Totals: </label>
                                   <p v-for="total in totals"> {{ total }} </p>
                              </div>
                         </div>
                    </div>
               </div>
               <div class="col-md-8">
               	<div class="x_panel">
               		<div class="x_title"> 
                              <button class="btn btn-success pull-right h" @click="print">
                                   <i class="fa fa-print"></i>
                                   Print
                              </button>
                              <h3>As of {{ selectedYear }} </h3>
               			<div class="clearfix"></div>
               		</div>
               		<div class="x_content" id="canvas"> </div>
               	</div>
               </div>
               <!-- ----------END INVENTORY CHART------- -->
			<!-- -------------------------BOUNDARY------------------------------- -->
		</div> 
	</div> 
</div> 
<?= $footer ?> 
