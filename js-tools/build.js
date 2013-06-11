// https://github.com/jrburke/r.js/blob/master/build/example.build.js
// paths are relative to this build.js file

({

    "baseUrl": "../js/",
		//- this is the directory that the new files will be. it will be created if it doesn't exist
    "dir": "../js-prod",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    //"optimize": "none",

		paths: {
			"jquery":"lib/jquery-1.10.0",
			"jquery.responsive.slide":"lib/plugins/jquery-responsive-slides",
			"responsiveNav":"lib/plugins/responsive-nav",
			"app": "app",
		},

    // point to the shim config we set up before
    "mainConfigFile": "../js/main.js",

    "modules": [
        //Optimize the application files. jQuery is not
        //included since it is already in require-jquery.js
        {
            "name": "main"
        }
    ]
})

// to load the production version, do the command node r.js -o build.js in js-tools


