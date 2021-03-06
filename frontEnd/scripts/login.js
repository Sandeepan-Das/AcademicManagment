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
  var e = 0;
  var p = 0;

  if (emailValue === "") {
    setErrorFor(email, "Email ID cannot be blank");
  } else if (!isEmail(emailValue)) {
    // console.log(emailValue);
    setErrorFor(email, "Must be in 'abc@iiit-bh.ac.in' format");
  }
  else {
    // setSuccessFor(email);
    e = 1;
  }  
    
  if (passwordValue === "") {
    setErrorFor(password, "Input Password");
  } else if (emailValue === "") {
    setErrorFor(password, "first input email");
  } else {
    // setSuccessFor(password);
    p = 1; 
  }

  if (e === 1 && p === 1) {
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
  // console.log(pos);
  var str = email.substring(pos);
  // console.log(str);
  if (str === "@iiit-bh.ac.in") {
    // console.log("true");
    // setSuccessFor(email);
    return true;
  }
  else {
    // console.log("false");
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
