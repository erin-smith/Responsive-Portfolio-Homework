$(document).ready(function () {
	$("#mail").on("click", function () {
		const msg = {
			name: $("#name").val().trim(),
			email: $("#email").val().trim(),
			message: $("#message").val().trim()
		}

		if (!msg.name) {
			alert("Please enter Your name");
			return;
		}
		if (!msg.email) {
			alert("Please enter your email address");
			return;
		}
		function validateEmail($email) {
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			return emailReg.test( $email );
		  }
	    if( !validateEmail(msg.email)) { 

			alert ("Please enter a valid email address");
			return;
		}
		if (!msg.message) {
			alert("Please enter a message");
			return;
		}
		console.log(msg);

		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://morning-citadel-34446.herokuapp.com/api/mail",
			"method": "POST",
			"data": msg
		}
		console.log(settings);
		$.ajax(settings).then(function (response) {
			console.log(response);
		})
		alert("Thanks! We'll be in touch");
	});


})