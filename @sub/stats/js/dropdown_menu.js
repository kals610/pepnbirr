	$(function(){
				$('#main-nav ul li > ul').mouseenter(function(){
                    $('.dropdown_menu',this).show()
                    $('.dropdown_menu').stop().animate({height:40},200)
                }).mouseleave(function(){
                    $('.dropdown_menu',this).hide()
                    $('.dropdown_menu').stop().animate({height:0},200)
                })	
	});
