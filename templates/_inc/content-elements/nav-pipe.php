

<nav id="js-nav-responsive" class="nav--main">
	<ul class="float--right" >
	<?php
	// get a string with all li of the next html
	$menu = <<<MENU
	    <li><a href="slide-show.php">Slide show</a></li>
	    <li><a href="#">About</a></li>
	    <li><a href="#">Portfolio</a></li>
	    <li><a href="contact.php">Contact</a></li>
MENU;
	// split this string in line
	$lines = split("\n", $menu);


	// get the url of the browser
	$url=$_SERVER["REQUEST_URI"];
	// remove the domain
	$path = parse_url($url, PHP_URL_PATH);
	// fragment the url with the /
	$pathFragments = explode('/', $path);
	// get last fragment of url
	$end = end($pathFragments);

	// loop inside the array of each menu line
	foreach ($lines as $line) {
	    $current = false;
	    // get the value of the url from the line, put the value in variable match
	    preg_match('/href="([^"]+)"/', $line, $match);
	    // parse the value url, put the value in array
	    $info = parse_url($match[1]);
	    if ($end == $info['path']) {
	      // if end url equal href menu, add the class current to the line
	      $line = str_replace('<a h', '<a class="current" h', $line);
	    }
	    // write the line
	    echo $line."\n";
	}
	?>

	</ul>
</nav>
