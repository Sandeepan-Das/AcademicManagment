if (window.localStorage.getItem("token") != null) {
  $.ajax({
    url: "/verify",
    type: "GET",
    headers: { Authorization: localStorage.getItem("token") },
    success: function (data) {
      console.log(data);
      if (!data.isStudent) {
        location.href = "/";
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      window.alert("SIGN IN AGAIN");
      location.href = "/signUp";
    },
  });
} else {
  location.href = "/signUp";
}
