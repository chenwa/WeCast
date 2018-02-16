var username = document.getElementById("userid").value;
var password = document.getElementById("password").value;

function validate();

if ( username == "admin@wecast.com" && password == "123") {
	alert("successfull");
}
else {
	alert ("unsuccessful");
}
}