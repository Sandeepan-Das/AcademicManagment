if (window.localStorage.getItem("token") != null) {
    $.ajax({
      url: "/verify",
      type: "GET",
      headers: { Authorization: localStorage.getItem("token") },
      success: function (data) {
        
      },
      error: function (xhr, ajaxOptions, thrownError) {
      window.alert("SIGN IN AGAIN")
    //   location.href="/sign"
    }
    });
  }else{
    //   location.href = "/sign"
    console.log("hello")
  }
  
  