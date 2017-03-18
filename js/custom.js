'use strict';

$(function(){
    /*Efekt smooth scroll*/
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
    
    if ($(window).scrollTop() >= 71) {
			$('#main-nav').addClass('scroll')
			
	}
	
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 71) {
			$('#main-nav').addClass('scroll');
			$('#main-nav').css({'transition': 'all 0.3s' });
		}
		else {
			$('#main-nav').removeClass('scroll')
		}
	});
    
})