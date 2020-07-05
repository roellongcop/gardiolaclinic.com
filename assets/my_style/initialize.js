// $('.data').DataTable({
// 	sort: 'desc'
// });
$('.btn').tooltip();
$('.tip').tooltip();
$('.select2').select2();
$('.alert').fadeOut(7000);
$('#quick_search').focus();
// $('#flat').iCheck();
$('#myDatepicker').datetimepicker({
    ignoreReadonly: true,
    allowInputToggle: true
});

$('.datepicker').datetimepicker({
    format: 'YYYY/MM/DD',
    minDate: new Date()
});


// $('input.flat').iCheck({checkboxClass: 'icheckbox_flat-green'});
// Table
$('table input').on('ifChecked', function () {
	$(this).parent().parent().parent().addClass('selected');
});

$('table input').on('ifUnchecked', function () {
	$(this).parent().parent().parent().removeClass('selected');
});

$('#timePicker1').datetimepicker({ format: 'hh:mm A'  });
$('#timePicker2').datetimepicker({ format: 'hh:mm A'  });
