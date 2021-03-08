const loggedin = document.getElementById("login");
const signup = document.getElementById("signup");
const loggedout = document.getElementById("loggedout");

const logout = document.getElementById("log-out");

logout.addEventListener("click", function () {
  console.log("clicked");
  window.localStorage.removeItem("token");
});

if (window.localStorage.getItem("token") != null) {
  // console.log("present");
  loggedin.style.display = "none";
  signup.style.display = "none";
  loggedout.style.display = "block";
} else {
  loggedin.style.display = "block";
  signup.style.display = "block";
  loggedout.style.display = "none";
  // console.log("absent");
}
