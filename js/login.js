// "use strict";

// function submitForm(event) {
//   event.preventDefault();
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;
//   // check the credentials with database
//   var hasError = false;
//   if (hasError) {
//     document.getElementById("errorText").innerText =
//       "Please check the credentials and try again.";
//   } else {
//     document.getElementById("errorText").innerText = "";
//     //submit to the database

//     document.getElementById("password").value = "";
//     document.getElementById("username").value = "";

//     alert("success");
//   }
// }

function registrationRedirect() {
  window.location.href = "../signup/signup.html";
}

function showPassword() {
  var passwordTextBox = document.getElementById("password");
  var passwordCheckBox = document.getElementById("showPasswordCheckBox");
  if (passwordTextBox.type == "password") {
    console.log("Executing");
    passwordTextBox.type = "text";
    passwordCheckBox.checked = true;
  } else {
    passwordTextBox.type = "password";
    passwordCheckBox.checked = false;
  }
}

//Redicrect to Home
function backToHome() {
  window.location.href = "../index.html";
}
