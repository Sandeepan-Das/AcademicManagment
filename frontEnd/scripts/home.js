


if (window.localStorage.getItem("token") != null) {
  $.ajax({
    url: "/verify",
    type: "GET",
    headers: { Authorization: localStorage.getItem("token") },
    success: function (data) {
      if (!data.isStudent) location.href = `/teacher?ID=${data.ID}`;
      else {
        location.href = `/student?ID=${data.ID}`;
      }
    },
  });
}


