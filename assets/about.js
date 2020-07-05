 
var app = new Vue({
	el: '#about',
	data: {
		informations: [],
	},
	mounted() {
		this.getClinicInformation()
	},
	methods: {
		getClinicInformation() {
			$.ajax({
				url: base_url + 'site/home/getClinicInformation',
				dataType: 'json',
				success: function(informations) {
					app.informations = informations
				}
			})
		}
	}
})