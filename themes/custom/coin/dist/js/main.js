$(document).ready(function(e){function s(){window.pageYOffset>t?o.classList.add("sticky"):o.classList.remove("sticky")}window.onscroll=function(){s()};var o=document.getElementById("myHeader"),t=o.offsetTop;e("#logo-carousel").owlCarousel({loop:!0,margin:30,nav:!0,center:!0,items:7,responsive:{0:{items:1},600:{items:3},1e3:{items:7}}}),e("#testimonial-carousel").owlCarousel({loop:!0,margin:30,nav:!1,center:!0,items:1}),e("#blog-carousel").owlCarousel({loop:!1,margin:30,nav:!0,navText:["<div class='owl-prev'>PREV</div>","<div class='owl-next'>NEXT</div>"],dots:!1,responsive:{0:{items:1},600:{items:3},1e3:{items:3}}}),e("#slider").slick({lazyLoad:"ondemand",infinite:!0,dots:!0,prevArrow:!1,nextArrow:!1,autoplay:!0,autoplaySpeed:7e3,fade:!0,speed:500,infinite:!0,cssEase:"ease-in-out",touchThreshold:100}),e(".cycle-pager span").length<=1&&e(this).hide()}),$("a").each(function(){var e=$(this);0==e.html().replace(/\s|&nbsp;/g,"").length&&e.remove()}),$("p").each(function(){var e=$(this);0==e.html().replace(/\s|&nbsp;/g,"").length&&e.remove()}),$(".cycle-slideshow").each(function(){1===$(this).children("img").length&&$(this).siblings(".cycle-pager").hide()});