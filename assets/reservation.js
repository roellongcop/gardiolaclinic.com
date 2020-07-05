Vue.component('line-break', {
	template: `
		<div class="row">
			<div class="col-md-12 col-sm-12 col-xs-12"><br></div>
		</div>
	`
});

Vue.component('reservations', {
	template: `
		<div>
			<div class="container"><br>
				<h1 class="bold600 color-child-6">My Reservation List</h1>
				<table class="table table-bordered">
					<thead>
						<tr>
							<th>TYPE OF SERVICE</th>
							<th>DATE OF RESERVATION</th>
							<th>TIME</th>
							<th>STATUS</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="reservation in reservations" v-if="reservation.r_status != 'finished'">
							<td>{{ reservation.typeser }}</td>
							<td>{{ reservation.daystart }}</td>
							<td>{{ reservation.timestart }}</td>
							<td>{{ reservation.r_status }}</td>
						</tr>
					</tbody>
				</table><br> <br> <br> <br> <br> <br> <br> <br>
			</div>
		</div>
	`,
	props: {
		reservations: Array
	}
})
var app = new Vue({
	el: '#el-reservation',
	data: {
		reservations: [],
		items: [],
		selected: {},
		details: false,
		patient: {},
		reservationDetails: {},
		diagnosisTreatment: {},
		showImages: true
	},
	mounted() {
		this.getReservations()
		this.getPatientInformation()
	},
	computed: {
		clinicName() {
			return clinic_name
		},
	},
	methods: {
		parseData(data) {
			if (data) {
				return JSON.parse(data)
			}
			else {
				return [];
			}
		},
		path(img) {
			return base_url + img
		},
		getPatientInformation() {
			$.ajax({
				url: base_url + 'site/home/getPatientInformation',
				dataType: 'json',
				success: function(patient) {
					app.patient = patient
				}
			})
		},
		findItems(reservation) {
			app.showImages = true;
			app.details = true
			app.selected = reservation
			if (reservation.details) {

				this.reservationDetails = JSON.parse(reservation.details);
			}
			if (reservation.diagnosis_treatment) {
				this.diagnosisTreatment = JSON.parse(reservation.diagnosis_treatment);
			}


			$.ajax({
				url: base_url + 'site/home/findItems',
				data: {service_name: reservation.typeser},
				method: 'post',
				dataType: 'json',
				success: function(items) {
					app.items = JSON.parse(items)
				}
			})
		},
		print() {
			app.showImages = false;

			$('#tableData').printThis()
		},
		getReservations() {
			$.ajax({
				url: base_url + 'site/home/getReservations',
				dataType: 'json',
				success: function(reservations) {
					app.reservations = reservations
				}
			})
		}
	}
})
