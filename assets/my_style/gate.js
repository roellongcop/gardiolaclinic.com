var app = new Vue({
	el: '#loginPage',
	data:{
		user : {name: '', password: ''},
		error: false
	},

	methods: {
		login() {
			if (app.user.name != '' && app.user.password != '') {
				$.ajax({
					url : base_url + 'gate/login',
					data: app.user,
					method: 'post',
					success: function(response){
						if (response == 'ok')  {
							window.location.href = base_url + 'counter'
						}
						else {
							app.error = true
							app.user = {name: '', password: ''}
						}
					}
				})
			}
			else {
				app.error = true
				app.user = {name: '', password: ''}
			}
		},
	}
});
