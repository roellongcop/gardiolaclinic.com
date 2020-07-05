
/*=============================
DISPLAY BASIC INFORMATION 
=============================*/
Vue.component('basic-information', {
	template: `
		<div><br>
			<div class="col-md-6">
				<label><i class="fa fa-home"></i> Clinic Name</label>
				<input v-model="clinic.name" class="form-control" readonly>
			</div>
			<div class="col-md-6">
				<label><i class="fa fa-map-marker"></i> Address</label>
				<input v-model="clinic.address" class="form-control" readonly>
			</div>
			<div class="col-md-4"><br><br><br>
				<label><i class="fa fa-phone"></i> Phone Number</label>
				<input v-model="clinic.number" class="form-control" readonly>
			</div>
			<div class="col-md-4"><br><br><br>
				<label><i class="fa fa-facebook"></i> Facebook</label>
				<input v-model="clinic.facebook" class="form-control" readonly>
			</div>
			<div class="col-md-4"><br><br><br>
				<label><i class="fa fa-google-plus"></i> Gmail</label>
				<input v-model="clinic.gmail" class="form-control" readonly>
			</div>
			<div class="col-md-4"><br><br><br>
				<label><i class="fa fa-twitter"></i> Twitter</label>
				<input v-model="clinic.twitter" class="form-control" readonly>
			</div>
			<div class="col-md-4"><br><br><br>
				<label><i class="fa fa-skype"></i> Skype</label>
				<input v-model="clinic.skype" class="form-control" readonly>
			</div>
			<div class="col-md-4"><br><br><br>
				<label><i class="fa fa-yahoo"></i> Yahoo</label>
				<input v-model="clinic.yahoo" class="form-control" readonly>
			</div>
			<div class="col-md-6"><br><br><br>
				<label><i class="fa fa-stethoscope"></i> Clinic Description</label>
				<textarea class="form-control" v-model="clinic.description" readonly style="height: 200px"></textarea>
			</div>
			<div class="col-md-6"><br><br><br>
				<label><i class="fa fa-book"></i> Terms and Conditions</label>
				<textarea class="form-control" v-model="clinic.terms" readonly style="height: 200px"></textarea>
			</div>
			<div class="col-md-12"><br><br><br>
				<button class="btn btn-warning btn-lg" @click="update">
					<i class="fa fa-pencil"></i>
					Update Information
				</button>
			</div>
			<div class="col-md-12"> <br><br><br><br><br><br><br><br> </div>
		</div>
	`,
	props: {
		clinic: Object
	},
	methods: {
	 	update() {
	 		this.$emit('update')
	 	}
	}
})



/*=============================
UPDATE FORM
=============================*/
Vue.component('update-information', {
	template: `
		<div><br>
			<div class="col-md-6">
				<label><i class="fa fa-home"></i> Clinic Name</label>
				<input v-model="clinic.name" class="form-control">
			</div>
			<div class="col-md-6">
				<label><i class="fa fa-map-marker"></i> Address</label>
				<input v-model="clinic.address" class="form-control">
			</div>
			<div class="col-md-4"><br><br><br>
				<label><i class="fa fa-phone"></i> Phone Number</label>
				<input v-model="clinic.number" class="form-control">
			</div>
			<div class="col-md-4"><br><br><br>
				<label><i class="fa fa-facebook"></i> Facebook</label>
				<input v-model="clinic.facebook" class="form-control">
			</div>
			<div class="col-md-4"><br><br><br>
				<label><i class="fa fa-google-plus"></i> Gmail</label>
				<input v-model="clinic.gmail" class="form-control">
			</div>
			<div class="col-md-4"><br><br><br>
				<label><i class="fa fa-twitter"></i> Twitter</label>
				<input v-model="clinic.twitter" class="form-control">
			</div>
			<div class="col-md-4"><br><br><br>
				<label><i class="fa fa-skype"></i> Skype</label>
				<input v-model="clinic.skype" class="form-control">
			</div>
			<div class="col-md-4"><br><br><br>
				<label><i class="fa fa-yahoo"></i> Yahoo</label>
				<input v-model="clinic.yahoo" class="form-control">
			</div>
			<div class="col-md-6"><br><br><br>
				<label><i class="fa fa-stethoscope"></i> Clinic Description</label>
				<textarea class="form-control" v-model="clinic.description" style="height: 200px"></textarea>
			</div>
			<div class="col-md-6"><br><br><br>
				<label><i class="fa fa-book"></i> Terms and Conditions</label>
				<textarea class="form-control" v-model="clinic.terms" style="height: 200px"></textarea>
			</div>
			<div class="col-md-12"><br><br><br>
				<button class="btn btn-default btn-lg" @click="cancel">
					<i class="fa fa-angle-left"></i>
					Cancel
				</button>
				<button class="btn btn-success btn-lg" @click="updateBasicInformation">
					<i class="fa fa-check-circle"></i>
					Save Changes
				</button>
				
			</div>
			<div class="col-md-12"> <br><br><br><br><br><br><br><br> </div>
		</div>
	`,

	props: {
		clinic: Object
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
	 	updateBasicInformation() {
	 		var self = this
	 		$.ajax({
	 			url: base_url + 'admin/about/updateBasicInformation',
	 			data: {basic: this.clinic},
	 			method: 'post',
	 			success: function() {
	 				self.notify('success', 'Successfully Updated')
	 				self.$emit('cancel')
	 			}
	 		})
	 	}
	}
})


/*=============================
DISPLAY IMAGES
=============================*/
Vue.component('images', {
	template: `
		<div class="x_panel">
			<center><h4>Images</h4></center>
			<div class="table-responsive" style="height: 400px; width:150px;margin-left: -18px;">
				<div v-for="image in images" class="col-md-6">
					<img :src="path(image)" width="50" height="50"> <br><br>
				</div>
			</div>
		</div>
	`,
	props: {
		images: Array
	},
	methods: {
		path(image) {
			return base_url + image.path 
		}
	}
})



var app = new Vue({
	el: '#aboutPage',
	data:{
		dd: 'roel',
		title: 'About Us', 
		abouts : [],
		images : [],
		time : '',
		updateBasic: false,
		basicInformation: {}
	},
 	mounted() {
 		this.notify()
 		this.getImages()
 		this.getAbouts()
		this.getBasicInformation()
 	},
	methods: {   
 
		/*=================
		DISPLAY ALERTS
		=================*/
		notify() {
			var message = $('#alert').val()
			if (message) {
				new PNotify({
					title: "Success",
					type: "success",
					text: message,
					nonblock: {nonblock: true},
					styling: 'bootstrap3', 
				});
			}
		},



		/*==================
		RESET PAGE DATA
		==================*/
		cancel() {
			app.getBasicInformation()
			app.updateBasic = false
		},



		/*=========================
		FINDING SELECTED SERVICE 
		=========================*/
		showViewForm(service) {
			window.location.href = 'about/findAbout/'+ service.id
		},



		/*================
		HIDING ADD FORM 
		================*/
		hideAddForm() {
			app.title = 'Clinic Information'
			$('#mainData').show()
			$('#addForm').hide()
			$('#viewForm').hide()
		},


		/*================
		SHOWING ADD FORM 
		================*/
		showAddForm() {
			app.title = 'Add new Information'
			$('#mainData').hide()
			$('#addForm').show() 
		},



		/*==============================================
		LOADING BASIC INFORMATION FROM THE DATABASE
		==============================================*/
		getBasicInformation() {
			$.ajax({
				url: base_url + 'admin/about/getBasicInformation',
				dataType: 'json',
				success: function(basicInformation) {
					app.basicInformation = basicInformation
				}
			})
		},



		/*==============================================
		LOADING ALL INFORMATION FROM THE DATABASE
		==============================================*/
		getAbouts() {
			$.ajax({
				url: base_url + 'admin/about/get',
				dataType: 'json',
				success: function(abouts) {
					app.abouts = abouts
				}
			})
		},


		/*==============================================
		LOADING ALL IMAGES FROM THE DATABASE
		==============================================*/
		getImages() {
			$.ajax({
				url: base_url + 'admin/image/getImages',
				dataType: 'json',
				success: (images => {
					app.images = images
				})
			})
		}
	}

}) 
