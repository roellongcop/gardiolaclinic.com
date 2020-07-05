 
var app = new Vue({
	el: '#el-contact',
	data: {
		contact: [],
	},
	mounted() {
		this.getContacts()
	},
	methods: {
		getContacts() {
			$.ajax({
				url: base_url + 'site/home/getContacts',
				dataType: 'json',
				success: function(contact) {
					app.contact = contact
					console.log(contact)
				}
			})
		}
	}
})