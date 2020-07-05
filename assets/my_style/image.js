Vue.component('message', {
	template: `
		<div class="alert alert-success">
			{{ message }}
		</div>
	`,
	props: {
		message: String
	}
})

Vue.component('images', {
	template: `
		<div>
			<div class="col-md-55" v-for="(image, index) in images">
				<div class="thumbnail">
					<div class="image view view-first">
						<img :src="path(image.path)" alt="image" class="img-responsive" />
						<div class="mask">
							<p>View / Delete</p>
							<div class="tools tools-bottom">
								<a :href="path(image.path)" target="_blank">
									<i class="fa fa-eye"></i>
								</a>
								<a href="#" @click="removeImage(index)">
									<i class="fa fa-times"></i>
								</a>
							</div>
						</div>
					</div>
					<div class="caption">
						<p>{{ imageName(image) }}</p>
					</div>
				</div>
			</div>
		</div>
	`,
	props: {
		images: Array
	},
	methods: {
		path(imagePath) {
			return base_url + imagePath
		},
		imageName(imagePath) {
			var name = imagePath.path
			return name.slice(12)
		},
		removeImage(index) {
			this.$emit('remove', index)
		}
	}
})




var app = new Vue({
	el: '#imagePage',
	data:{
		title: 'Image Management',   
		formAction: base_url + 'image/uploadImages',
		images: [],
		message: null
	},

	mounted() {
		this.getImages()
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
		showUploadForm() {
			app.title = 'Upload Images'
			$('#mainData').hide()
			$('#uploadForm').show()
		},
		hideUploadForm() {
			app.getImages()
			app.title = 'Image Management'
			$('#mainData').show()
			$('#uploadForm').hide()
		},

		removeImage(index) {
			$.ajax({
				url: base_url + 'admin/image/removeImage',
				data: {
					id: app.images[index].id,
					path: app.images[index].path,
				},
				method: 'post',
				success: function(response) {
					app.notify('success', 'Successfully Deleted')
					app.images.splice(index, 1)
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
		}

	}

}) 