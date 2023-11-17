var emailFeild = document.getElementById("email-field");
var emailLabel = document.getElementById("email-label");
var emailError = document.getElementById("email-error");

function validateEmail(){
   emailLabel.style.bottom = "45px";

   if(!emailFeild.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      emailError.innerHTML = "please enter a valid email";
      emailFeild.style.borderBottomColor = "red"
      emailError.style.top = "120%"
      return false;

   }
   emailError.innerHTML = "";
   emailFeild.style.borderBottomColor = "green"
   emailError.style.top = "100%"
   return true;
   
}