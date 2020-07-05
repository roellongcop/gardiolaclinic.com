Vue.component('my-table', {
	template: `
		<div>
			<vue-good-table 
				@on-select-all="allSelected" 
				@on-row-click="rowSelected"
				:columns="columns" :rows="rows" :select-options="{
				    enabled: true,
				    selectOnCheckboxOnly: true,  
				    selectionInfoClass: 'selected',
				    selectionText: 'rows selected',
				    clearSelectionText: 'unchecked',
				}" 
			  	:search-options="{enabled: true}" 
				:pagination-options="{
					enabled: true, perPage: 10, position: 'bottom', perPageDropdown: [10, 25, 50, 100],
					dropdownAllowAll: false,
					setCurrentPage: 1,
					nextLabel: 'next',
					prevLabel: 'prev',
					rowsPerPageLabel: 'Rows per page',
					ofLabel: 'of',
					allLabel: 'All',
				}"> 
			</vue-good-table>
		</div>
	`,

	props: {
		columns: Array,
		rows: Array,
	},
 
	methods: { 
	 	allSelected(data) {
	 		this.$emit('selected', data) 
	 	},
	 	rowSelected(data) { 
	 		this.$emit('selected', data)
	 	}, 
	},
}) 


 var myApp = new Vue({
	el: '#myApp',
	data: {
		activeUser     : '',
		image          : base_url + 'img/admin.png',
		logout         : base_url + 'admin/gate/logout',
		profile        : base_url + 'admin/user/profile',
		dashboard      : base_url + 'admin/dashboard',
		item           : base_url + 'admin/item',
		category       : base_url + 'admin/category',
		supplier       : base_url + 'admin/supplier',
		unit           : base_url + 'admin/unit',
		inventoryChart : base_url + 'admin/chart/inventory',
		package        : base_url + 'admin/package',
		reservation    : base_url + 'admin/reservation',
		service        : base_url + 'admin/service',
		images         : base_url + 'admin/image',
		about          : base_url + 'admin/about',
		opening        : base_url + 'admin/opening',
		patients       : base_url + 'admin/patient',
		carousel       : base_url + 'admin/carousel',
		reservationChart: base_url + 'admin/chart/reservation',
		users           : base_url + 'admin/user/adminUsers',

	},
	mounted() {
		this.check_user() 
	},
 
	methods: {  
		check_user() {
			$.ajax({
				url : base_url + 'admin/user/check_user', 
				success: function(response) { 
					if (response == 'failed') {
						window.location.href = base_url 
					}
					else {
						myApp.activeUser = response
					}
				}
			}) 
		}
	}
});