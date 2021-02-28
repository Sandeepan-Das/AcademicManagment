if (window.localStorage.getItem("token") != null) {
    $.ajax({
      url: "/verify",
      type: "GET",
      headers: { Authorization: localStorage.getItem("token") },
      success: function (data) {
        console.log(data)
        if (!data.isStudent) location.href=`/teacher?ID=${data.ID}`;
        // else to be changed
      },
    });
  }
  
  