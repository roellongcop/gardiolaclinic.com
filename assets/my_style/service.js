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
	el: '#servicePage',
	data:{
		title: 'Service Management', 
		services : [],
		images : [],
		price: 0.00
	},
 	mounted() {
 		this.notify()
 		this.getImages()
 		this.getServices()
 	},
	methods: {  
		getServices() {
			$.ajax({
				url: base_url + 'admin/service/getServices',
				dataType: 'json',
				success: function(services) {
					app.services = services
				}
			})
		},
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
		convertPrice(service) {
			var price = parseInt(service.price)
			 
			return price.toFixed(2)
		},
		showViewForm(service) {
			window.location.href = 'service/findService/'+ service.id
		},
		hideAddForm() {
			app.title = 'Service Management'
			$('#mainData').show()
			$('#addForm').hide()
			$('#viewForm').hide()
		},
		showAddForm() {
			app.title = 'Add new Service'
			$('#mainData').hide()
			$('#addForm').show() 
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
