function validate(){
var username = document.getElementById("email").value;
var password = document.getElementById("pwd").value;
if ( username == "1@1" && password == "123")
{
alert ("Login successfully");
}
else
{
alert("username does not exist please signup");
window.location = "signup.html"; 

}
}
