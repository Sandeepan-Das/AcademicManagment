function detailsfunc() {
    var person = {
      year: $("#year").val(),
  
      branch: $("#branch").val(),
  
      subj: $("#subject").val(),
    };
  
    $.ajax({
      url: "/teacherDetails",
      type: "post",
      headers: { Authorization: localStorage.getItem("token") },
      contentType: "application/json",
      success: function (data) {
          console.log(data)
        location.href = `/`;
      },
      error: function (xhr, ajaxOptions, thrownError) {},
      data: JSON.stringify(person),
    });
  }
  
 