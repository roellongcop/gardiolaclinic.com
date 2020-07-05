Vue.component('add-form', {
	template: ` 
		<div class="x_panel">
			<div class="x_title">
				<h4 class="pull-right">Total Entity: ({{ suppliers.length }})</h4>
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a> 
				<button @click="appendInput" class="btn btn-success pull-left">
					<i class="fa fa-plus-square"></i> Entity
				</button> 
				<div class="clearfix"></div>
			</div>
			<div class="x_content"> 
				<div v-if="suppliers.length" v-for="(supplier, index) in suppliers" 
					class="col-md-4">
					<div class="x_panel">
						<div class="form-group">
							<label> Entity No: {{ suppliers.length - index }} </label>
							<a @click="spliceSupplier(index)" 
								class="btn btn-danger pull-right btn-sm">
								<i class="fa fa-minus-square"></i>
							</a>
						</div>
						<div class="form-group">
							<label>Name:</label>
							<input type="text" class="form-control" 
								v-model="supplier.name" required>
						</div>
						<div class="form-group">
							<label>Telephone:</label>
							<input class="form-control" v-model="supplier.telephone" required> 
						</div>
						<div class="form-group">
							<label>Address:</label>
							<textarea class="form-control" v-model="supplier.address" 
								style="height: 95px" required> 
							</textarea>
						</div>
					</div>
				</div>

				<div class="col-md-12"> 
					<button @click="insertSupplier" v-if="suppliers.length" 
						class="btn btn-primary btn-lg">
						<span class="fa fa-check-circle"></span> Save
					</button>
				</div> 
			</div>
		</div>
	`, 
	data() {
		return {
			suppliers : [{name: '', telephone: '', address: ''}], 
		}
	},
	methods: {
		cancel() {
			this.$emit('cancel')
		},
		spliceSupplier(index) {
			this.suppliers.splice(index, 1)
		},
		appendInput() {
			var newInput = {name: '', telephone: '', address: ''}
			this.suppliers.unshift(newInput);
		},
		insertSupplier() {
			var self = this
			$.ajax({
				url : base_url + 'admin/supplier/insert',
				data : { suppliers : this.suppliers },
				method : 'post',
				success: function(response){
					self.$emit('save', 'success', 'Successfully Added')
				}
			}); 
		},  
	}
})

Vue.component('update-form', {
	template: ` 
		<div class="x_panel">
			<div class="x_title">
				<h4 class="pull-right">Total Entity: ({{ suppliers.length }})</h4> 
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a> 
				<div class="clearfix"></div>
			</div>
			<div class="x_content"> 
				<div v-if="suppliers.length" v-for="supplier in suppliers" class="col-md-4">
					<div class="x_panel">
						<label class="form-group">ID No: {{ supplier.id }}</label>
						<div class="form-group">
							<label>Name:</label>
							<input type="text" class="form-control" 
								v-model="supplier.name" required>
						</div> 
						<div class="form-group">
							<label>Telephone:</label>
							<input class="form-control" v-model="supplier.telephone" required>
						</div>
						<div class="form-group">
							<label>Address:</label>
							<textarea class="form-control" v-model="supplier.address" 
								style="height: 95px" required> 
							</textarea>
						</div>
					</div> 
				</div>
				<label v-if="!suppliers.length">No Data selected...</label>
				<div class="col-md-12"> 
					<button @click="updateSupplier" v-if="suppliers.length" 
						class="btn btn-success btn-lg">
						<span class="fa fa-edit"></span> Update
					</button>
				</div> 
			</div>
		</div>

	`,
	props: {
		suppliers: Array
	}, 
	methods: {  
		cancel() {
			this.$emit('cancel')
		},
		updateSupplier() {
			var self = this
			$.ajax({
				url : base_url + 'admin/supplier/update',
				data : {suppliers : this.suppliers},
				method : 'POST',
				success: function(response){ 
					self.$emit('save', 'success', 'Successfully Updated')
				}
			}); 
		},
	}
})

Vue.component('delete-form', {
	template: `
		<div class="x_panel">
			<div class="x_title">
				<h4 class="pull-right">Total Entity: ({{ suppliers.length }})</h4> 
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a> 
				<div class="clearfix"></div>
			</div>
			<div class="x_content">
				<div v-if="suppliers.length">
					<h5>Are you sure you want to Delete : </h5>
					<h2>
						<ul>
							<li v-for="supplier in suppliers">
								{{ supplier.name }}
							</li>
						</ul>
					</h2>
				</div>
				<label v-if="!suppliers.length">No Data selected...</label>

				<div class="col-md-12"> 
					<a v-if="suppliers.length" class="btn btn-danger btn-lg" 
						@click="deleteSupplier">
						<span class="fa fa-trash"></span> Delete
					</a>
				</div>
			</div>
		</div>
	`,

	props: {
		suppliers: Array
	}, 
	methods: {  
		cancel() {
			this.$emit('cancel')
		},
		deleteSupplier() { 
			var self = this
			$.ajax({
				url : base_url + 'admin/supplier/delete',
				data : {suppliers : this.suppliers},
				method : 'post',
				success: function(response){ 
					self.$emit('save', 'success', 'Successfully Deleted')
				}
			}); 
		},
	}
})


Vue.component('print-form', {
	template: ` 
		<div class="x_panel"> 
			<div class="x_title">
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a>  
				<div class="clearfix"></div>
			</div> 
			<div class="x_panel">
        		<div class="row">
					<div class="pull-right">
						<a href="#itemPage" class="btn btn-default" @click="cancel">
							<span class="fa fa-minus-square"></span> Cancel
						</a> 
						<a class="btn btn-primary" @click="printItems">
							<span class="fa fa-print"></span> Print
						</a>
					</div>
				</div>
				<div id="tableData">
            		<div class="row">
                		<center>
            				<h3>
                				<img style="float:center;" width="50" height="50" :src="src"> 
								{{ clinicName }}
							</h3>
							<date></date>
							
            				<h4>LIST OF SUPPLIERS</h4>
                		</center>
            		</div>
					<h2> Total Records : {{ suppliers.length }}  </h2> 
					<table class="table table-bordered">
						<thead> 
							<tr> 
								<th>NAME</th> 
								<th>TELEPHONE</th> 
								<th>ADDRESS</th> 
							</tr> 
						</thead>
						<tbody>
							<tr v-for="supplier in suppliers">
								<td>{{ supplier.name }}</td>   
								<td>{{ supplier.telephone }}</td>   
								<td>{{ supplier.address }}</td>   
							</tr>
						</tbody> 
					</table> 
				</div> 
			</div> 

			<label v-if="!suppliers.length">No Data selected...</label>
		</div>
	`, 
	props: {
		suppliers: Array
	},   
	data() {
		return {
			src: base_url + 'assets/assets/images/logo.svg'
		}
	},
	computed: {
		clinicName() {
			return clinic_name
		}
	},
	methods: {  
		cancel() {
			this.$emit('cancel')
		},
		printItems() {  
			$("#tableData").printThis();
		}, 
	}
})





var app = new Vue({
	el: '#supplierPage',
	data:{
		addForm: false,
		updateForm: false,
		deleteForm: false,
		printForm: false,
		checkAll : false,
		suppliers : [],
		selected : [],
		active : [], 
		rows : [], 
		columns: [
        	{ label: 'NAME', field: 'name',  sortable: false },
        	{ label: 'TELEPHONE', field: 'telephone',  sortable: false,  type: 'number'},
        	{ label: 'ADDRESS', field: 'address',  sortable: false }
        ],
		title: 'Supplier Management'
	},
 	mounted() {
 		this.getSuppliers()
 	},
	methods: {  
		notify(type, message) {
			new PNotify({
				title: type.toUpperCase(),
				type: type,
				text: message,
				nonblock: {nonblock: true},
				styling: 'bootstrap3', 
			});
		},
		getSuppliers() {
	 		$.ajax({
	 			url: base_url + 'admin/supplier/get',
	 			dataType: 'json',
	 			success: function(suppliers) {
	 				app.rows = suppliers
	 			}
	 		})
	 	}, 
		getSelected(data) { 
 			app.selected = data.selectedRows 
	 	}, 
	 	save(type, message) {
	 		app.notify(type, message)
	 		app.getSuppliers()
			app.selected = []
			app.title = 'Supplier Management'
			$('#mainData').show()
			app.addForm = false
			app.updateForm = false
			app.printForm = false
			app.deleteForm = false
		}, 
		cancel() {
			app.title = 'Supplier Management'
			$('#mainData').show()
			app.addForm = false
			app.updateForm = false
			app.printForm = false
			app.deleteForm = false
		},  
		showPrintForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Suppliers Selected')
	 		}
	 		else {
				app.title = 'Print Suppliers'
				$('#mainData').hide() 
				app.printForm = true
			}
		},
		showAddForm() {
			app.title = 'Add Supplier'
			$('#mainData').hide() 
			app.addForm = true
		},
		showUpdateForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Suppliers Selected')
	 		}
	 		else {
				app.title = 'Update Supplier'
				$('#mainData').hide() 
				app.updateForm = true
			}
		},
		showDeleteForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Suppliers Selected')
	 		}
	 		else {
				app.title = 'Delete Supplier'
				$('#mainData').hide() 
				app.deleteForm = true
			}
		}, 
		checkAllBox() {
			app.selected = []
			if (! app.checkAll) {
				app.selected = app.suppliers
			} 
		},   
	}
}); 