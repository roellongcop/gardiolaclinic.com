Vue.component('add-form', {
	template: `
		<div class="x_panel">
			<div class="x_title">
				<h4 class="pull-right">Total Entity:  ({{ categories.length }})</h4>
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a>
				<button @click="appendInput" class="btn btn-success pull-left">
					<i class="fa fa-plus-square"></i> Entity
				</button>
				<div class="clearfix"></div>
			</div>
			<div class="x_content">
				<div v-if="categories.length" v-for="(category, index) in categories"
					class="col-md-4">
					<div class="x_panel">
						<label> Entity No: {{ categories.length - index }} </label>
						<a @click="spliceCategory(index)"
							class="btn btn-danger pull-right btn-sm">
							<i class="fa fa-minus-square"></i>
						</a>
						<div class="form-group">
							<label>Name:</label>
							<input type="text" class="form-control"
								v-model="category.name" required>
						</div>
						<div class="form-group">
							<label>Description:</label>
							<textarea class="form-control" v-model="category.description"
								style="height: 100px;" required></textarea>
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<button @click="insertCategory" v-if="categories.length"
						class="btn btn-primary btn-lg">
						<span class="fa fa-check-circle"></span> Save
					</button>
				</div>
			</div>
		</div>
	`,
	data() {
		return {
			categories:[{name: '', description: ''}]
		}
	},
	methods: {
		cancel() {
			this.$emit('cancel')
		},
		spliceCategory(index) {
			this.categories.splice(index, 1)
		},
		appendInput() {
			var newInput ={name: '', description: ''}
			this.categories.unshift(newInput)
		},
		insertCategory() {
			var self = this
			$.ajax({
				url : base_url + 'admin/category/insert',
				data : {categories : this.categories},
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
				<h4 class="pull-right">Total Entity: ({{ categories.length }})</h4>
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a>
				<div class="clearfix"></div>
			</div>
			<div class="x_content">
				<div v-if="categories.length" v-for="category in categories" class="col-md-4">
					<div class="x_panel">
						<label>ID No: {{ category.id }}</label>
						<div class="form-group">
							<label>Name:</label>
							<input type="text" class="form-control"
								v-model="category.name" required>
						</div>
						<div class="form-group">
							<label>Description:</label>
							<textarea class="form-control" v-model="category.description"
								style="height: 100px;" required> </textarea>
						</div>
					</div>
				</div>
				<label v-if="!categories.length">No Data selected...</label>
				<div class="col-md-12">
					<button @click="updateCategory" v-if="categories.length"
						class="btn btn-success btn-lg">
						<span class="fa fa-edit"></span> Update
					</button>
				</div>
			</div>
		</div>
	`,
	props: {
		categories: Array
	},
	methods: {
		cancel() {
			this.$emit('cancel')
		},
		updateCategory() {
			var self = this
			$.ajax({
				url : base_url + 'admin/category/update',
				data : {categories : this.categories},
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
				<h4 class="pull-right">Total Entity: ({{ categories.length }})</h4>
				<a class="btn btn-default" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a>
				<div class="clearfix"></div>
			</div>
			<div class="x_content">
				<div v-if="categories.length">
					<h5>Are you sure you want to Delete : </h5>
					<h2>
						<ul>
							<li v-for="category in categories">
								{{category.name}}
							</li>
						</ul>
					</h2>
				</div>
				<label v-if="!categories.length">No Data selected...</label>
				<div class="col-md-12">
					<a  v-if="categories.length" class="btn btn-danger btn-lg"
						@click="deleteCategory">
						<span class="fa fa-trash"></span> Delete
					</a>
				</div>
			</div>
		</div>
	`,
	props: {
		categories: Array
	},
	methods: {
		cancel() {
			this.$emit('cancel')
		},
		deleteCategory() {
			var self = this
			$.ajax({
				url: base_url + 'admin/category/delete',
				data: {categories : this.categories},
				method: 'post',
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
							
            				<h4>LIST OF ITEM CATEGORY</h4>
                		</center>
            		</div>
					<h2> Total Records : {{ categories.length }}  </h2>
					<table class="table table-bordered">
						<thead>
							<tr>
								<th>NAME</th>
								<th>DESCRIPTION</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="category in categories">
								<td>{{ category.name }}</td>
								<td>{{ category.description }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<label v-if="!categories.length">No Data selected...</label>
		</div>
	`,
	props: {
		categories: Array
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
	el: '#categoryPage',
	data:{
		addForm: false,
		printForm: false,
		updateForm: false,
		deleteForm: false,
		checkAll: false,
		categories: [],
		selected: [],
		title: 'Category Management',
		columns: [
        	{ label: 'NAME', field: 'name',  sortable: false },
        	{ label: 'DESCRIPTION', field: 'description',  sortable: false },

		],
		rows: []
	},
 	mounted() {
 		this.getCategories()
 	},

	methods:{
		notify(type, message) {
			new PNotify({
				title: type.toUpperCase(),
				type: type,
				text: message,
				nonblock: {nonblock: true},
				styling: 'bootstrap3',
			});
		},
		getCategories() {
	 		$.ajax({
	 			url: base_url + 'admin/category/get',
	 			dataType: 'json',
	 			success: function(categories) {
	 				app.rows = categories
	 			}
	 		})
	 	},
		getSelected(data) {
 			app.selected = data.selectedRows
	 	},
	 	save(type, message) {
	 		app.notify(type, message)
	 		app.getCategories()
			app.selected = []
			app.title = 'Category Management'
			$('#mainData').show()
			app.addForm = false
			app.updateForm = false
			app.printForm = false
			app.deleteForm = false
		},
		cancel() {
			app.title = 'Category Management'
			$('#mainData').show()
			app.addForm = false
			app.updateForm = false
			app.deleteForm = false
			app.printForm = false
		},
		showPrintForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Categories Selected')
	 		}
	 		else {
				app.title = 'Print Category'
				$('#mainData').hide()
				app.printForm = true
			}
		},
		showAddForm() {
			app.title = 'Add Category'
			$('#mainData').hide()
			app.addForm = true
		},
		showUpdateForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Categories Selected')
	 		}
	 		else {
				app.title = 'Update Category'
				$('#mainData').hide()
				app.updateForm = true
			}
		},
		showDeleteForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Categories Selected')
	 		}
	 		else {
				app.title = 'Delete Category'
				$('#mainData').hide()
				app.deleteForm = true
			}
		},

		checkAllBox() {
			app.selected = []
			if (! app.checkAll) {
				app.selected = app.categories
			}
		},
	}
});
