

Vue.component('totals', {
	template: `
		<div class="row top_tiles">
			<div class="animated flipInY col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<div class="tile-stats">
					<div class="icon"><i class="fa fa-group"></i></div>
					<div class="count">{{ totals.patients }}</div>
					<h3>Patients</h3>
					<p>Registered patients</p>
				</div>
			</div>
			<div class="animated flipInY col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<div class="tile-stats">
					<div class="icon"><i class="fa fa-pencil"></i></div>
					<div class="count">{{ totals.reservations }}</div>
					<h3>Reservations</h3>
					<p>Pending Reservations.</p>
				</div>
			</div>
			<div class="animated flipInY col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<div class="tile-stats">
					<div class="icon "><i class="fa fa-wrench"></i></div>
					<div class="count">{{ totals.items }}</div>
					<h3>Inventory Items</h3>
					<p>Total Inventory Items.</p>
				</div>
			</div> 
		</div>
	`,
	props: {
		totals: Object
	}
})
var app = new Vue({
	el: '#dashboardPage',
	data: {
		year   : new Date().getFullYear(),
		labels : [
			'January','February','March','April','May','June',
			'July','August','September','October','November','December'
		],
		totals : {}, 
		reservations: []
	}, 
	mounted() {
		this.stockChart()
		this.reservationChart() 
		this.getTotals() 
	},
	methods:{ 
		 
		getTotals(){
			$.ajax({
				url : base_url + 'admin/dashboard/getTotals',
				dataType: 'json',
				success: function(totals) { 
					app.totals = totals
				}
			})
		},
		
		stockChart(){
			$.ajax({
				url : base_url + 'admin/dashboard/stock_chart',
				dataType: 'json',
				success: function(response){ 
					var ctx = document.getElementById("stockChart")
					var mybarChart = new Chart(ctx,{
						type: 'pie',
						data:{
							labels: ['Empty', 'Critical', 'Safe', 'Full'],
							datasets:[{
								label           : ["Empty", "Critical", "Safe", "Full"],
								backgroundColor : ["#e64f46","#eeae4a","#03586A","#5eb854"],
								data            : response
							}]
						},
					});
				}
			})
		},   
		reservationChart(){
			$.ajax({
				url : base_url + 'admin/dashboard/getReservationChart',
				dataType: 'json',
				success: function(response){ 
					app.reservations = response
					document.getElementById('canvas').innerHTML = '<canvas id="reservationChart"></canvas>'
					var ctx = document.getElementById("reservationChart")
					var mybarChart = new Chart(ctx,{
						type: 'bar',
						data:{
							labels: app.labels,
							datasets:[{
								label           : "Total",
								backgroundColor : "#03586A",
								data            : app.reservations
							}]
						},
						options: { scales:{ yAxes:[{ ticks:{ beginAtZero: true } }] } }
					}); 
				}
			});
		} 
	}
});



