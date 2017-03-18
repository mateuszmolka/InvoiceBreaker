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
    
//    Invoice number and date
    var invoiceNumber= $('#invoice-number');
    var invoiceDate= $('#invoice-date');
    
    var date=new Date();
    var today= date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    var number= "number/"+(date.getMonth()+1)+"/"+date.getFullYear();
    
    invoiceDate.val(today);
    invoiceNumber.val(number);
    
    
})