const password=process.env.password;
var con = mysql.createConnection({
  host: "freedb.tech",
  user: "freedbtech_goldFinch",
  password:"helloworld",
  database: "freedbtech_AcademicManagment",
});

con.connect(async function (err) {
  if (err) throw err;

  console.log("Connected!");
});

module.exports = con;