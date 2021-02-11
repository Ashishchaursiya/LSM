 function myFunction(x) {
 
  if (x.matches) { // If media query matches
$(document).ready(function() {
 $('.swiper-button-prev,.swiper-button-next').remove();
});
      var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } 
else {
       var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: false,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


//fixed footer 
$(window).scroll(function(e){ 
  var $el = $('#contact'); 
  if ($(this).scrollTop() > 150 ){ 
    $el.css({'display': 'block'}); 
  }
 
   if ($(this).scrollTop() < 150){
    $el.css({'display': 'none'}); 
  } 
});
 
 
