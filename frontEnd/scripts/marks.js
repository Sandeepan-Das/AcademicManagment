function edit_row(no) {
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "block";

  var quiz = document.getElementById("quiz_row" + no);
  var ta = document.getElementById("ta_row" + no);
  var midsem = document.getElementById("midsem_row" + no);
  var endsem = document.getElementById("endsem_row" + no);

  var quiz_data = quiz.innerHTML;
  var ta_data = ta.innerHTML;
  var midsem_data = midsem.innerHTML;
  var endsem_data = endsem.innerHTML;

  quiz.innerHTML =
    "<input type='text' id='quiz_text" + no + "' value='" + quiz_data + "'>";
  ta.innerHTML =
    "<input type='text' id='ta_text" + no + "' value='" + ta_data + "'>";
  midsem.innerHTML =
    "<input type='text' id='midsem_text" +
    no +
    "' value='" +
    midsem_data +
    "'>";
  endsem.innerHTML =
    "<input type='text' id='endsem_text" +
    no +
    "' value='" +
    endsem_data +
    "'>";
}

function save_row(no) {
  var quiz_val = document.getElementById("quiz_text" + no).value;
  var ta_val = document.getElementById("ta_text" + no).value;
  var midsem_val = document.getElementById("midsem_text" + no).value;
  var endsem_val = document.getElementById("endsem_text" + no).value;

  var result = {
    quiz: quiz_val,
    TA: ta_val,
    midSem: midsem_val,
    endSem: endsem_val,
  };

  post_data(result);
  document.getElementById("quiz_row" + no).innerHTML = quiz_val;
  document.getElementById("ta_row" + no).innerHTML = ta_val;
  document.getElementById("midsem_row" + no).innerHTML = midsem_val;
  document.getElementById("endsem_row" + no).innerHTML = endsem_val;

  document.getElementById("edit_button" + no).style.display = "block";
  document.getElementById("save_button" + no).style.display = "none";
}

function post_data(params) {
  const data = fetchURL();
  $.ajax({
    url: `/submitMarks?ID=${data.ID}&year=${data.year}&branch=${data.branch}&subj=${data.subj}&roll=${data.roll}`,
    type: "post",
    contentType: "application/json",
    success: function (data) {
      location.reload();
    },
    error: function (xhr, ajaxOptions, thrownError) {},
    data: JSON.stringify(params),
  });
}

function fetchURL() {
  const params = new URLSearchParams(window.location.search);

  return {
    ID: params.get("ID"),
    year: params.get("year"),
    branch: params.get("branch"),
    subj: params.get("subj"),
    roll: params.get("roll"),
  };
}
