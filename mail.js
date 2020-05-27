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
	"data": "{  \"personalizations\": [    {      \"to\": [        {          \"email\": \"john@example.com\"        }      ],      \"subject\": \"Hello, World!\"    }  ],  \"from\": {    \"email\": \"from_address@example.com\"  },  \"content\": [    {      \"type\": \"text/plain\",      \"value\": \"Hello, World!\"    }  ]}"
}

$.ajax(settings).done(function (response) {
	console.log(response);
})
}
echo htmlspecialchars($_SERVER["PHP_SELF"]);

if (isset($_POST['submit'])) {
    
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "wineanddirt@yahoo.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;


mail($mailTo, $txt, $headers);
header("Location: index.html?mailsent");
}
?>