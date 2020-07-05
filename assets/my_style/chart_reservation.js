Vue.component('print-header', {
	template: `
		<div>
			<center>
				<h3><img style="float:center;" width="50" height="50" :src="src">{{ clinicName }}</h3>
				<date></date>
				
				<h4>RESERVATION CHART</h4>
    	</center>

			<br><br><br>

		</div>
	`,
	data() {
		return {
			src: base_url + 'assets/assets/images/logo.svg'
		}
	},
	computed: {
		clinicName() {
			return clinic_name
		}
	}
})
var app = new Vue({
	el: '#chartPage',
	data: {
		year: new Date().getFullYear(),
		totals: [],
		labels : [],
		selectedYear: new Date().getFullYear(),
	},
	mounted() {
		this.reservationChart(this.year)
	},
	methods:{
		print() {
			$('#printHeader').show()
			$('.h').hide()
			window.print()
			$('.h').show()
			$('#printHeader').hide()
		},
		createChart() {
			app.reservationChart(app.selectedYear)
		},
	    reservationChart(year){
			$.ajax({
				url : base_url + 'admin/chart/getReservationChart',
				data: {year: year},
				method: 'post',
				dataType: 'json',
				success: function(response) {
					app.totals = response.totals
					app.labels = response.services
					document.getElementById('canvas').innerHTML = '<canvas id="reservationChart"></canvas>'
					var ctx = document.getElementById("reservationChart")
				    var mybarChart = new Chart(ctx,{
				        type: 'bar',
				        data:{
				            labels: app.labels,
				            datasets:[{
				                label           : "Total",
				                backgroundColor : "#03586A",
				                data            : app.totals
				            }]
				        },
				        options: { scales:{ yAxes:[{ ticks:{ beginAtZero: true } }] } }
				    });
				}
			});
		}
	}
});



$('#printHeader').hide()
