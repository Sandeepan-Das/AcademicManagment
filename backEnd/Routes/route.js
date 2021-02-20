const express = require("express");

const router = express.Router();

const connection = require("../dataBase/mysql");
const auth = require("../middlewares/auth");

router.get("/", (req, res) => {
  res.render("../frontEnd/public/home.ejs"); //kichi nuha
});

router.post("/teacherDetails", auth, (req, res) => {
  var sql =
    "INSERT INTO teacher_details (email,year,branch,subj) VALUES (?,?,?,?)";
  try {
    connection.query(
      sql,
      [req.email, req.body.year, req.body.branch, req.body.subj],
      (err, result) => {
        if (err) throw err;
        else {
          res.sendStatus(200);
        }
      }
    );
  } catch (error) {}
});

router.get("/teacher", auth, (req, res) => {
  var sql = "SELECT year FROM teacher_details WHERE email=?";
  try {
    connection.query(sql, [req.email], (err, result) => {
      if (err) throw err;
      else {
        res.render("../frontEnd/public/teacher.ejs", { subjects: result });
      }
    });
  } catch (error) {}
});

router.get("/branch/:year",auth, (req, res) => {
  const year = req.params.year;
  var sql = "SELECT branch FROM teacher_details WHERE email=? AND year=?";
  try {
    connection.query(sql, [req.email, year], (err, result) => {
      if (err) throw err;
      else {
        res.render("../frontEnd/partials/branch.ejs", { branch: result });
      }
    });
  } catch (error) {}
  //passing the above data which is in the form of an array in by giving it a name "subjects"
});

module.exports = router;
