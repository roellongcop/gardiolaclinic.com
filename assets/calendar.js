var app = new Vue({
	el: '#el-calendar',
	data: {
		fullDates: []
	},
	mounted() {
		this.getFullDates()
	},
	methods: {
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
					// alert(start)
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



 