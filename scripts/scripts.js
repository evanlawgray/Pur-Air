$(function() {

	// MAKE NAVBAR STICK TO TOP OF PAGE WHEN SCROLLING

/*	$(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      //console.log($(window).scrollTop())
    if ($(window).scrollTop() > 111) {
      $('header').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 112) {
      $('header').removeClass('navbar-fixed');
    }
  });   */

	// MAKE NAVBAR DROP DOWN WHEN MENU ICON IS PRESSED

	// get the toggle button as a variable
	var $toggle = $(".toggle-sidebar-button");
	var $navbar = $(".header-nav");
	var $navbarIsOpen = false;
	var $navbarButtonIcon = $(".toggle-sidebar-button-icon");
	var $icon = $(".fa");


	//hide the sidebar on initial page load
	$navbar.css("height", "0px");
	// create a function to be executed when the toggle button is clicked
	$toggle.on("click", function() {
		//Animate the sidebar open
		var $navbarHeight;

		if ($navbarIsOpen) {
			$navbarHeight = "0px";
			$icon.removeClass("toggle-sidebar-button-active")
			.removeClass("fa-times")
			.addClass("fa-bars");

		} else {
			$navbarHeight = "40px";
			$icon.addClass("toggle-sidebar-button-active")
			.removeClass("fa-bars")
			.addClass("fa-times");
		}

		$navbar.animate({
			height: $navbarHeight,
		}, 300);
		$navbarIsOpen = !$navbarIsOpen;
		});
});