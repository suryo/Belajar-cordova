$(document).ready(function () {

	// initial main wrapper padding bottom
	$('main.wrapper').addClass('pb-0');

	// hidden navtop on mobile
	$('#navtop').addClass('d-none d-lg-block');

	// hidden navdown
	$('#navdown').removeClass('d-lg-none');
	$('#navdown').addClass('d-none');

})