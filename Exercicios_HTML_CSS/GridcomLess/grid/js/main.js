$( ".dropdown" ).click(function(){
	if ($(this).find('ul').hasClass('fechada')) {
	    $(this).find('ul').animate( { height: "300px" }, { queue: false, duration: 300 }).removeClass('fechada').addClass('aberta');
	    $(this).find('ul li.option').fadeIn();
	} else {
		$(this).find('ul').animate( { height: "48px" }, { queue: false, duration: 300 }).removeClass('aberta').addClass('fechada');
		$(this).find('ul li.option').fadeOut();
	}
});
