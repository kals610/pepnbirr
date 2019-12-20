$(document).ready(function() {


	// Scroll Events
	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		// Activate menu
		if (wScroll > 20) {
			$('#main-nav').addClass('active');
			$('#slide_out_menu').addClass('scrolled');
		}
		else {
			$('#main-nav').removeClass('active');
			$('#slide_out_menu').removeClass('scrolled');
		};


		//Scroll Effects

	});


	// Navigation
	$('#navigation').on('click', function(e){
		e.preventDefault();
		$(this).addClass('open');
		$('#slide_out_menu').toggleClass('open');

		if ($('#slide_out_menu').hasClass('open')) {
			$('.menu-close').on('click', function(e){
				e.preventDefault();
				$('#slide_out_menu').removeClass('open');
			})
		}
	});


	// Price Table
	var individual_price_table = $('#price_tables').find('.individual');
	var company_price_table = $('#price_tables').find('.company');


	$('.switch-toggles').find('.individual').addClass('active');
	$('#price_tables').find('.individual').addClass('active');

	$('.switch-toggles').find('.individual').on('click', function(){
		$(this).addClass('active');
		$(this).closest('.switch-toggles').removeClass('active');
		$(this).siblings().removeClass('active');
		individual_price_table.addClass('active');
		company_price_table.removeClass('active');
		$("#price-plan").css('height', '600px');

		$("#plan-title").stop().fadeOut("fast", function() {
			$(this).html('개인에서부터 기업까지.<br>작은 금액으로 시작해 새로운 판매 채널을 오픈하세요. 계약 기간이 길어질수록 할인율과 혜택이 주어집니다.').fadeIn("fast");
		});

	});

	$('.switch-toggles').find('.company').on('click', function(){
		$(this).addClass('active');
		$(this).closest('.switch-toggles').addClass('active');
		$(this).siblings().removeClass('active');
		company_price_table.addClass('active');
		individual_price_table.removeClass('active');
		$("#price-plan").css('height', '0px');

		$("#plan-title").stop().fadeOut("fast", function() {
			$(this).html('기업 전용 서비스.<br>완벽한 운영대행으로 일손을 줄여드립니다.<br>새로운 기능이 필요하시다고요?<br>도와드리겠습니다!').fadeIn("fast");
		});

	});


	// Wow Animations
    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();


    // Menu For Xs Mobile Screens
    if ($(window).height() < 450) {
    	$('#slide_out_menu').addClass('xs-screen');
    }

    $(window).on('resize', function(){
	    if ($(window).height() < 450) {
	    	$('#slide_out_menu').addClass('xs-screen');
	    } else{
	    	$('#slide_out_menu').removeClass('xs-screen');
	    }
    });


    // Magnific Popup
    $(".lightbox").magnificPopup();


	$("a.page-scroll").bind("click", function(a) {
		var o = $(this);

		if($(this).attr('href') == '#features') {
			if($(window).width() < 769) {
				var v = $(o.attr("href")).offset().top - 95;
			} else {
				var v = $(o.attr("href")).offset().top - 30;
			}


		} else if($(this).attr('href') == '#iphone-feature') {
			if($(window).width() < 769) {
				var v = $(o.attr("href")).offset().top - 95;
			} else {
				var v = $(o.attr("href")).offset().top - 30;
			}

		} else if($(this).attr('href') == '#map-feature') {
			if($(window).width() < 769) {
				var v = $(o.attr("href")).offset().top-95;
			} else {
				var v = $(o.attr("href")).offset().top - 30;
			}
		} else if($(this).attr('href') == '#iphone-screens') {
			if($(window).width() < 769) {
				var v = $("#iphone-screens").offset().top - 95;
			} else {
				var v = $("#iphone-screens").offset().top - 30;
			}
		} else {
			var v = $(o.attr("href")).offset().top - 100;
		}

		$("html, body").stop().animate({
			scrollTop: v
		}, 1250, "easeInOutExpo"), a.preventDefault()

	});



	$('.clipboard-btn').tooltip({
		trigger: 'click',
		placement: 'bottom'
	});

	function setTooltip(btn, message) {
		$(btn).tooltip('hide')
			.attr('data-original-title', message)
			.tooltip('show');
	}

	function hideTooltip(btn) {
		setTimeout(function() {
			$(btn).tooltip('hide');
		}, 1000);
	}

	// Clipboard
	var clipboard = new Clipboard('.clipboard-btn');
	clipboard.on('success', function(e) {
		setTooltip(e.trigger, 'Copied!');
		hideTooltip(e.trigger);
	});

	clipboard.on('error', function(e) {
		setTooltip(e.trigger, 'Failed!');
		hideTooltip(e.trigger);
	});


	// if(document.location.pathname == '/') {
	// 	//$("#header").css('min-height', (+340)+'px').css('height', '100%');
	// } else {
	// 	$("#header").css('min-height', ($(window).height())+'px').css('height', '50%');
	// }

	// $(window).resize(function() {
	// 	if(document.location.pathname == '/') {
	// 		//$("#header").css('min-height', (+340)+'px').css('height', '100%');
	// 	} else {
	// 		$("#header").css('min-height', ($(window).height())+'px').css('height', '50%');
	// 	}
	// });


	// force scroll
	/*
	var z = false;
	var c = true;
	$("#start-down").click(function() {
		c = false;
		var screenHeight = document.documentElement.clientHeight;
		var a = $("#header").outerHeight() - screenHeight;
		$("html, body").stop().animate({
			scrollTop: a
		}, 1250, "easeInOutExpo", function() {
			setTimeout(function() {
				z = true;
				c = true;
			}, 100);
		});
	});
	$(window).scroll(function() {
		var topH = $("#header").outerHeight();
		if($(window).scrollTop() < topH && c && z) {
			c = false;
			var a = $("#header").outerHeight();
			$("html, body").stop().animate({
				scrollTop: a - $("#main-nav").outerHeight()+50
			}, 1250, "easeInOutExpo");
		}
	});
	*/

});



