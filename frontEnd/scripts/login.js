const form = document.getElementById("form");
const email = document.getElementById("uid");
const password = document.getElementById("password");

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
    setErrorFor(email, "Must be in 'abc@iiit-bh.ac.in' format");
  }

  if (passwordValue === "") {
    // console.log(passwordValue);
    setErrorFor(password, "Input Password");
  } else if (emailValue === "") {
    setErrorFor(password, "first input email");
  } else {
    sendData();
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
  if (str !== "@iiit-bh.ac.in") {
    return false;
  }
}

function sendData() {
  var person = {
    email: email.value,

    password: password.value,
  };
  console.log(person);
  $.ajax({
    url: "/users/login",
    type: "post",
    contentType: "application/json",
    success: function (data) {
      window.localStorage.setItem("token", data.token);
      location.href = "/";
      setSuccessFor(email);
      setSuccessFor(password);
    },
    error: function (xhr, ajaxOptions, thrownError) {
      setErrorFor(email, "wrong Email or password");
      setErrorFor(password, "wrong Email or password");
    },
    data: JSON.stringify(person),
  });
}
