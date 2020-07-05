 
var app = new Vue({
	el: '#home',
	data: {
		services: [],
		card1: '', 
		description: '', 
		happyPatients: 0,
		clinicName: ''
	},
	mounted() {
		this.getClinicName()
		this.getServices()
		this.getClinicDescription()
		this.getHappyPatients()
	},
	methods: { 
		getClinicName() {
			$.ajax({
				url: base_url + 'site/home/getClinicName',
				dataType: 'json',
				success: function(name) {
					app.clinicName = name
				}
			})
		},
		getHappyPatients() {
			$.ajax({
				url: base_url + 'site/home/getHappyPatients',
				dataType: 'json',
				success: function(happyPatients) {
					app.happyPatients = happyPatients
				}
			})
		},
		createBG(index) {
			if(index == 0) {
				return "col-lg-3 col-md-3 col-sm-3 col-xs-12 service bg-primary-2"
			}
			else if(index == 1) {
				return "col-lg-3 col-md-3 col-sm-3 col-xs-12 service bg-child-2"
			}
			else if(index == 2) {
				return "col-lg-3 col-md-3 col-sm-3 col-xs-12 service bg-child-3"
			}
			else if(index == 3) {
				return "col-lg-3 col-md-3 col-sm-3 col-xs-12 service bg-child-4"
			}
		},
		getServices() {
			$.ajax({
				url: base_url + 'site/home/getDashboardServices',
				dataType: 'json',
				success: function(services) {
					app.services = services
				}
			})
		},
		getClinicDescription() {
			var self = this
			$.ajax({
				url: base_url + 'site/home/getClinicDescription',
				dataType: 'json',
				success: function(description) {
					self.description = description
				}
			})
		}
	}
})



 
 