
function fetchShow(subj) {
  const data = fetchURL();

  location.href = `/studMark?ID=${data.ID}&subj=${subj}`;
}

function fetchURL() {
  const params = new URLSearchParams(window.location.search);

  return {
    ID: params.get("ID"),
  };
}
