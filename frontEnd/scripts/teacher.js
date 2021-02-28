function fetchBranch(year) {
  const ID = fetchURL();

  location.href = `/branch?ID=${ID}&year=${year}`;
}

function fetchURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("ID");
}
