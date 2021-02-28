function fetchSubject(branch) {
  console.log(branch);
  const data = fetchURL();

  location.href = `/subject?ID=${data.ID}&year=${data.year}&branch=${branch}`;
}

function fetchURL() {
  const params = new URLSearchParams(window.location.search);
  return { ID: params.get("ID"), year: params.get("year") };
}
