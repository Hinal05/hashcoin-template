$(document).ready(function ($) {
	// Sticky header at a time of scrolling
	window.onscroll = function () { myFunction() };

	var header = document.getElementById("myHeader");
	var sticky = header.offsetTop;

	function myFunction() {
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	}
	// Client logo owl carousel
	$('#logo-carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		center: true,
		items: 7,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 7
			}
		}
	})
	// Testimonial logo owl carousel
	$('#testimonial-carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		center: true,
		items: 1,
	})
	// Blog logo owl carousel
	$('#blog-carousel').owlCarousel({
		loop: false,
		margin: 30,
		nav: true,
		navText: ["<div class='owl-prev'>PREV</div>", "<div class='owl-next'>NEXT</div>"],
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	})
	// Slick slider for banner
	$("#slider").slick({
		lazyLoad: 'ondemand', // ondemand progressive anticipated
		infinite: true,
		dots: true,
		prevArrow: false,
		nextArrow: false,
		autoplay: true,
		autoplaySpeed: 7000,
		fade: true,
		speed: 500,
		infinite: true,
		cssEase: 'ease-in-out',
		touchThreshold: 100
	});
	if ($(".cycle-pager span").length <= 1) {
		$(this).hide();
	}
});
// Remove blank a tags
$('a').each(function () {
	var $this = $(this);
	if ($this.html().replace(/\s|&nbsp;/g, '').length == 0)
		$this.remove();
});
// Remove blank p tags
$('p').each(function () {
	var $this = $(this);
	if ($this.html().replace(/\s|&nbsp;/g, '').length == 0)
		$this.remove();
});