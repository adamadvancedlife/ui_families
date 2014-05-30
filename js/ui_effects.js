//=============================//
//======= Slide Toggle ========//

$(document).ready(function() {
	
	//=============================//
	//======= Slide Toggle ========//
	var menu_lg		 = $( "#menu_lg" ),
		menu_help	 = $( "#menu_help_lg" ),
		menu_preview = $("#menu_preview"),
		menu_toggle  = $('.menu_lg_toggle'),
		menu_toggle_h= $('.menu_help_toggle'),
		nav_li		 = $('nav li'),
		hover_bar    = $('.hover_bar');
	
	function side_toggle(x,y,z) {
		z.click(function(){
			x.toggle('slide');
			y.hide('slide', { direction: 'left', mode: 'hide' }, 0 )
		})
		
		z.mouseenter(function(){
			y.show('slide', { direction: 'left', mode: 'show' }, 100 );
		});
		
		z.mouseleave(function(){
			y.hide('slide', { direction: 'left', mode: 'hide' }, 100 );
		});
	}
	
	side_toggle(menu_lg, menu_preview, menu_toggle);
	side_toggle(menu_help, menu_preview, menu_toggle_h);
	
	$('nav ul li').hover(function(){
		$(this).children().next("span").show();
		},function(){
		$(this).children().next("span").hide();
	});
	
	$('.cart').click(function(){
		$('.load').css({'z-index':1,'opacity':1});
	});
	
	$('.load').click(function(){
		$(this).css({'z-index':-1,'opacity':0});
	})
	
	//$( document ).click(function() {
	//	$("#menu_lg" ).toggle('slide', { direction: 'left', mode: 'show' }, 500);
	//});
});
