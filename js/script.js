$(function() {
	$('#alertMe').click(function(e){
		e.perventDefault();
		console.log('abc');
		$('#successAlert').slideDown();
	});

});