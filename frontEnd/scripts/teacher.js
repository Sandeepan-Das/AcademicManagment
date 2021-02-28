// function fetchYear(year) {
//   $.ajax({
//     url: `/branch/${year}`,
//     type: "GET",
//     headers: { Authorization: localStorage.getItem("token") },
//     success: function (data) {
//       if (!data.isStudent) location.href = `/teacher?ID=${data.email}`;
//       // else to be changed
//     },
//   });
// }

const params = new URLSearchParams(window.location.search);
console.log(window.location.search)
for (const param of params) {
  console.log(param);
}
