jQuery(function ($) {
    'use strict';
	
	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 30){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	// Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "1199"
	});
	
	// Others Option For Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});

	// Language Switcher
	$(".language-option").each(function() {
        var each = $(this)
        each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
        var allOptions = $(".language-dropdown-menu").children('a');
        each.find(".language-dropdown-menu").on("click", "a", function() {
            allOptions.removeClass('selected');
            $(this).addClass('selected');
            $(this).closest(".language-option").find(".lang-name").html($(this).text());
        });
    })

	// Search Menu JS
	$(".navbar-nav .search-box").on("click", function(){
		$(".search-overlay").toggleClass("search-overlay-active");
	});
	$(".search-overlay-close").on("click", function(){
		$(".search-overlay").removeClass("search-overlay-active");
	});
	$(".others-options .search-box").on("click", function(){
		$(".search-overlay").toggleClass("search-overlay-active");
	});
	$(".search-overlay-close").on("click", function(){
		$(".search-overlay").removeClass("search-overlay-active");
	});

	// TweenMax JS
	$('.home-slides').mousemove(function(e){
		var wx = $(window).width();
		var wy = $(window).height();
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		var newx = x - wx/2;
		var newy = y - wy/2;
		$('.main-slides-content, .main-slides-image').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -.4;
			TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
		});
	});
	$('.hero-slides').mousemove(function(e){
		var wx = $(window).width();
		var wy = $(window).height();
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		var newx = x - wx/2;
		var newy = y - wy/2;
		$('.hero-slides-content').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -.4;
			TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
		});
	});

	// Home Slides
	$('.home-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		animateOut: 'fadeOut',
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>"
		],
	});

	// Hero Slides
	$('.hero-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		animateOut: 'fadeOut',
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>"
		],
	});

	// Department Slides
	$('.department-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		smartSpeed: 500,
		margin: 25,
		autoplayHoverPause: true,
		autoplay: true,
		
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 4
			}
		}
	});

	// Doctors Slides
	$('.doctors-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		smartSpeed: 500,
		margin: 25,
		autoplayHoverPause: true,
		autoplay: true,
		
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 4
			}
		}
	});

	// Testimonials Slides
	$('.testimonials-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 500,
		margin: 25,
		autoplayHoverPause: true,
		autoplay: true,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>"
		],

		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});

	// Partner Slides
	$('.partner-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoHeight: true,
		smartSpeed: 500,
		margin: 25,
		autoplayHoverPause: true,
		autoplay: true,
		
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 3
			},
			1200: {
				items: 6
			}
		}
	});

	// Gallery Slides
	$('.gallery-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoHeight: true,
		smartSpeed: 500,
		margin: 25,
		autoplayHoverPause: true,
		autoplay: true,
		
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	// Datepicker
	$("#datepicker, #datepicker-2").datepicker();

	// Selectize
    $(".selectize-filter").selectize({
        create: true,
        sortField: 'text'
    });

	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});
	
	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Count Time 
	function makeTimer() {
		var endTime = new Date("September 20, 2025 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 0);

	// Subscribe form
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			// handle the invalid form...
			formErrorSub();
			submitMSGSub(false, "Please enter your email correctly.");
		} 
		else {
			// everything looks good!
			event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = "validation-success";
		} 
		else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
	}
	// AJAX MailChimp
	$(".newsletter-form").ajaxChimp({
		url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		callback: callbackFunction
	});

	// TwentyTwenty JS
    $(function(){
        $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.5});
    });

	// AOS JS
	AOS.init();

	// WOW Animation JS
	if($('.wow').length){
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	}

	// Go to Top
	$(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 600) $('.go-top').addClass('active');
		if (scrolled < 600) $('.go-top').removeClass('active');
	});  
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});
	
	// Preloader JS
	jQuery(window).on('load',function(){
		jQuery(".preloader").fadeOut(500);
	});
}(jQuery));