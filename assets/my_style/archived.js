var title = '';
var columns = [];
var tbl = '';
var el = ''

if (document.getElementById('archived-units')) {
	el = '#archived-units';
	title = 'Archived Unit of Measurement';
	columns = [
		{ label: 'NAME', field: 'name',  sortable: false }
	];
	tbl = 'tbl_unit';
}

if (document.getElementById('archived-suppliers')) {
	el = '#archived-suppliers';
	title = 'Archived SUppliers';
	columns = [
		{ label: 'NAME', field: 'name',  sortable: false },
    	{ label: 'TELEPHONE', field: 'telephone',  sortable: false,  type: 'number'},
    	{ label: 'ADDRESS', field: 'address',  sortable: false }
	];
	tbl = 'tbl_supplier';
}


if (document.getElementById('archived-items')) {
	el = '#archived-items';
	title = 'Archived Items';
	columns = [
		{ label: 'NAME', field: 'name',  sortable: false },
    	{ label: 'QUANTITY', field: 'quantity',  sortable: false },
    	{ label: 'UNIT', field: 'unit_name',  sortable: false },
    	{ label: 'PRICE (PHP)', field: 'price',  sortable: false },
    	{ label: 'CATEGORY', field: 'category_name',  sortable: false },
    	{ label: 'SUPPLIER', field: 'supplier_name',  sortable: false },
    	{ label: 'STATUS', field: 'stock',  sortable: false, html: true }
	];
	tbl = 'tbl_item';
}

if (document.getElementById('archived-appointments')) {
	el = '#archived-appointments';
	title = 'Archived Appointments';
	columns = [
		{ label: 'FULLNAME', field: 'fullname',  sortable: false },
    	{ label: 'DATE', field: 'daystart',  sortable: false },
    	{ label: 'TIME', field: 'timestart',  sortable: false },
    	{ label: 'TYPE OF SERVICE', field: 'typeser',  sortable: false },
    	{ label: 'RECOMMENDATION', field: 'recommendation',  sortable: false }
	];
	tbl = 'tbl_reservation';
}

if (document.getElementById('archived-openings')) {
	el = '#archived-openings';
	title = 'Archived Opening Hours';
	columns = [
		{ label: 'DAY', field: 'day',  sortable: false },
    	{ label: 'OPEN', field: 'open',  sortable: false },
    	{ label: 'CLOSE', field: 'close',  sortable: false }
	];
	tbl = 'tbl_opening';
}

if (document.getElementById('archived-services')) {
	el = '#archived-services';
	title = 'Archived Services';
	columns = [
		{ label: 'NAME', field: 'name',  sortable: false },
    	{ label: 'PRICE', field: 'price',  sortable: false }
	];
	tbl = 'tbl_service';
}

if (document.getElementById('archived-abouts')) {
	el = '#archived-abouts';
	title = 'Archived About Clinic Information';
	columns = [
		{ label: 'NAME', field: 'name',  sortable: false },
		// { label: 'DESCRIPTION', field: 'description',  sortable: false, html: true }
	];
	tbl = 'tbl_about';
}

if (document.getElementById('archived-users')) {
	el = '#archived-users';
	title = 'Archived Admin Users';
	columns = [
		{ label: 'FULLNAME', field: 'fullname',  sortable: false },
    	{ label: 'ADDRESS', field: 'address',  sortable: false },
    	{ label: 'EMAIL', field: 'email',  sortable: false },
    	{ label: 'MOBILE NO', field: 'cp_num',  sortable: false },
    	{ label: 'SEX', field: 'gender',  sortable: false },
    	{ label: 'USERTYPE', field: 'type',  sortable: false },
    	{ label: 'USERNAME', field: 'username',  sortable: false }
	];
	tbl = 'tbl_account';
}

if (document.getElementById('archived-packages')) {
	el = '#archived-packages';
	title = 'Archived Packages';
	columns = [
		{ label: 'NAME', field: 'name',  sortable: false },
		{ label: 'SERVICE NAME', field: 'service_name',  sortable: false },
	];
	tbl = 'tbl_package';
}




var app = new Vue({
	el: el,
	data: {
		selected : [],
		title: title,
		columns: columns,
        rows: []
	},
	mounted() {
		this.get()
	},
	methods: {

		notify(type, message) {
			new PNotify({
				title: type.toUpperCase(),
				type: type,
				text: message,
				nonblock: {nonblock: true},
				styling: 'bootstrap3',
			});
		},
		getSelected(data) {
 			app.selected = data.selectedRows;
	 	},
	 	get() {
	 		$.ajax({
	 			url: base_url + 'admin/archived/get',
	 			data: {tbl: tbl},
	 			method: 'post',
	 			dataType: 'json',
	 			success: function(response) {
	 				app.rows = response
	 				console.log(response)
	 			}
	 		})
	 	},
	 	restore() {
	 		if (app.selected.length == 0) {
	 			app.notify('danger', 'No Data Selected');
	 		}
	 		else {
		 		$.ajax({
		 			url: base_url + 'admin/archived/restore',
		 			data: {selected: app.selected, tbl: tbl},
		 			method: 'post',
		 			dataType: 'json',
		 			success: function(response) {
		 				if (response.status) {
		 					app.notify('success', response.message)
		 				}
		 				else {
		 					app.notify('danger', response.message)
		 				}
		 				app.get();
	 					app.selected = [];
		 			}
		 		})
	 		}
	 	},
	}
})
