define(["jquery", "jquery.responsive.slide", "responsiveNav"], function($) {
    // jquery the jquery.responsive.slide plugins have been loaded.
    $(function() {


	    // lauch the slideshow with captions
	    $("#js-captions").responsiveSlides({
		    auto:true,
		    pager:false,
		    nav:true,
		    speed:500
	    });

	    // responsive nav
/*	    var navigation = responsiveNav("#js-nav-responsive", {
		    animate: true,
		    transition: 400,
		    openPos: "relative",
		    insert: "after",      // String: Insert the toggle before or after the navigation
		    jsClass: "js-r"
	    });*/
	    $('body').addClass('js');
	    var $menu = $('#js-nav--main'),
			    $menulink = $('#nav-toggle'),
			    $menuTrigger = $('.has-submenu > a');

	    $menulink.click(function(e) {
		    e.preventDefault();
		    $menulink.toggleClass('active');
		    $menu.toggleClass('active');
	    });

	    $menuTrigger.click(function(e) {
		    e.preventDefault();
		    var $this = $(this);
		    $this.toggleClass('active').next('ul').toggleClass('active');
	    });


    });
});







