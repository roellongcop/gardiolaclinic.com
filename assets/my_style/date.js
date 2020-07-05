Vue.component('date', {
  template: `
    <h4>{{ current_date }}</h4>
  `,
  data() {
    var months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();

    day = (Number(day) <= 9)? '0' + day : day;

    return {
      current_date: months[month] + ' ' + day + ', ' + year
    }
  }
});

