function menu_init() {	
	var menu = $('#menu');
	var menu_toggle = $('#menu_toggle');
	menu_toggle.click(function(e){
		if (menu.hasClass('menu_toggle_close')){
			menu.removeClass('menu_toggle_close');
			menu.addClass('menu_toggle_open');
			menu_toggle.html('Menu <div class="arrow-up"></div>');
		} else {
			menu.removeClass('menu_toggle_open');
			menu.addClass('menu_toggle_close');
			menu_toggle.html('Menu <div class="arrow-down"></div>');
		}
	});
}