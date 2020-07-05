Vue.component('add-form', {
	template: `
		<div class="x_panel">
			<div class="x_title">
				<h4 class="pull-right">Total Entity: ({{ opens.length }})</h4> 
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a> 
				<button @click="appendInput" class="btn btn-success pull-left">
					<i class="fa fa-plus-square"></i> Entity
				</button> 
				<div class="clearfix"></div>
			</div>
			<div class="x_content"> 
					<div v-if="opens.length" v-for="(open, index) in opens" class="col-md-4">
						<div class="x_panel">
							<label> Entity No: {{ opens.length - index }} </label>
							<a @click="spliceOpen(index)" class="btn btn-danger pull-right btn-sm">
								<i class="fa fa-minus-square"></i>
							</a>
							<div class="form-group">
								<label>Name:</label>
								<select class="form-control" v-model="open.day">
									<option v-for="day in days"> {{ day }} </option>
								</select>
							</div> 
							<div class="form-group">
								<label>Open:</label>
								<select class="form-control" v-model="open.open">
									<option v-for="hour in hours"> {{ hour }} </option>
								</select>
							</div> 
							<div class="form-group">
								<label>Close:</label>
								<select class="form-control" v-model="open.close">
									<option v-for="hour in hours"> {{ hour }} </option>
								</select>
							</div> 
						</div>
					</div> 
					<div class="col-md-12"> 
						<button @click="insertOpen" v-if="opens.length" class="btn btn-primary btn-lg">
							<span class="fa fa-check-circle"></span> Save
						</button>
					</div> 
			</div>
		</div>
	`,
	data() {
		return {
			opens: [{day: '', open: '', close: ''}],
			days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			hours: [
				'01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM',
				'07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 AM',
				'01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM',
				'07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM', '12:00 PM', 'CLOSED'
			]
		}
	},
	methods: {
		cancel() {
			this.$emit('cancel')
		},
		spliceOpen(index) {
			this.opens.splice(index, 1)
		},
		appendInput() {
			var newInput = {name: ''}
			this.opens.unshift(newInput);
		},
		insertOpen() {
			var self = this
			$.ajax({
				url : base_url + 'admin/opening/insert',
				data : {opens : this.opens},
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
				<h4 class="pull-right">Total Entity: ({{ opens.length }})</h4> 
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a>  
				<div class="clearfix"></div>
			</div>
			<div class="x_content"> 
				<div v-if="opens.length" v-for="open in opens" class="col-md-4">
					<div class="x_panel">
						<label>ID No: {{ open.id }}</label>
						<div class="form-group">
								<label>Name:</label>
								<select class="form-control" v-model="open.day">
									<option v-for="day in days"> {{ day }} </option>
								</select>
							</div> 
							<div class="form-group">
								<label>Open:</label>
								<select class="form-control" v-model="open.open">
									<option v-for="hour in hours"> {{ hour }} </option>
								</select>
							</div> 
							<div class="form-group">
								<label>Close:</label>
								<select class="form-control" v-model="open.close">
									<option v-for="hour in hours"> {{ hour }} </option>
								</select>
							</div>
					</div> 
				</div>
				<label v-if="!opens.length">No Data selected...</label>

				<div class="col-md-12"> 
					<button @click="updateOpen" v-if="opens.length" class="btn btn-success btn-lg">
						<span class="fa fa-edit"></span> Update
					</button>
				</div> 
			</div>
		</div>
	`,
	data() {
		return {
			days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			hours: [
				'01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM',
				'07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 AM',
				'01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM',
				'07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM', '12:00 PM', 'CLOSED'
			]
		}
	},
	props: {
		opens: Array
	}, 
	methods: {  
		cancel() {
			this.$emit('cancel')
		},
		updateOpen() { 
			var self = this
			$.ajax({
				url : base_url + 'admin/opening/update',
				data : {opens : this.opens},
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
				<h4 class="pull-right">Total Entity: ({{ opens.length }})</h4>
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a>   
				<div class="clearfix"></div>
			</div>
			<div class="x_content">
		 		<div v-if="opens.length">
					<h5>Are you sure you want to Delete Opening Hours for : </h5>
					<h2>
						<ul>
							<li v-for="open in opens">
								{{ open.day }}
							</li>
						</ul>
					</h2>
				</div>
				<label v-if="!opens.length">No Data selected...</label>

				<div class="col-md-12"> 
					<a v-if="opens.length" class="btn btn-danger btn-lg" @click="deleteOpen">
						<span class="fa fa-trash"></span> Delete
					</a>
			 	</div>
		 	</div>
		</div>
	`,

	props: {
		opens: Array
	}, 
	methods: {  
		cancel() {
			this.$emit('cancel')
		},
		deleteOpen() { 
			var self = this
			$.ajax({
				url : base_url + 'admin/opening/delete',
				data : { opens : this.opens },
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
							
            				<h4>OPENING HOURS</h4>
                		</center>
            		</div>
					<h2> Total Records : {{ opens.length }}  </h2> 
					<table class="table table-bordered">
						<thead> 
							<tr> 
								<th>NAME</th> 
								<th>OPEN</th> 
								<th>CLOSE</th> 
							</tr> 
						</thead>
						<tbody>
							<tr v-for="open in opens">
								<td>{{ open.day }}</td>   
								<td>{{ open.open }}</td>   
								<td>{{ open.close }}</td>   
							</tr>
						</tbody> 
					</table> 
				</div> 
			</div> 

			<label v-if="!opens.length">No Data selected...</label>
		</div>
	`, 
	props: {
		opens: Array
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
	el: '#openPage',
	data:{
		addForm: false,
		updateForm: false,
		printForm: false,
		deleteForm: false,
		checkAll : false,
		openings : [],
		selected : [],
		title: 'Opening Hours',
		columns: [
        	{ label: 'DAY', field: 'day',  sortable: false },
        	{ label: 'OPEN', field: 'open',  sortable: false },
        	{ label: 'CLOSE', field: 'close',  sortable: false }
		],

	},

	mounted() {
		this.getOpenings()
	},
 
	methods:{ 
		getOpenings() {
			$.ajax({
				url: base_url + 'admin/opening/get',
				dataType: 'json',
				success: function(openings) {
					app.openings = openings
				}
			})
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
		getSelected(data) { 
 			app.selected = data.selectedRows 
	 	},  
	 	save(type, message) {
	 		app.getOpenings()
			app.selected = []
	 		app.notify(type, message)
			app.title = 'Opening Hours'
			$('#mainData').show()
			app.addForm = false
			app.updateForm = false
			app.printForm = false
			app.deleteForm = false
		}, 
		cancel() {
			app.title = 'Opening Hours'
			$('#mainData').show()
			app.addForm = false
			app.updateForm = false
			app.printForm = false
			app.deleteForm = false
		},    
		showPrintForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Units Selected')
	 		}
	 		else {
				app.title = 'Print Category'
				$('#mainData').hide() 
				app.printForm = true
			}
		},
		showAddForm() {
			app.title = 'Add Opening Hours'
			$('#mainData').hide() 
			app.addForm = true
		},
		showUpdateForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Units Selected')
	 		}
	 		else {
				app.title = 'Update Opening Hours'
				$('#mainData').hide() 
				app.updateForm = true
			}
		},
		showDeleteForm() {
			if(! app.selected.length) {
	 			app.notify('danger', 'No Units Selected')
	 		}
	 		else {
				app.title = 'Delete Opening Hours'
				$('#mainData').hide() 
				app.deleteForm = true
			}
		},
		checkAllBox() {
			app.selected = []
			if (! app.checkAll) {
				app.selected = app.opens
			}
		},    
	}
}); 