// //Selecting Components
// var password = document.getElementById("password").value;
// var rPassword = document.getElementById("rpassword").value;
// var alertDiv = document.querySelector(".alertDiv");

function submitForm(event) {
  //Preventing defualt refresh
  event.preventDefault();

  //Selecting Components
  var password = document.getElementById("password").value;
  var rPassword = document.getElementById("rpassword").value;
  var alertDiv = document.querySelector(".alertDiv");

  //Checking the password similarity
  if (password != rPassword) {
    document.getElementById("errorText").innerText =
      "Password dosen't matched. Please try again. *";
    //Add classes
    alertDiv.classList.add("showAlert");
    addErrorBorder();
  } else {
    document.getElementById("errorText").innerText = "";
    document.getElementById("rpassword").value = "";
    document.getElementById("password").value = "";
    //Remove classes
    alertDiv.classList.remove("showAlert");
    removeErrorBorder();
  }
}

function onChangePassword() {
  var password = document.getElementById("password").value;
  var rPassword = document.getElementById("rpassword").value;
  var alertDiv = document.querySelector(".alertDiv");

  if (rPassword == password) {
    removeErrorBorder();
    alertDiv.classList.remove("showAlert");
    document.getElementById("errorText").innerText = "";
  } else {
    alertDiv.classList.add("showAlert");

    document.getElementById("errorText").innerText =
      "Password dosen't matched. Please try again. *";
    addErrorBorder();
  }
}

//password error border [REMOVE]
function removeErrorBorder() {
  var passwordText = document.querySelector("#password");
  var passwordConfirmText = document.querySelector("#rpassword");
  passwordText.classList.remove("textErrorBorder");
  passwordConfirmText.classList.remove("textErrorBorder");
}

//password error border [ADD]
function addErrorBorder() {
  var passwordText = document.querySelector("#password");
  var passwordConfirmText = document.querySelector("#rpassword");
  passwordText.classList.add("textErrorBorder");
  passwordConfirmText.classList.add("textErrorBorder");
}

//show password
function showPassword() {
  var passwordTextBox = document.getElementById("password");
  var passwordConfirmTextBox = document.getElementById("rpassword");

  var passwordCheckBox = document.getElementById("showPasswordCheckBox");
  if (passwordTextBox.type == "password") {
    console.log("Executing");
    passwordTextBox.type = "text";
    passwordConfirmTextBox.type = "text";
    passwordCheckBox.checked = true;
  } else {
    passwordTextBox.type = "password";
    passwordConfirmTextBox.type = "password";

    passwordCheckBox.checked = false;
  }
}

//Redirect to Sign In page
function signInRedirect() {
  window.location.href = "login.html";
}

//Redicrect to Home
function backToHome() {
  window.location.href = "../index.html";
}
