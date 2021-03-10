var count = 0;
function fetchShow(subj) {
  console.log(subj);
  const data = fetchURL();
  if (count == 0)
    location.href = `/show?ID=${data.ID}&year=${data.year}&branch=${data.branch}&subj=${subj}`;
}

function fetchURL() {
  const params = new URLSearchParams(window.location.search);
  console.log(params);
  return {
    ID: params.get("ID"),
    year: params.get("year"),
    branch: params.get("branch"),
  };
}

function deleteData(subj) {
  const data = fetchURL();
  count++;
  $.ajax({
    url: `/delClass?ID=${data.ID}&year=${data.year}&branch=${data.branch}&subj=${subj}`,
    type: "delete",
    contentType: "application/json",
    success: function (data) {
      location.href = "/";
    },
    error: function (xhr, ajaxOptions, thrownError) {},
  });
}
