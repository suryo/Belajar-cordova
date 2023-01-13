$(document).ready(function() {

	// saat notifikasi subscribe di klik
	$('#notifikasiSubscribe a').click(function() {
		$('#notifikasiSubscribe').collapse('hide');
	});

	// saat tombol close popup di klik
	$('.popup .btn-close').click(function() {
		$('#notifikasiSubscribe').collapse('show');
	});

})