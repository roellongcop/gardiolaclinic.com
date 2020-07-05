var app = new Vue({
	el: '#booked-appointment',
	data: {
		fullDates: [],
		appointments: [],
		book: {date: '', time: '', service: ''},
		activeDate: '',
		availableTime: [],
		services: [],
		terms: '',
		servicePrice: '',
		reserved: false
	},
	mounted() {
		this.isTherePending()
		this.getTermsAndConditions()
		this.getFullDates()
		this.getServices()
	},
	methods: {
		checkDate() {
			if(! app.book.date) {
				app.notify('danger', 'Select Date First')
			}
		},
		checkDateTime() {
			if(! app.book.date || ! app.book.time) {
				app.notify('danger', 'Select Date and Time First')
			}
		},
		checkDateTimeService() {
			if(! app.book.date || ! app.book.time || ! app.book.service) {
				app.notify('danger', 'Select Date, Time and Service First')
			}
		},
		isTherePending() {
			$.ajax({
				url: base_url + 'site/home/checkIfReserved',
				dataType: 'json',
				success: function(boolean) {
					if (boolean == 'true') {
						app.reserved = true
					}
					else {
						app.reserved = false
					}
				}
			})
		},
		notify(type, message) {
			new PNotify({
				title: type.toUpperCase(),
				type: type,
				text: message,
				nonblock: {nonblock: true},
				addclass: 'dark',
				styling: 'bootstrap3',
			});
		},
		bookedAppointment() {
			$.ajax({
				url: base_url + 'site/home/bookedAppointment',
				method: 'post',
				data: app.book,
				success: function(response) {
					app.isTherePending()
					app.notify('success', 'Your Appoinment was successfully Booked\n Just wait for an email of approval')
					$('#to-step1').click()
					app.book = {date: '', time: '', service: ''}
				}
			})
		},
		checkBook() {
			return (app.book.date != '' && app.book.time != '' && app.book.service != '')
		},
		getTermsAndConditions() {
			$.ajax({
				url: base_url + 'site/home/getTermsAndConditions',
				dataType: 'json',
				success: function(terms) {
					app.terms = terms
				}
			})
		},
		gotoFinished() {
			if(! app.book.date || ! app.book.time || ! app.book.service) {
				app.notify('danger', 'Select Date, Time and Service First')
			}
			else {
				$('#to-step5').click()
			}
		},
		gotoServices() {
			$('#to-step3').click()
		},
		gotoTerms(service) {
			app.book.service = service.name
			app.servicePrice = service.price
			$('#to-step4').click()
		},
		getServices() {
			$.ajax({
				url: base_url + 'site/home/getServices',
				dataType: 'json',
				success: function(services) {
					app.services = services
				}
			})
		},
		getFullDates() {
			$.ajax({
				url: base_url + 'site/home/getFullDates',
				dataType: 'json',
				success: function(dates) {
					app.fullDates = dates
					app.createCalendar()
				}
			})
		},
		setAvailableTime() {
			app.appointments = []
			app.availableTime = [
				'8:00 AM - 9:00 AM',
				'9:00 AM - 10:00 AM',
				'10:00 AM - 11:00 AM',
				'11:00 AM - 12:00 PM',
				'1:00 PM - 2:00 PM',
				'2:00 PM - 3:00 PM',
				'3:00 PM - 4:00 PM',
				'4:00 PM - 5:00 PM'
			]
		},
		findApointments(date) {
			app.book.date = moment(date).format('YYYY/MM/DD');
			app.setAvailableTime()
			$.ajax({
				url: base_url + 'site/home/findApointments',
				data: {date: app.book.date},
				method: 'post',
				dataType: 'json',
				success: function(response) {
					for(index in response) {
						// if (app.availableTime.includes(response[index].timestart)) {
							for(x in app.availableTime) {
								if (app.availableTime[x] == response[index].timestart) {
									app.availableTime.splice(x, 1)
								}
							}
						// }
					}
					app.appointments = app.availableTime
				}
			})
		},
		createCalendar() {
			var self = this
			if( typeof ($.fn.fullCalendar) === 'undefined'){ return; }

			var calendar = $('#calendar').fullCalendar({
				header: {
					left: 'prev,next today',
					center: 'title',
					right: 'month,agendaWeek,agendaDay,listMonth'
				},
				selectable: true,
				selectHelper: true,
				select: function(start, end, allDay) {
					// console.log(moment(start._d).format('YYYY/MM/DD'))

					if (moment(start._d).format('YYYY/MM/DD') > moment(new Date()).format('YYYY/MM/DD')) {
						if (app.reserved) {
							app.notify('danger', 'you already have an UNFINISHED appoinment request')
						}
						else {
							self.findApointments(start._d)
							$('#to-step2').click()
						}
					}
					else {
						app.notify('danger', 'Date Invalid\n Previous Dates are disabled')
					}
				},
				dayRender: function (date, cell) {
	    			var check = moment(date).format('YYYY/MM/DD');
					for (var i in self.fullDates) {
						if (check == self.fullDates[i]) {
							cell.css("background-color","#ed503f");
						}
					}
				}
			});
		}
	}
})
