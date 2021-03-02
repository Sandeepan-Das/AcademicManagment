function fetchShow(subj) {
  console.log(subj);
  const data = fetchURL();

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
