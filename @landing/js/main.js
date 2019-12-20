var platform = new MobileDetect(window.navigator.userAgent);
//var isErrorModalShow = false;
$(document).ready(function() {

	/*
	$(document).keypress(function(e) {
		if(isErrorModalShow && e.which == 13) {
			$("#error-modal").modal('hide');
			return false;
		}
	})
	*/

	/* 모달 스크롤 감추기 */
	$("#error-modal,#find-password-modal").on('show.bs.modal', function(e) {
		$("body").css('overflow-y', 'hidden');

		/*
		if($(e.target).is("#error-modal")) {
			isErrorModalShow = true;
			$("#error-modal").find("input").focus();
		}
		*/
	});

	/* 모달 스크롤 보이기 */
	$("#error-modal,#find-password-modal").on('hidden.bs.modal', function(e) {
		var errorTarget = $(e.target).is("#error-modal");
		//if(errorTarget) isErrorModalShow = false;
		if(errorTarget === true && $("#find-password-modal").hasClass('in')) {
		} else {
			$("body").css('overflow-y', 'auto');
		}
	});

  $('li.dropdown.dropdown-nav').hover(function() {
		$(this).find('.dropdown-menu').stop().animate({opacity:0.6, height:'toggle'}, 170, function() {
			$(this).animate({opacity:1}, 500);
		});
    //$(this).find('.dropdown-menu').stop(true, true).delay(50).slideDown(200);
    //$(this).find('.dropdown-menu').stop(true, true).delay(50).slideDown(200);
		//$(this).find('.dropdown-menu').first().stop(true, true).delay(200).animate({ height: 'toggle', opacity: 'toggle' }, '100');
  }, function() {
		$(this).find('.dropdown-menu').stop().delay(200).animate({ opacity:0, height:'toggle'}, 400);
    //$(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(200);
    //$(this).find('.dropdown-menu').stop(true, true).delay(200).slideUp(200);
		//$(this).find('.dropdown-menu').first().stop(true, true).delay(200).animate({ height: 'toggle', opacity: 'toggle' }, 'fast');
  });

  /**
   * navigation show determine
   */
  navMenu()
	$(window).resize(function() {
		navMenu();
	});

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
				var v = $(o.attr("href")).offset().top - 85;
			} else {
				var v = $(o.attr("href")).offset().top - 85;
			}

		} else if($(this).attr('href') == '#map-feature') {
			if($(window).width() < 769) {
				var v = $(o.attr("href")).offset().top-95;
			} else {
				var v = $(o.attr("href")).offset().top - 110;
			}
		} else if($(this).attr('href') == '#iphone-screens') {
			if($(window).width() < 769) {
				var v = $("#iphone-screens").offset().top - 95;
			} else {
				var v = $("#iphone-screens").offset().top - 30;
			}
		} else if($(this).attr('href') == '#plan') {
			if($(window).width() < 769) {
				var v = $("#plan").offset().top - 95;
			} else {
				var v = $("#plan").offset().top - 30;
			}
		} else if($(this).attr('href') == '#industried-fashion') {
			if ($(window).width() < 769) {
				var v = $("#industried-fashion").offset().top - 95;
			} else {
				var v = $("#industried-fashion").offset().top - 5;
			}
		} else if($(this).attr('href') == '#industried-beauty') {
			if ($(window).width() < 769) {
				var v = $("#industried-beauty").offset().top - 95;
			} else {
				var v = $("#industried-beauty").offset().top - 5;
			}
		} else if($(this).attr('href') == '#industried-travel') {
			if ($(window).width() < 769) {
				var v = $("#industried-travel").offset().top - 95;
			} else {
				var v = $("#industried-travel").offset().top - 5;
			}
		} else if($(this).attr('href') == '#industried-food') {
			if ($(window).width() < 769) {
				var v = $("#industried-food").offset().top - 95;
			} else {
				var v = $("#industried-food").offset().top - 5;
			}
		} else if($(this).attr('href') == '#industried-publishing') {
			if ($(window).width() < 769) {
				var v = $("#industried-publishing").offset().top - 95;
			} else {
				var v = $("#industried-publishing").offset().top - 5;
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


	var currentPagePath = document.location.pathname;

	if(document.location.pathname == '/') {
	} else if(currentPagePath == '/instagram-scheduler') {
	} else if(currentPagePath == '/instagram-stats') {
	} else {
		$("#header").css('min-height', ($(window).height())+'px').css('height', '100%');
	}

	$(window).resize(function() {
		if(currentPagePath == '/') {
		} else if(currentPagePath == '/instagram-scheduler') {
		} else if(currentPagePath == '/instagram-stats') {
		} else {
			$("#header").css('min-height', ($(window).height())+'px').css('height', '100%');
		}
	});
});

function navMenu() {
	var a = window.innerWidth;
	if(a < 1200) {
		document.getElementById("menu-left-side").style.display='none';
		document.getElementById("menu-right-side").style.display='none';
	} else {
		document.getElementById("menu-left-side").style.display='block';
		document.getElementById("menu-right-side").style.display='block';
	}
}


