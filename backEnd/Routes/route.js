const express = require("express");
const base64 = require("base-64");
const router = express.Router();

const connection = require("../dataBase/mysql");
const auth = require("../middlewares/auth");
const fetchEmail = require("../External/decodeEmail");

router.get("/", (req, res) => {
  res.render("../frontEnd/public/home.ejs"); //kichi nuha
});

router.get("/signup", (req, res) => {
  res.render("../frontEnd/public/signup.ejs"); //pasa ethi
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

router.get("/teacher", async (req, res) => {
  var sql = "SELECT * FROM teacher_details WHERE email=?";
  connection.query("CALL fetch_email(?)", [req.query.ID], (err, result) => {
    if (err) throw err;
    else {
      
      connection.query(sql, [result[0][0].email], (err, result) => {
        if (err) throw err;
        else {
          
          res.render("../frontEnd/public/teacher.ejs", { subjects: result });
          
        } 
      });
    }
  });
});

router.get("/branch/:year", auth, (req, res) => {
  const year = req.params.year;
  var sql =
    "SELECT DISTINCT branch FROM teacher_details WHERE email=? AND year=?";
  try {
    connection.query(sql, [req.email, year], (err, result) => {
      if (err) throw err;
      else {
        res.render("../frontEnd/public/branch.ejs", { branches: result });
        //res.send(result);
      } //will pass the branch
    });
  } catch (error) {}
});

router.get("/branch/:year/:branch", auth, (req, res) => {
  const year = req.params.year;
  const branch = req.params.branch;
  var sql =
    "SELECT subj FROM teacher_details WHERE email=? AND year=? AND branch=?";
  try {
    connection.query(sql, [req.email, year, branch], (err, result) => {
      if (err) throw err;
      else {
        res.render("../frontEnd/public/subject.ejs", { subjects: result });
        //res.send(result);
      } //will pass the subjects
    });
  } catch (error) {}
});

router.get("/verify", auth, (req, res) => {
  console.log(req.ID);
  res.send({ ID: req.ID, isStudent: req.isStudent });
});

router.post("/subject", function (req, res) {
  //get data from the form and add it subjects array
  //redirect back to subjects page
  res.redirect("/subject");
});

router.get("/subject/new", function (req, res) {
  res.render("../frontEnd/public/new.ejs");
});

router.get("/show", function (req, res) {
  res.render("../frontEnd/public/show.ejs");
});
module.exports = router;
