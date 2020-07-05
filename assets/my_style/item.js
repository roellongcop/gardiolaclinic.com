Vue.component('select2', {
	props: ['options', 'value'],
	template: `<select style="width: 100%;"><slot></slot></select>`,
    mounted: function () {
        var vm = this
        $(this.$el)
      	.val(this.value)
      	// init select2
      	.select2({ data: this.options })
      	// emit event on change.
      	.on('change', function () {
        	vm.$emit('input', this.value)
      	})
     },
    watch: {
        value: function (value) {
          	// update value
          	$(this.$el).val(value).trigger('change')
        },
        options: function (options) {
          // update options
          	$(this.$el).select2({ data: options })
        }
    },
  	destroyed: function () {
    	$(this.$el).off().select2('destroy')
  	}
})

Vue.component('add-form', {
	template: ` 
		<div class="x_panel">
			<div class="x_title">
				<h4 class="pull-right">Total Entity: ({{ items.length }})</h4>
				<a class="btn btn-default pull-left" @click="cancel">
					<i class="fa fa-arrow-left"></i> Back
				</a> 
				<button @click="appendInput" class="btn btn-success pull-left">
					<i class="fa fa-plus-square"></i> Entity
				</button> 
				<div class="clearfix"></div>
			</div>
			<div class="x_content">  
				<div v-if="items.length" v-for="(item, index) in items" class="col-md-12">
					<div class="x_panel">
						<div class="col-md-12"> 
							<label> Entity No: {{ items.length - index }} </label>
							<a @click="spliceItem(index)" 
								class="btn btn-danger pull-right btn-sm">
								<i class="fa fa-minus-square"></i>
							</a> 
						</div>
						<div class="col-md-6"> 
							<label>Name: </label>
							<input type="text" class="form-control" v-model="item.name" 
								required>
						</div>
						<div class="col-md-6">
							<div class="col-md-6">
								<label>Unit:</label>
								<select2 :options="units" v-model="item.unit_id"></select2>
								
							</div> 
							<div class="col-md-6">
								<label>Price (Php):</label>
								<input type="number" class="form-control" 
									v-model="item.price" required><br>
							</div> 
						</div>
						<div class="col-md-6">
							<label>Supplier:</label>
							<select2 :options="suppliers" v-model="item.supplier_id"></select2>
						</div>
						<div class="col-md-6">
							<div class="col-md-6">
								<label>Category:</label>
								<select2 :options="categories" v-model="item.category_id"></select2>
							</div>
							<div class="col-md-6">
								<label>Total Price (Php):</label>
								<h3 class="text-center green"> 
									<b> {{ (item.quantity * item.price).toFixed(2) }}</b> 
								</h3>
							</div>
						</div>
						<div class="col-md-3"><br>
							<label>Max Stock:</label>
							<input type="number" class="form-control" v-model="item.max" 
								@change="checkMaxMin(index)" required>
						</div> 
						<div class="col-md-3"><br>
							<label>Min Stock:</label>
							<input type="number" class="form-control" v-model="item.min" 
								@change="checkMaxMin(index)" required>
						</div> 
						<div class="col-md-6">
							<div class="col-md-6"><br>
								<label>Current Stock: </label> 
								{{ stockStatus (item.quantity, item.max, item.min) }} 
								<input type="number" class="form-control" 
									v-model="item.quantity" required>
							</div>   
						</div>  
					</div>
				</div>
				<div class="col-md-12"> 
					<button @click="insertItem" v-if="items.length" class="btn btn-primary btn-lg">
						<i class="fa fa-check-circle"></i> Save
					</button>
				</div> 
			</div>
		</div>
	`, 
	props: {
		units: Array,
		suppliers: Array,
		categories: Array
	},
	data() {
		return {
			items: [{
				name: '', 
				quantity: '', 
				category_id: (this.categories.length > 0)? this.categories[0].id : '' ,
				supplier_id: (this.suppliers.length > 0)? this.suppliers[0].id : '' ,
				unit_id: (this.units.length > 0)? this.units[0].id : '' ,
				price: '', 
				max: '',
				 min: ''
			}]
		}
	},
	methods: {
		cancel() {
			this.$emit('cancel')
		},
		spliceItem(index) {
			this.items.splice(index, 1)
		},
		appendInput() {
			var newInput = {name: '', quantity: '', category_id: '',
				supplier_id: '', unit_id: '', price: '', max: '', min: ''}
			this.items.unshift(newInput);
		},
		insertItem() {
			var self = this
			$.ajax({
				url : base_url + 'admin/item/insert',
				data : { items : this.items },
				method : 'post',
				success: function(response){ 
					self.$emit('save', 'success', 'Successfully Added')
				}
			}); 
		},  
		stockStatus(qty, max, min){
			if (parseInt(qty) == 0 || qty == '') {
				return '(Empty)'
			}
			else if (parseInt(qty) >= parseInt(max)) {
				return '(Full)'
			}
			else if (parseInt(qty) <= parseInt(min)) {
				return '(Critical)'
			}
			else {
				return '(Safe)'
			}
		},  
		checkMaxMin(index) {
			var max = parseInt(this.items[index].max)
			var min = parseInt(this.items[index].min)
			if (min >= max) {
				alert('Maximum stock must be greater than Minimum stock.')
				this.items[index].min = ''
				this.items[index].max = ''
			}
		},
	}
})

Vue.component('update-form', {
	template: ` 
		<div class="x_panel">
			<div class="x_title">
				<h4 class="pull-right">Total Entity: ({{ items.length }})</h4> 
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a>  
				<div class="clearfix"></div>
			</div>
			<div class="x_content"> 
				<div v-for="(item, index) in items" class="col-md-12" :key="item.id">
					<div class="x_panel">
						<div class="col-md-12">
							<label>ITEM ID: {{ item.id }} </label> 
						</div>
						<div class="col-md-6"> 
							<label>Name: </label>
							<input type="text" class="form-control" 
								v-model="item.name" required>
						</div>
						<div class="col-md-6">
							<div class="col-md-6">
								<label>Unit:</label>
								<select2 :options="units" v-model="item.unit_id">
									<option> {{item.unit_name}} </option>
								</select2>
							</div> 
							<div class="col-md-6">
								<label>Price (Php):</label>
								<input type="number" class="form-control" 
									v-model="item.price" required><br>
							</div> 
						</div>
						<div class="col-md-6">
							<label>Supplier:</label>
							<select2 :options="suppliers" v-model="item.supplier_id">
								<option> {{item.supplier_name}} </option>
							</select2>
						</div>
						<div class="col-md-6">
							<div class="col-md-6">
								<label>Category:</label>
								<select2 :options="categories" v-model="item.category_id">
									<option> {{item.category_name}} </option>
								</select2>
							</div>
							<div class="col-md-6">
								<label>Total Price (Php):</label>
								<h3 class="text-center green"> 
									<b> {{ (item.quantity * item.price).toFixed(2) }}</b> 
								</h3>
							</div>
						</div>
						<div class="col-md-3"><br>
							<label>Max Stock:</label>
							<input type="number" class="form-control" v-model="item.max" 
								@change="checkMaxMin(index)" required>
						</div> 
						<div class="col-md-3"><br>
							<label>Min Stock:</label>
							<input type="number" class="form-control" v-model="item.min" 
								@change="checkMaxMin(index)" required>
						</div> 
						<div class="col-md-6">
							<div class="col-md-6"><br>
								<label>Current Stock:</label> 
								{{ stockStatus (item.quantity, item.max, item.min) }}
								<input type="number" class="form-control" 
									v-model="item.quantity" required>
							</div>   
						</div>  
					</div>  
				</div>   
				<label v-if="!items.length">No Data selected...</label>
				<div class="col-md-12"> 
					<button @click="updateItem" v-if="items.length" class="btn btn-success btn-lg">
						<span class="fa fa-edit"></span> Update
					</button>
				</div> 
			</div>
		</div>
	`, 
	props: {
		items: Array,
		units: Array,
		suppliers: Array,
		categories: Array
	}, 
	methods: {   
		checkMaxMin(index) { 
			var max = parseInt(app.items[index].max)
			var min = parseInt(app.items[index].min)
			if (min >= max) {
				alert('Maximum stock must be greater than Minimum stock.')
				this.items[index].min = ''
				this.items[index].max = ''
			} 
		},
		cancel() {
			this.$emit('cancel')
		}, 
		updateItem() {
			var self = this
			$.ajax({
				url: base_url + 'admin/item/update',
				data: {items : this.items},
				method: 'post',
				success: function(response) { 
					self.$emit('save', 'success', 'Successfully Updated')
				}
			}); 
		}, 
		stockStatus(qty, max, min){
			if (parseInt(qty) == 0 || qty == '') {
				return '(Empty)'
			}
			else if (parseInt(qty) >= parseInt(max)) {
				return '(Full)'
			}
			else if (parseInt(qty) <= parseInt(min)) {
				return '(Critical)'
			}
			else {
				return '(Safe)'
			}
		}, 
	}
})

Vue.component('delete-form', {
	template: ` 
		<div class="x_panel">
			<div class="x_title">
				<h4 class="pull-right">Total Entity: ({{ items.length }})</h4> 
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a>  
				<div class="clearfix"></div>
			</div>
			<div class="x_content">
				<div v-if="items.length">
					<h5>Are you sure you want to Delete</h5>
					<h2>
						<ul>
							<li v-for="item in items" :key="item.id">
								{{ item.quantity }}  {{ item.unit_name }} of {{ item.name }} 
							</li>
						</ul>
					</h2>
				</div>
				<label v-if="!items.length">No Data selected...</label>
				<div class="col-md-12"> 
					<a v-if="items.length" class="btn btn-danger btn-lg" @click="deleteItem()">
						<span class="fa fa-trash"></span> Delete
					</a>
				</div>
			</div>
		</div>
	`, 
	props: {
		items: Array, 
	}, 
	methods: {  
		cancel() {
			this.$emit('cancel')
		},
		deleteItem() {
			var self = this
			$.ajax({
				url : base_url + 'admin/item/delete',
				data : { items : this.items },
				method : 'POST',
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
                				<img style="float:center;" width="50" height="50" 
                					:src="logo" alt="" /> 
								{{ clinicName }}
							</h3>
							<date></date>
							
            				<h4>LIST OF {{ type }} ITEMS</h4>
                		</center>
            		</div>
					<h2> Total Records : {{ items.length }}  </h2> 
					<table class="table table-bordered">
						<thead> 
							<tr> <th v-for="head in heads"> {{ head }} </th> </tr> 
						</thead>
						<tbody>
							<tr v-for="item in items">
								<td>{{ item.name }}</td>  
								<td>{{ item.quantity }}</td>
								<td>{{ item.unit_name }}</td>
								<td>{{ item.price }}</td>
								<td>{{ item.category_name }}</td> 
								<td>{{ item.supplier_name }}</td>
								<td v-html="item.stock"></td>
							</tr>
						</tbody> 
					</table> 
				</div> 
			</div> 

			<label v-if="!items.length">No Data selected...</label>
		</div>
	`, 
	props: {
		items: Array, 
		heads: Array, 
		logo: String,
		type: String
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
	el: '#itemPage',
	data:{
		addForm: false,
		updateForm: false,
		deleteForm: false,
		printForm: false,
		checkAll: false,
		categories: [],
		units: [],
		suppliers: [],
		selected: [],
		active: [], 
		items: [], 
		title: 'Item Management',
		heads: ['NAME', 'QUANTITY', 'UNIT', 'PRICE (PHP)', 'CATEGORY', 'SUPPLIER', 'STATUS'],
		logo: base_url + 'assets/assets/images/logo.svg',
		itemType: '',
		userType: '',
		columns: [
        	{ label: 'NAME', field: 'name',  sortable: false },
        	{ label: 'QUANTITY', field: 'quantity',  sortable: false },
        	{ label: 'UNIT', field: 'unit_name',  sortable: false },
        	{ label: 'PRICE (PHP)', field: 'price',  sortable: false },
        	{ label: 'CATEGORY', field: 'category_name',  sortable: false },
        	{ label: 'SUPPLIER', field: 'supplier_name',  sortable: false },
        	// { label: 'STATUS', field: 'stock',  sortable: false }
        	{ label: 'STATUS', field: 'stock',  sortable: false, html: true }
		],
		consumables: [],
		notConsumables: [],
	},
	mounted() { 
		this.getItems()
		this.getUserType()
		this.getCategories()
		this.getSuppliers()
		this.getUnits()
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

		createLabel(stock) {
			if (stock == 'Full') {
				return '<center><label class="label label-success">Full</label></center>';
			}
			else if (stock == 'Safe') {
				return '<center><label class="label label-primary">Safe</label></center>';
			}
			else if (stock == 'Critical') {
				return '<center><label class="label label-warning">Critical</label></center>';
			} 
			else {
				return '<center><label class="label label-danger">Empty</label></center>';
			}
		},

		removeLabel(stock) {
			if (stock == '<center><label class="label label-success">Full</label></center>') {
				return 'Full';
			}
			else if (stock == '<center><label class="label label-primary">Safe</label></center>') {
				return 'Safe';
			}
			else if (stock == '<center><label class="label label-warning">Critical</label></center>') {
				return 'Critical';
			} 
			else {
				return 'Empty';
			}
		},

		getItems() {
			$.ajax({
				url: base_url + 'admin/item/get',
				dataType: 'json',
				success: function(items) {
					app.consumables = []
					app.notConsumables = []

					items.forEach(item => {
						item.stock = app.createLabel(item.stock)
						if (item.category_name == "Consumable") {
							app.consumables.push(item)
						} else {
							app.notConsumables.push(item)
						}
					});




					/* OLDER VERSION

					for(index in items) {
						if(items[index].category_name == 'Consumable') {

							// para may kulay yung status
							items[index].stock = app.createLabel(items[index].stock)
							app.consumables.push(items[index])
						}
						else {
							items[index].stock = app.createLabel(items[index].stock)
							app.notConsumables.push(items[index])
						}
					}
					
					 */





				}
			})
		}, 
		getSelected(data) { 
 			app.selected = data.selectedRows  
	 	}, 
		getUserType() {
			$.ajax({
				url: base_url + 'admin/item/getUserType',
				dataType: 'json',
				success: function(userType) {
					app.userType = userType
				}
			})
		}, 
		save(type, message) {
			app.selected = []
	 		app.notify(type, message)
	 		app.getItems()
			app.title = 'Item Management'
			$('#mainData').show()
			app.addForm = false
			app.updateForm = false
			app.printForm = false
			app.deleteForm = false
		}, 
		cancel() {
	 		app.getItems()
			app.title = 'Item Management'
			$('#mainData').show()
			app.addForm = false
			app.updateForm = false
			app.deleteForm = false
			app.printForm = false
		},  
		showAddForm() {
			app.title = 'Add Item'
			$('#mainData').hide() 
			app.addForm = true
		},
		showUpdateForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Item Selected')
	 		} 
	 		else {
				app.title = 'Update Item'
				$('#mainData').hide() 
				app.updateForm = true
	 		}
		},
		showDeleteForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Item Selected')
	 		} 
	 		else {
				app.title = 'Delete Item'
				$('#mainData').hide() 
				app.deleteForm = true
			}
		},
		getPrintType() {
			for(index in app.selected) {
				if (app.selected[index].category_name == 'consumable') {
					return 'CONSUMABLE'
				}
			}
			return 'NOT CONSUMABLE'
		},
		showPrintForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Item Selected')
	 		} 
	 		else {
	 			for(index in app.selected) {
	 				app.selected[index].stock = app.removeLabel(app.selected[index].stock)
	 			}
				app.itemType = app.getPrintType()
				app.title = 'Print Item'
				$('#mainData').hide() 
				app.printForm = true
			}
		},

		checkAllNotConsumable() {
			app.itemType = 'NOT CONSUMABLE'
			app.selected = []
			if (! app.checkAll) {
				for(index in app.items) {
					if (app.items[index].category_name != 'consumable') {
						app.selected.unshift(app.items[index])
					}
				}
			} 
		}, 
		 
		checkAllConsumable() {
			app.itemType = 'CONSUMABLE'
			app.selected = []
			if (! app.checkAll) {
				for(index in app.items) {
					if (app.items[index].category_name == 'consumable') {
						app.selected.unshift(app.items[index])
					}
				}
			} 
		}, 
		 
 		getUnits() {
 			$.ajax({
				url : base_url + 'admin/item/getUnits',
				dataType: 'json',
				success: function(response) { 
					app.units = response 
				}
			}); 
		}, 
		getSuppliers() {
			$.ajax({
				url : base_url + 'admin/item/getSuppliers',
				dataType: 'json',
				success: function(response) { 
					app.suppliers = response 
				}
			});
		}, 
		getCategories() {
			$.ajax({
				url : base_url + 'admin/item/getCategories',
				dataType: 'json',
				success: function(response) { 
					app.categories = response 
				}
			});
		}, 
	}
}); 