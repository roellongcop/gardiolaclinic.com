Vue.component('print-header', {
	template: `
		<div>
			<center>
                <h3>
                     <img style="float:center;" width="50" height="50" :src="src"> 
                        {{ clinicName }}
								</h3>
								<date></date>
								
                <h4>INVENTORY CHART</h4>
           </center><br><br><br>
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
	},
})
var app = new Vue({
	el: '#chartPage',
	data: {
		filter: 'Category',
		type: 'tbl_category',
		labels: [],
		datas: [],
		tbl: 'tbl_category',
		by: 'category_id',
		options: [
			{value: 'tbl_category', text: 'by Category'},
			{value: 'tbl_supplier', text: 'by Supplier'},
			{value: 'tbl_unit', text: 'by Measurement'},
			{value: 'stock', text: 'by Stock'}
		],
	},
	mounted() {
		this.inventoryChart(this.tbl, this.by) 
	},
	methods:{    
		print() {
			$('#printHeader').show()
			$('.h').hide()
			window.print()
			$('.h').show()
			$('#printHeader').hide()
		},
		changeType() { 
			if (app.type == 'tbl_category') {
				app.by = 'category_id'
				app.filter = 'Category'
			}
			else if(app.type == 'tbl_supplier') {
				app.by = 'supplier_id'
				app.filter = 'Supplier'
			}
			else if(app.type == 'tbl_unit') {
				app.by = 'unit_id'
				app.filter = 'Unit of Measurement'
			}
			else { 
				app.filter = 'Stock Status'
				app.by = 'stock';
			}
			app.inventoryChart(app.type, app.by)
		},
		inventoryChart(tbl, by){
			$.ajax({
				url : base_url + 'admin/chart/inventory_chart/' + tbl + '/'+  by,
				dataType: 'json',
				success: function(response){ 
					app.labels = response.label
					app.datas = response.data  
					document.getElementById('canvas').innerHTML = '<canvas id="inventoryChart"></canvas>'
					var ctx = document.getElementById("inventoryChart")
				    var mybarChart = new Chart(ctx,{
				        type: 'bar',
				        data:{
				            labels: response.label,
				            datasets:[{
				                label           : "Total",
				                backgroundColor : "#03586A",
				                data            : response.data
				            }]
				        },
				        options: { scales:{ yAxes:[{ ticks:{ beginAtZero: true } }] } }
				    })
				}
			})
 
		},    
	}
});

$('#printHeader').hide()


