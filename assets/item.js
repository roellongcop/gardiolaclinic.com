Vue.component('add-form', {
	template: `
		<div class="myModal">
		    <div class="modalContainer">
		        <div class="modalHeader">
		            <button class="close" @click="close">&times;</button>
		            <h4 class="modal-title"><span class="fa fa-plus"></span> Add Item</h4>
		        </div>
		        <div class="modalBody">
		            <div class="form-group">
		                <div class="form-group">
		                    <label for="usr">Item Name:</label>
		                    <input v-model="item.name" type="text" class="form-control">
		                </div>
		                <div class="form-group">
		                    <label for="sel1">Quantity:</label>
		                    <input v-model="item.qty" class="form-control" type="number" min="1">
		                </div>
		                <div class="form-group">
		                    <label for="sel1">Maximum Stock:</label>
		                    <input v-model="item.max" class="form-control" type="number" min="1">
		                </div>
		                <div class="form-group">
		                    <label for="sel1">Minimum Stock:</label>
		                    <input v-model="item.min" class="form-control" type="number" min="0">
		                </div>

		                <div class="form-group">
		                    <label for="usr">Brand Name:</label>
		                    <input v-model="item.brand" type="text" class="form-control">
		                </div>
		                <div class="form-group">
		                    <label for="usr">Description:</label>
		                    <textarea v-model="item.description" class="form-control"></textarea> 
		                </div>
		            </div>
		        </div>
		        <div class="modalFooter">
		            <div class="footerBtn pull-right">
		                <button @click="saveItem" class="btn btn-primary">
		                	Save Item
		                </button>
		            </div>
		        </div>
		    </div>
		</div>
	`,
	data() {
		return {
			item: {
				name: '',
				qty: '',
				max: '',
				min: '',
				brand: '',
				description: ''
			}
		}
	},
	methods: {
		close() {
			this.$emit('close')
		},
		saveItem() {
			var self = this
			$.ajax({
				url: base_url + 'admin/item/saveItem',
				data: this.item,
				method: 'post',
				success: function(response) {
					self	.$emit('close')
					window.location.href = base_url + 'admin/item'
				}
			})
		}
	}
})




new Vue({
	el: '#items',
	data: { 
		services: [],
		items: [],
		addForm: false
	},

	// mounted() {
	// 	this.getServices()
	// },
 
	methods: { 

		// getServices() {
		// 	var self = this
		// 	$.ajax({
		// 		url: base_url + 'admin/item/getServices',
		// 		dataType: 'json',
		// 		success: function(services) {
		// 			self.services = services
		// 		}
		// 	})
		// }
	}

})