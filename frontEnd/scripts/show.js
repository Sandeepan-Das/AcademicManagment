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
      subj:params.get("subj")
    };
  }
  