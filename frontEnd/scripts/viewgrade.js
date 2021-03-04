function fetchStudDetails(roll) {
    
    const data = fetchURL();
  
    location.href = `studMark?ID=${data.ID}&subj=${subj}&roll=${roll}`;
  }
  
  function fetchURL() {
    const params = new URLSearchParams(window.location.search);
    
    return {
      ID: params.get("ID"),
      subj:params.get("subj")
    };
  }
  