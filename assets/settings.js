var app = new Vue({
	el: '#settings',
	data: {
		newUsername: null,
		newPassword: '',
		confirmPassword: '',
		profile: {},
		message: ''
	},
	mounted() {
		this.getProfileInformation()
	}, 
	methods: {
		notify(message) {
			new PNotify({
				title: "Success",
				type: "success",
				text: message,
				nonblock: {nonblock: true},
				addclass: 'dark',
				styling: 'bootstrap3', 
			});
		},
		updateCredentials() {
			$.ajax({
				url: base_url + 'site/home/updateCredentials',
				data: {id: app.profile.id, username: app.profile.username, password: app.newPassword},
				method: 'post',
				success: function(response) {
					app.getProfileInformation()
					app.notify('Credentials Updated')
					app.newPassword = ''
					app.confirmPassword = ''
				}
			})
		},
		updateProfile() {
			$.ajax({
				url: base_url + 'site/home/updateProfile',
				data: app.profile,
				method: 'post',
				success: function(response) {
					app.getProfileInformation()
					app.notify('Profile Updated')
				}
			})
		},
		getProfileInformation() {
			$.ajax({
				url: base_url + 'site/home/getProfileInformation',
				dataType: 'json',
				success: function(profile) {
					app.profile = profile 
				}
			})
		} ,
		isPasswordMatch() {
			return (this.newPassword == this.confirmPassword)
		}
	}

})