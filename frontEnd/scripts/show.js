function fetchStudDetails(roll) {
  const data = fetchURL();

  location.href = `/marks?ID=${data.ID}&year=${data.year}&branch=${data.branch}&subj=${data.subj}&roll=${roll}`;
}

function fetchURL() {
  const params = new URLSearchParams(window.location.search);

  return {
    ID: params.get("ID"),
    year: params.get("year"),
    branch: params.get("branch"),
    subj: params.get("subj"),
  };
}

function filterData(params = "roll") {
  const data = fetchURL();

  location.href = `/show?ID=${data.ID}&year=${data.year}&branch=${data.branch}&subj=${data.subj}&filter=${params}`;
}

function postMsg() {
  const data = fetchURL();
  var person = {
    message: $("#textarea").val(),
  };
  console.log(person);
  $.ajax({
    url: `/message?year=${data.year}&branch=${data.branch}&subj=${data.subj}`,
    type: "post",
    contentType: "application/json",
    success: function (data) {},
    error: function (xhr, ajaxOptions, thrownError) {},
    data: JSON.stringify(person),
  });
}
function Editfunc() {
  const data = fetchURL();
  var person = {
    message: $("#textarea").val(),
  };
  console.log(person);
  $.ajax({
    url: `/modifyMessage?year=${data.year}&branch=${data.branch}&subj=${data.subj}`,
    type: "put",
    contentType: "application/json",
    success: function (data) {},
    error: function (xhr, ajaxOptions, thrownError) {},
    data: JSON.stringify(person),
  });
}


