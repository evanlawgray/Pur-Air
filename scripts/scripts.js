$(function() {

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

	// CONTACT US FORM ALERT

	var $submitButton = $(".submit-button");

	$submitButton.on ("click", function(event){
		event.preventDefault();
		var $textAreaValue = $("#message").val();

		if ($textAreaValue == "") {
		alert("You Forgot To Type A Message!");
		}
		else {
		alert("Thanks For Your Message!");
		}
	});
});