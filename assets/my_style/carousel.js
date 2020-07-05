Vue.component('modal-images', {
	template: `
		<!-- Modal -->
		<div id="images" class="modal fade" role="dialog">
			<div class="modal-dialog modal-lg">
				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Select Image</h4>
					</div>
					<div class="modal-body">
						<div class="table-responsive" style="height: 400px;">
							<div v-for="image in images" class="col-md-2">
								<img @click="givePath(image)" data-dismiss="modal" class="thumbnail"  style="width: 100px;height:100px;" :src="imagePath(image.path)">
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	`,
	props: {
		images: Array
	},
	methods: {
		imagePath(path) {
			return base_url + path
		},
		givePath(image) {
			this.$emit('path', image.path)
		}
	}
})

Vue.component('add-form', {
	template: `
		<div class="x_panel">
			<modal-images :images="images" @path="changeImage"></modal-images>
			<div class="x_title">
				<h4 class="pull-right">Total Entity: ({{ carousels.length }})</h4> 
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a> 
				<button @click="appendInput" class="btn btn-success pull-left">
					<i class="fa fa-plus-square"></i> Entity
				</button> 
				<div class="clearfix"></div>
			</div>
			<div class="x_content"> 
				<div v-if="carousels.length" v-for="(carousel, index) in carousels" class="col-md-6">
					<div class="x_panel">
						<div class="x_title">
							<a @click="spliceCarousel(index)" class="btn btn-danger pull-right btn-sm">
								<i class="fa fa-minus-square"></i>
							</a> 
							<div class="clearfix"></div>
						</div>
						<div class="col-md-6">
							<img @click="getIndex(index)" data-toggle="modal" data-target="#images" 
								class="img-responsive thumbnail" :src="imagePath(carousel.image)" alt="Click to change" />
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Greetings: </label>
								<input type="text" v-model="carousel.greetings" class="form-control">
							</div>
							<div class="form-group">
								<label>Title: </label>
								<input type="text" v-model="carousel.title" class="form-control"> 
							</div>
							<div class="form-group">
								<label>Sub Title: </label>
								<input type="text" v-model="carousel.sub_title" class="form-control">  
							</div>
						</div>
					</div>
				</div> 
				<div class="col-md-12"> 
					<button @click="insertCarousel" v-if="carousels.length" class="btn btn-primary btn-lg">
						<span class="fa fa-check-circle"></span> Save
					</button>
				</div> 
			</div>
		</div>
	`,
	props: {
		images: Array
	},
	data() {
		return {
			carousels: [{greetings: '', title: '', sub_title: '', image: ''}],
			activeIndex: ''
		}
	},
	methods: {
		imagePath(path) {
			return base_url + path
		},
		changeImage(path) {
			this.carousels[this.activeIndex].image = path
		},
		getIndex(index) {
			this.activeIndex = index
		},
		cancel() {
			this.$emit('cancel')
		},
		spliceCarousel(index) {
			this.carousels.splice(index, 1)
		},
		appendInput() {
			var newInput = {greetings: '', title: '', sub_title: '', image: ''}
			this.carousels.unshift(newInput);
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
		insertCarousel() {
			var self = this
			$.ajax({
				url : base_url + 'admin/carousel/save',
				data : {carousels : this.carousels},
				method : 'post',
				success: function(response){
					self.notify('success', 'Successfully Save')
					self.$emit('save')
				}
			});
		},  
	}
})


Vue.component('update-form', {
	template: `
		<div class="x_panel">
			<modal-images :images="images" @path="changeImage"></modal-images>
			<div class="x_title">
				<h4 class="pull-right">Total Entity: ({{ carousels.length }})</h4> 
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a> 
				<div class="clearfix"></div>
			</div>
			<div class="x_content"> 
				<div v-if="carousels.length" v-for="(carousel, index) in carousels" class="col-md-6">
					<div class="x_panel">
						<div class="x_title">
							<div class="clearfix"></div>
						</div>
						<div class="col-md-6">
							<img @click="getIndex(index)" data-toggle="modal" data-target="#images" 
								class="img-responsive thumbnail" :src="imagePath(carousel.image)" alt="Click to change" />
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Greetings: </label>
								<input type="text" v-model="carousel.greetings" class="form-control">
							</div>
							<div class="form-group">
								<label>Title: </label>
								<input type="text" v-model="carousel.title" class="form-control"> 
							</div>
							<div class="form-group">
								<label>Sub Title: </label>
								<input type="text" v-model="carousel.sub_title" class="form-control">  
							</div>
						</div>
					</div>
				</div> 
				<div class="col-md-12"> 
					<button @click="updateCarousel" v-if="carousels.length" class="btn btn-success btn-lg">
						<span class="fa fa-check-circle"></span> Save Changes
					</button>
				</div> 
			</div>
		</div>
	`,
	props: {
		images: Array,
		carousels: Array
	},
	data() {
		return {
			activeIndex: ''
		}
	},
	methods: {
		imagePath(path) {
			return base_url + path
		},
		changeImage(path) {
			this.carousels[this.activeIndex].image = path
		},
		getIndex(index) {
			this.activeIndex = index
		},
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
		updateCarousel() {
			var self = this
			$.ajax({
				url : base_url + 'admin/carousel/update',
				data : {carousels : this.carousels},
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
				<h4 class="pull-right">Total Entity: ({{ carousels.length }})</h4> 
				<a class="btn btn-default pull-left" @click="cancel">
					<span class="fa fa-arrow-left"></span> Back
				</a> 
				<div class="clearfix"></div>
			</div>
			<div class="x_content"> 
				<div class="col-md-12"><h2>Your are Going to delete ... </h2></div>
				<div v-if="carousels.length" v-for="(carousel, index) in carousels">
					<div class="col-md-2">
						<img @click="getIndex(index)" data-toggle="modal" data-target="#images" 
							class="img-responsive thumbnail" :src="imagePath(carousel.image)" alt="Click to change" />
					</div> 
				</div> 
				<div class="col-md-12"> 
					<button @click="deleteCarousel" v-if="carousels.length" class="btn btn-danger btn-lg">
						<span class="fa fa-trash"></span> Delete
					</button>
				</div> 
			</div>
		</div>
	`,
	props: {
		carousels: Array
	}, 
	methods: {
		imagePath(path) {
			return base_url + path
		}, 
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
		deleteCarousel() {
			var self = this
			$.ajax({
				url : base_url + 'admin/carousel/delete',
				data : {carousels : this.carousels},
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
	el: '#carouselPage',
	data:{
		addForm: false,
		updateForm: false,
		deleteForm: false,
		checkAll : false,
		printForm: false,
		units : [],
		selected : [],
		title: 'Site Carousel Management',
		carousels: [],
		images: []
	},

	mounted() {
		this.getCarouselData()
		this.getImages()
	},
 
	methods:{ 
		imagePath(path) {
			return base_url + path
		} ,
		save() {
			app.getCarouselData()
			app.cancel()
		},
		getCarouselData() {
			$.ajax({
				url: base_url + 'admin/carousel/get',
				dataType: 'json',
				success: function(carousels) {
					app.carousels = carousels 
				}
			})
		},
		getImages() {
			$.ajax({
				url: base_url + 'admin/image/getImages',
				dataType: 'json',
				success: function(images) {
					app.images = images 
				}
			})
		},

		cancel() {
			app.selected = []
			app.checkAll = false
			app.title = 'Site Carousel Management'
			$('#mainData').show()
			app.addForm = false
			app.updateForm = false
			app.deleteForm = false
		},    

	 
		showAddForm() {
			app.title = 'Add Site Carousel'
			$('#mainData').hide() 
			app.addForm = true
		}, 
		showUpdateForm() {
			app.title = 'Update Site Carousel'
			$('#mainData').hide() 
			app.updateForm = true
		},
		showDeleteForm() {
			app.title = 'Delete Unit'
			$('#mainData').hide() 
			app.deleteForm = true
		},
		checkAllBox() {
			app.selected = []
			if (! app.checkAll) {
				app.selected = app.carousels
			}
		},    
	}
}); 