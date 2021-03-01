const form = document.getElementById("form");
const uid = document.getElementById("uid");
const password = document.getElementById("password");
// var submit = document.getElementById("submit");

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


