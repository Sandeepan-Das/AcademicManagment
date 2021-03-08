function detailsfunc() {
  var person = {
    year: $("#year").val().toLowerCase(),

    branch: $("#branch").val().toUpperCase(),

    subj: $("#subject").val().toUpperCase(),
  };

  $.ajax({
    url: "/teacherDetails",
    type: "post",
    headers: { Authorization: localStorage.getItem("token") },
    contentType: "application/json",
    success: function (data) {
      
      location.href = `/`;
    },
    error: function (xhr, ajaxOptions, thrownError) {},
    data: JSON.stringify(person),
  });
}
