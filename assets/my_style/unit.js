 
Vue.component('page-title', {
	template: `
		<h3><i class="fa fa-pencil"></i> {{ title }} </h3>  
	`,
	props: {
		title: String
	}
	 
});


Vue.component('menus', {
	template: `
		<div>
			<div class="btn-group pull-left">
				<button class="btn btn-primary" @click="showForm('add')"> 
					<i class="fa fa-plus-square"></i> Add Unit
				</button>
				<button class="btn btn-success" @click="showForm('update')">
					<i class="fa fa-edit"></i>
				</button>
				<button class="btn btn-danger" @click="showForm('delete')">
					<i class="fa fa-trash"></i>
				</button>
				<button class="btn btn-dark" @click="showForm('print')">
					<i class="fa fa-print"></i>
				</button>
			</div>
			<div class="clearfix"></div>
		</div>
	`,
	methods: {
		showForm(form) {
			this.$emit('show-form', form)
		}
	}
})

Vue.component('add-form', {
	template: `
		<div class="x_panel">
			<div class="x_title">
				<h4 class="pull-right">Total Entity: ({{ units.length }})</h4> 
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a> 
				<button @click="appendInput" class="btn btn-success pull-left">
					<i class="fa fa-plus-square"></i> Entity
				</button> 
				<div class="clearfix"></div>
			</div>
			<div class="x_content"> 
					<div v-if="units.length" v-for="(unit, index) in units" class="col-md-4">
						<div class="x_panel">
							<label> Entity No: {{ units.length - index }} </label>
							<a @click="spliceUnit(index)" class="btn btn-danger pull-right btn-sm">
								<i class="fa fa-minus-square"></i>
							</a>
							<div class="form-group">
								<label>Name:  </label><span v-if="! unit.name"> (Required)</span>
								<input type="text" class="form-control" v-model="unit.name" required>
							</div> 
						</div>
					</div> 
					<div class="col-md-12"> 
						<button @click="insertUnit" v-if="units.length" class="btn btn-primary btn-lg">
							<span class="fa fa-check-circle"></span> Save
						</button>
					</div> 
			</div>
		</div>
	`,
	data() {
		return {
			units: [{name: ''}]
		}
	},
	methods: { 
		cancel() {
			this.$emit('cancel')
		},
		spliceUnit(index) {
			this.units.splice(index, 1)
		},
		appendInput() {
			var newInput = {name: ''}
			this.units.unshift(newInput);
		},
		insertUnit() {
			var self = this;
			$.ajax({
				url : base_url + 'admin/unit/insert',
				data : {units : this.units},
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
				<h4 class="pull-right">Total Entity: ({{ units.length }})</h4> 
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a>  
				<div class="clearfix"></div>
			</div>
			<div class="x_content"> 
				<div v-if="units.length" v-for="unit in units" class="col-md-4">
					<div class="x_panel">
						<label>ID No: {{ unit.id }}</label>
						<div class="form-group">
							<label>Name:</label>
							<input type="text" class="form-control" 
								v-model="unit.name" required>
						</div>
					</div> 
				</div>
				<label v-if="!units.length">No Data selected...</label>

				<div class="col-md-12"> 
					<button @click="updateUnit" v-if="units.length" class="btn btn-success btn-lg">
						<span class="fa fa-edit"></span> Update
					</button>
				</div> 
			</div>
		</div>
	`,
	props: {
		units: Array
	}, 
	methods: {   
		cancel() {
			this.$emit('cancel')
		},
		updateUnit() { 
			var self = this
			$.ajax({
				url : base_url + 'admin/unit/update',
				data : {units : this.units},
				method : 'post',
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
				<h4 class="pull-right">Total Entity: ({{ units.length }})</h4>
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a>   
				<div class="clearfix"></div>
			</div>
			<div class="x_content">
		 		<div v-if="units.length">
					<h5>Are you sure you want to Delete : </h5>
					<h2>
						<ul>
							<li v-for="unit in units">
								{{ unit.name }}
							</li>
						</ul>
					</h2>
				</div>
				<label v-if="!units.length">No Data selected...</label>

				<div class="col-md-12"> 
					<a v-if="units.length" class="btn btn-danger btn-lg" @click="deleteUnit">
						<span class="fa fa-trash"></span> Delete
					</a>
			 	</div>
		 	</div>
		</div>
	`,

	props: {
		units: Array
	}, 
	methods: {   
		cancel() {
			this.$emit('cancel')
		},
		deleteUnit() { 
			var self = this
			$.ajax({
				url : base_url + 'admin/unit/delete',
				data : { units : this.units },
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
										
													<h4>UNIT OF MEASUREMENT</h4>
                		</center>
            		</div>
					<h2> Total Records : {{ units.length }}  </h2> 
					<table class="table table-bordered">
						<thead> 
							<tr> 
								<th>NAME</th> 
							</tr> 
						</thead>
						<tbody>
							<tr v-for="unit in units">
								<td>{{ unit.name }}</td>   
							</tr>
						</tbody> 
					</table> 
				</div> 
			</div> 

			<label v-if="!units.length">No Data selected...</label>
		</div>
	`, 
	props: {
		units: Array
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
	el: '#unitPage',
	data:{
		addForm: false,
		updateForm: false,
		deleteForm: false,
		checkAll : false,
		printForm: false,
		units : [],
		selected : [],
		title: 'Unit Management',
		columns: [ { label: 'NAME', field: 'name',  sortable: false } ],
		rows: []
	},
 	mounted() {
		this.getUnits();
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
		getSelected(data) { 
 			app.selected = data.selectedRows
	 	}, 
	 	getUnits() {
	 		$.ajax({
	 			url: base_url + 'admin/unit/get',
	 			dataType: 'json',
	 			success: function(units) {
	 				app.rows = units
	 			}
	 		})
	 	}, 
		save(type, message) {
			app.selected = []
	 		app.notify(type, message)
			app.getUnits()
			app.title = 'Unit Management'
			$('#mainData').show()
			app.addForm = false
			app.updateForm = false
			app.deleteForm = false
			app.printForm = false
		},
		cancel() {
			app.title = 'Unit Management'
			$('#mainData').show()
			app.addForm = false
			app.updateForm = false
			app.deleteForm = false
			app.printForm = false
		},    

		showForm(form) {
			switch(form) {
				case 'add': app.showAddForm(); break;
				case 'update': app.showUpdateForm(); break;
				case 'delete': app.showDeleteForm(); break;
				default: app.showPrintForm();
			}
		},
		showAddForm() {
			app.title = 'Add Unit'
			$('#mainData').hide() 
			app.addForm = true
		},
		showPrintForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Units Selected')
	 		}
	 		else {
				app.title = 'Print Unit'
				$('#mainData').hide() 
				app.printForm = true
			}
		},
		showUpdateForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Units Selected')
	 		}
	 		else {
				app.title = 'Update Unit'
				$('#mainData').hide() 
				app.updateForm = true
			}
		},
		showDeleteForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Units Selected')
	 		}
	 		else {
				app.title = 'Delete Unit'
				$('#mainData').hide() 
				app.deleteForm = true
			}
		},
		checkAllBox() {
			app.selected = []
			if (! app.checkAll) {
				app.selected = app.units
			}
		},    
	}
}); 