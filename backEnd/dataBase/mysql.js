var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql@sandeepan12",
  database: "AcademicManagment",
});

con.connect(async function (err) {
  if (err) throw err;

  console.log("Connected!");
});

module.exports = con;