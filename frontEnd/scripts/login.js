const form = document.getElementById("form");
const email = document.getElementById("uid");
const password = document.getElementById("password");

// demo email: userid@iiit-bh.ac.in
// demo password: user057

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});



function checkInputs() {

  // trim to remove the whitespaces
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Email ID cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "check ur email id");
  } else {
    setSuccessFor(email);
  }

  console.log(password);
  if (passwordValue === "") {
    // console.log(passwordValue);
    setErrorFor(password, "Input Password");
  } else if (emailValue === "") {
    setErrorFor(password, "first input email");
  } else if (isEmail(emailValue)) {
    if (passwordValue != "userid057")
      setErrorFor(password, "incorrect password");
    else setSuccessFor(password);
  } else {
    setSuccessFor(password);
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
  var pos = email.indexOf("@");
  var str = email.substring(pos);
  if (str === "@iiit-bh.ac.in") {
    if (email === "userid@iiit-bh.ac.in") {
      return true;
    }
    else {
      return false;
    }
  }
  return false;
}
