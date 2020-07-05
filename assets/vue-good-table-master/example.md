Vue.component('my-table', {
  template: `
    <div>
      <vue-good-table 
        @on-select-all="allSelected" 
        @on-row-click="rowSelected"
        :columns="columns" 
        :rows="rows" 
        :select-options="{
          enabled: true,
          selectOnCheckboxOnly: true,  
          selectionInfoClass: 'selected',
          selectionText: 'rows selected',
          clearSelectionText: 'unchecked',
        }" 
        :search-options="{enabled: true}" 
        :pagination-options="{
          enabled: true, 
          perPage: 10, 
          position: 'bottom', 
          perPageDropdown: [10, 25, 50, 100],
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
    rows: Array
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



new Vue({
  el: '#app',
  data:{ 
    selected : [], 
    rows : [
      {id: 1, name: 'roel', telephone: '09078267471', address: 'San Jose'},
      {id: 2, name: 'annabelle', telephone: '0902735171', address: 'GMA'}
    ], 
    columns: [
      { label: 'NAME', field: 'name',  sortable: false },
      { label: 'TELEPHONE', field: 'telephone',  sortable: false,  type: 'number'},
      { label: 'ADDRESS', field: 'address',  sortable: false }
    ]
  },
  methods: {
    getSelected(data) { 
      app.selected = data.selectedRows 
    }, 
  }
})



<!-- HTML -->
<!DOCTYPE html>
<html>
<head>
  <title>TAble</title>
</head>
<body>
  <div id="app">
    <my-table :columns="columns" :rows="rows" @selected="getSelected"></my-table>
    <h2>Selected</h2>
    {{ selected }}
  </div>
</body>
</html>
