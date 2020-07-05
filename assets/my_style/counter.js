
 
var app = new Vue({
	el: '#counterPage',
	data:{
		items: [],
		selected: {}, 
		scan: '',
		orders: [],
		totalAmount: 0,
		customerID:  '',
		amountReceive: '',
		heads: ['PRODUCT', 'AVAILABLE', 'QTY', 'PRICE/UNIT', 'SUBTOTAL (PHP)', 'ACTION'],
	},

	mounted() {
		this.getItems()
	},


	methods:{   
		reset(){
			app.selected = {}
			app.scan = ''
			app.orders = []
			app.totalAmount = 0
			app.customerID =  ''
			app.amountReceive = ''
			sessionStorage.currentOrder = ''
		}, 
		updateItems(){
			$.ajax({
				url: base_url + 'counter/update_items',
				data: {orders: app.orders},
				method: 'post',
				success: function(response){ 
					app.getItems() 
				}
			})
		},
		saveSale(){
			if (Number(app.amountReceive >= Number(app.totalAmount) && app.amountReceive != 0)) {
				app.updateItems()
				var purchasedItems = '';
				for(i in app.orders) {
					purchasedItems += ' ('+app.orders[i].qty+') ' + app.orders[i].name
					purchasedItems += ' = ' + (app.orders[i].price * app.orders[i].qty).toFixed(2)  
					purchasedItems += '<br>'
				}
				$.ajax({
					url : base_url + 'counter/insert_sale',
					method: 'post',
					data: {
						customer_id: app.customerID, 
						item: purchasedItems, 
						total: app.totalAmount
					},
					success: function(response){
						app.reset()
					}
				}) 
			}
			else {
				alert('Insufficient Money Received!')
			}
			
		},                              
		totalOrder(){
			sessionStorage.currentOrder = JSON.stringify(app.orders)
			var total = 0.00
			for(x in app.orders){
				total += parseInt(app.orders[x].qty) * parseFloat(app.orders[x].price)
			}
			app.totalAmount = total.toFixed(2)
			
		},
		checkQuantity(index){
			var qty = parseInt(app.orders[index].qty)
			var limit = parseInt(app.orders[index].limit)
			if (qty > limit) {
				alert('Input Quantity Exceeded.\nAvailable Stock is : ' + app.orders[index].limit)
				app.orders[index].qty = app.orders[index].limit
			}
			else if(qty <= 0) {
				alert('Invalid Quantity!!!')
				app.orders[index].qty = 1
			}
			app.totalOrder()
		},
		removeOrder(index){
			app.orders.splice(index, 1)
			app.totalOrder()
		},

		checkScan(item){
			for(i in app.orders){
				if (item.id == app.orders[i].id) {
					alert('Already Ordered!\nItem: ' + item.name)
					return true
				}
			}
		},

		searchItem() {
			for(index in app.items) {
				if (app.items[index].serial == app.scan) {
					if (parseInt(app.items[index].quantity) > 0) {
						if (! app.checkScan(app.items[index])) {
							var order = {
								id: app.items[index].id, 
								name: app.items[index].name, 
								qty: 1, 
								price: app.items[index].price , 
								limit: app.items[index].quantity
							}
							app.orders.unshift(order)
							app.totalOrder()
						}
					}
					else {
						alert('WARNING!!!\nItem: '+ app.items[index].name + 
							'\nStatus:  Out of Stock')
					}
					app.scan = ''
				}
			}
			app.scan = ''
		},

		addToCart() {
			var index = $('#selected').val()
			app.selected = app.items[index]
			if (app.selected.quantity > 0) {
				if (! app.checkScan(app.selected)) {
					var order = {
						id: app.selected.id, 
						name: app.selected.name, 
						qty: 1, 
						price: app.selected.price , 
						limit: app.selected.quantity
					}
					app.orders.unshift(order)
					app.totalOrder()
				}
			}
			else {
				alert('WARNING!!!\nItem: '+ app.selected.name +  '\nStatus:  Out of Stock')
			}
			app.selected = {}
		},  

		getItems(){ 
			$.ajax({
				url : base_url + 'counter/get',
				dataType: 'json',
				success: function(response){ 
					app.items = response
					if (sessionStorage.currentOrder) {
						app.orders = JSON.parse(sessionStorage.currentOrder)
					}
					app.getCustomerID()
					app.totalOrder()
				}
			})
		}, 

		getCustomerID() {
			$.ajax({
				url: base_url + 'counter/get_customer_id',
				success: function(response) {
					app.customerID = response
				}
			})
		}
	}
})






