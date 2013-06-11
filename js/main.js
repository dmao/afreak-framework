
/**
 * User: dma
 * Date: 28/05/13
 * Time: 14:37
 */



// jquery-responsive-slides.js
// http://responsiveslides.com/

// jquery.magnific-popup.js
// http://dimsemenov.com/plugins/magnific-popup/documentation.html

// http://responsive-nav.com/

// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
	"baseUrl": "../../js/lib",
	"paths": {
		"app": "../app",
		"jquery":"jquery-1.10.0",
		"jquery.responsive.slide":"plugins/jquery-responsive-slides",
		"responsiveNav":"plugins/responsive-nav"
	},
	"shim": {
		"jquery.responsive.slide": ["jquery"],
		"responsiveNav": []
	}
});

// Load the main app module to start the app
requirejs(["app/app"]);

define("app", function(){});



