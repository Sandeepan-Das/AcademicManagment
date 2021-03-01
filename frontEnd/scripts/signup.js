const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
var submit = document.getElementById("submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (fnameValue === "") {
    setErrorFor(fname, "First name cannot be blank");
  } else {
    setSuccessFor(fname);
  }

  if (lnameValue === "") {
    setErrorFor(lname, "last name cannot be blank");
  } else {
    setSuccessFor(lname);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email ID cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Must be in "abc@iiit-bh.ac.in" format');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 6) {
    setErrorFor(password, "Min 6 characters needed");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password2 cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords does not match");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  if (
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    ) === true
  ) {
    var pos = email.indexOf("@");
    var str = email.substring(pos);
    if (str === "@iiit-bh.ac.in") {
      return true;
    } else {
      return false;
    }
  }
  return false;
}
