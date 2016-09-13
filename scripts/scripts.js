$(function() {
	// get the toggle button as a variable
	var $toggle = $(".toggle-sidebar-button");
	var $navbar = $(".header-nav");
	var $navbarIsOpen = false;
	var $navbarButtonIcon = $(".toggle-sidebar-button-icon");
	var $icon = $(".fa");
	// extra variables to try to fix nav on subpages
	var $navbarItems = $(".header-nav").children; //NEW CODE
	//hide the sidebar on initial page load
	$navbar.css("height", "0px")
	// create a function to be executed when the toggle button is clicked
	$toggle.on("click", function() {
		//Animate it open
		var $navbarHeight;
		var $navbarPadding;

	$navbar.addClass(".hidden"); //NEW CODE

		if ($navbarIsOpen) {
			$navbarHeight = "0px";
			$icon.removeClass("fa-times").addClass("fa-bars");
			$navbarPadding = "0px";

		} else {
			$navbar.removeClass(".hidden");  //NEW CODE
			$navbarHeight = "40px";
			$icon.removeClass("fa-bars").addClass("fa-times");
			$navbarPadding = "15px 50px";
		}

		$navbar.animate({
			height: $navbarHeight,
			padding: $navbarPadding
		}, 300);
		$navbarIsOpen = !$navbarIsOpen;
		});
});