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
  var midsem_val = document.getElementById("midsem_text" + no).value;

  document.getElementById("quiz_row" + no).innerHTML = quiz_val;
  document.getElementById("ta_row" + no).innerHTML = ta_val;
  document.getElementById("midsem_row" + no).innerHTML = midsem_val;
  document.getElementById("endsem_row" + no).innerHTML = endsem_val;

  document.getElementById("edit_button" + no).style.display = "block";
  document.getElementById("save_button" + no).style.display = "none";
}
