function submitForm(event) {
  event.preventDefault();
  var rPasswordElement = document.getElementById("rpassword");

  var password = document.getElementById("password").value;
  var rPassword = document.getElementById("rpassword").value;

  if (password != rPassword) {
    document.getElementById("errorText").innerText =
      "Password dosen't matched. Please try again.";
  } else {
    document.getElementById("errorText").innerText = "";

    document.getElementById("rpassword").value = "";
    document.getElementById("password").value = "";

    alert("success");
  }
}

function signInRedirect() {
  window.location.href = "login.html";
}
