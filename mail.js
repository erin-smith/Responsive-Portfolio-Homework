$(document).ready(function () {
	
	var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "rapidprod-sendgrid-v1.p.rapidapi.com",
		"x-rapidapi-key": "f5d98f4cf8msh11198755cc5247cp143954jsn9057acac6779",
		"content-type": "application/json",
		"accept": "application/json"
	},
	"processData": false,
	"data": "{  \"personalizations\": [    {      \"to\": [        {          \"email\": \"erin.acumen@gmail.com\"        }      ],      \"subject\": \"Hello, World!\"    }  ],  \"from\": {    \"email\": \"from_address@example.com\"  },  \"content\": [    {      \"type\": \"text/plain\",      \"value\": \"Hello, World!\"    }  ]}"
}
$("#mail").on("click",function() {
	alert ("Thanks! We'll be in touch");
});

$.ajax(settings).then(function (response) {
	console.log(response);
})
})