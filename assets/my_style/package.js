Vue.component('add-form', {
	template: `
		<div class="x_panel">
			<div class="x_title">
				<button class="btn btn-default pull-left" @click="cancel">
					<i class="fa fa-angle-left"></i>
					Back
				</button>
				<h4>Package Information</h4>

				<div class="clearfix"></div>
			</div>
			<div class="x_content"> 
				<div class="col-md-6">
					<div class="form-group">
						<label>Package Name:</label>
						<input type="text" class="form-control" style="height: 37px;" 
							v-model="name">
					</div>
					<div class="form-group"><br><br>
						<label>Service:</label>
						<select class="select2 form-control" style="width: 100%" 
							id="selectedService">
							<option v-for="service in services" :value="service.id">
								{{ service.name }}
							</option>
						</select> 
					</div> 
					<div class="form-group">  <br><br>
						<label>Select Items:</label>
						<div class="input-group">
							<select class="select2 form-control" style="width: 100%" 
								id="selectedItem">
								<option v-for="(item, index) in items" :value="index" 
									v-if="! pickedItems.includes(item)">
									{{ item.name }}
								</option>
							</select> 
							<span class="input-group-btn">
								<button class="btn btn-warning" style="height: 38px"
									@click="addItem">
									Add
								</button>
							</span>
						</div>
					</div>
				</div>

				<div class="col-md-6">
					<div class="form-group"> 
						<label>Selected Items:</label>
						<table class="table table-bordered"  v-if="pickedItems.length">
							<thead>
								<tr>
									<th>NAME</th>
									<th>UNIT</th>
									<th>QUANTITY</th>
									<th>REMOVE</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item, index) in pickedItems">
									<td>{{ item.name }} </td>
									<td>{{ item.unit_name }} </td>
									<td width="200">
										<input type="number" class="form-control" v-model="item.qty">
									</td>
									<td width="50">
										<center>
											<button class="btn btn-danger btn-sm"
												@click="removeItem(index)">
												<i class="fa fa-minus"></i>
											</button>
										</center>
									</td>
								</tr>
							</tbody>
						</table>
						<label v-if="!pickedItems.length" class="label label-info">
							No Items Yet...
						</label>
					</div>
				</div>
				<div class="col-md-12"> <br><br><br>
					<button :disabled="!checkInput()" @click="insertPackage" 
						class="btn btn-primary btn-lg">
						<span class="fa fa-check-circle"></span> Save
					</button>
				</div> 
			</div>
		</div>
	`,

	props: {
		items: Array,
		services: Array
	}, 
	data() {
		return {
			pickedItems: [],
			name: null
		}
	},
	methods: {
		checkInput() {
			return (this.name != null)
		},
		removeItem(index) {
			this.pickedItems.splice(index, 1)
		},
		cancel() {
			this.$emit('cancel')
			this.pickedItems = []
			this.name = null
		}, 
		addItem() {
			var index = $('#selectedItem').val()
			this.pickedItems.unshift(this.items[index])
		},
		notify(type, message) {
			new PNotify({
				title: type.toUpperCase(),
				type: type,
				text: message,
				nonblock: {nonblock: true},
				styling: 'bootstrap3', 
			});
		},
		insertPackage() {  
			var self = this
			$.ajax({
				url : base_url + 'admin/package/insert',
				data : {
					name: this.name,
					service_id: $('#selectedService').val(),
					items: this.pickedItems
				},
				method : 'post',
				success: function(response) {
					self.notify('success', 'Successfully Save')
					self.$emit('save')
					self.pickedItems = []
					self.name = null
				}
			});
		},  
	}
})
 


Vue.component('update-form', {
	template: `
		<div class="x_panel">
			<div class="x_title">
				<button class="btn btn-default pull-left" @click="cancel">
					<i class="fa fa-angle-left"></i>
					Back
				</button>
				<h4>Update Package Information</h4>

				<div class="clearfix"></div>
			</div>
			<div class="x_content"> 
				<div class="col-md-6">
					<div class="form-group">
						<label>Package Name:</label>
						<input type="text" class="form-control" style="height: 37px;" 
							v-model="package.name">
					</div>
					<div class="form-group"><br><br>
						<label>Service:</label> 
						<select class="form-control" style="width: 100%" 
							id="selServe" >
							<option :value="package.service_id">{{ package.service_name }}</option>
							<option v-for="service in services" :value="service.id" 
								v-if="service.name != package.service_name">
								{{ service.name }}
							</option>
						</select> 
					</div> 
					<div class="form-group">  <br><br>
						<label>Select Items:</label>
						<div class="input-group">
							<select class="select2 form-control" style="width: 100%" 
								id="selItem">
								<option v-for="(item, index) in items" :value="index">
									{{ item.name }}  
								</option>
							</select> 
							<span class="input-group-btn">
								<button class="btn btn-warning" style="height: 38px"
									@click="addItem">
									Add
								</button>
							</span>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group"> 
						<label>Selected Items:</label>
						<table class="table table-bordered">
							<thead>
								<tr>
									<th>NAME</th>
									<th>UNIT</th>
									<th>QUANTITY</th>
									<th>REMOVE</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item, index) in pickeditems">
									<td>{{ item.name }} </td>
									<td>{{ item.unit_name }} </td>
									<td width="200">
										<input type="number" class="form-control" v-model="item.qty">
									</td>
									<td width="50">
										<center>
											<button class="btn btn-danger btn-sm"
												@click="removeItem(index)">
												<i class="fa fa-minus"></i>
											</button>
										</center>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="col-md-12"> <br><br><br>
					<button :disabled="!checkInput()" @click="insertPackage" 
						class="btn btn-primary btn-lg">
						<span class="fa fa-check-circle"></span> Save
					</button>
				</div> 
			</div>
		</div>
	`,

	props: {
		items: Array,
		services: Array,
		package: Object, 
		pickeditems: Array
	},   
	methods: {  
		checkInput() {
			return (this.package.name != '')
		},
		removeItem(index) {
			this.pickeditems.splice(index, 1)
		},
		cancel() {
			this.$emit('cancel') 
		},  
		addItem() {
			var index = $('#selItem').val()
			this.pickeditems.unshift(this.items[index])
		},
		notify(type, message) {
			new PNotify({
				title: type.toUpperCase(),
				type: type,
				text: message,
				nonblock: {nonblock: true}, 
				styling: 'bootstrap3', 
			});
		},
		insertPackage() {  
			var self = this
			$.ajax({
				url : base_url + 'admin/package/update',
				data : {
					id: this.package.id,
					name: this.package.name,
					service_id: $('#selServe').val(),
					items: this.pickeditems
				},
				method : 'post',
				success: function(response){
					self.notify('success', 'Successfully Updated')
					self.$emit('save') 
				}
			});
		},  
	}
})


Vue.component('delete-form', {
	template: ` 
		<div class="x_panel">
			<div class="x_title">
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a>   
				<div class="clearfix"></div>
			</div>
			<div class="x_content">
		 		<div>
					<h5>Are you sure you want to Delete : </h5>
					<h2 class="package_title">
						<ul>
							<li>{{ package.name }}</li>
						</ul>
					</h2>
				</div>

				<div class="col-md-12"> 
					<a class="btn btn-danger btn-lg" @click="deletePackage">
						<span class="fa fa-trash"></span> Delete
					</a>
			 	</div>
		 	</div>
		</div>
	`,

	props: {
		package: Object
	}, 
	methods: {  
		cancel() {
			this.$emit('cancel')
		},
		notify(type, message) {
			new PNotify({
				title: type.toUpperCase(),
				type: type,
				text: message,
				nonblock: {nonblock: true},
				styling: 'bootstrap3', 
			});
		},
		deletePackage() { 
			var self = this
			$.ajax({
				url : base_url + 'admin/package/delete',
				data : { id : this.package.id },
				method : 'post',
				success: function(response){
					self.notify('success', 'Successfully Deleted')
					self.$emit('save')
				}
			});
		},
	}
}) 


var app = new Vue({
	el: '#packagePage',
	data:{
		title: 'Package Management',
		packages : [],
		selected : {},
		items: [],
		services: [],
		pickedItems: []
	},
	mounted() {
		this.getPackage()
		this.getInventoryItems()
		this.getServices()
	},
 
	methods: {   
		getServices() {
			$.ajax({
				url: base_url + 'admin/package/getServices',
				dataType: 'json',
				success: function(services) {
					app.services = services 
				}
			})
		},
		makeJSON(items) {
			return JSON.parse(items)
		},
		getPackage() {
			$.ajax({
				url: base_url + 'admin/package/get',
				dataType: 'json',
				success: function(packages) {
					app.packages = packages 
				}
			})
		},
		getInventoryItems() {
			$.ajax({
				url: base_url + 'admin/package/getInventoryItems',
				dataType: 'json',
				success: function(items) {
					app.items = items 
				}
			})
		},
		cancel() {
			app.title = 'Package Management'
			$('#mainData').show()
			$('#addForm').hide()
			$('#updateForm').hide() 
			$('#deleteForm').hide() 
		},    
		save() {
			app.getPackage()
			app.cancel()
		},

		showAddForm() {
			app.title = 'Add New Package'
			$('#mainData').hide() 
			$('#addForm').show() 
		},
		showUpdateForm(package) {
			app.title = 'Update Package'
			$('#mainData').hide() 
			$('#updateForm').show() 
			app.selected = package
			app.pickedItems = app.makeJSON(package.items)
		},
		showDeleteForm(package) {
			app.title = 'Delete Management'
			app.selected = package
			$('#mainData').hide()
			$('#deleteForm').show()
		}, 
	}
}); 