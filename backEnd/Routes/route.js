const express = require("express");
const router = express.Router();

const connection = require("../dataBase/mysql");
const auth = require("../middlewares/auth");

const fetchYear = require("../staticdB/subj");
const extract = require("../staticdB/subj_details.json");

const range = require("../External/perecentRange");
const filter = require("../External/filter")
var students = [
  {
    no: "1",
    roll: "B119046",
    name: "Sandeepan Das",
    quiz: "15",
    ta: "4",
    midsem: "24",
    endsem: "43",
  },
  {
    no: "2",
    roll: "B119057",
    name: "Somen Sahoo",
    quiz: "15",
    ta: "4",
    midsem: "24",
    endsem: "43",
  },
  {
    no: "3",
    roll: "B119049",
    name: "Satyabrata Singh",
    quiz: "15",
    ta: "4",
    midsem: "24",
    endsem: "43",
  },
  {
    no: "4",
    roll: "B119036",
    name: "Nageshwar Murmu",
    quiz: "15",
    ta: "4",
    midsem: "24",
    endsem: "43",
  },
  {
    no: "5",
    roll: "B119036",
    name: "Nageshwar Murmu",
    quiz: "15",
    ta: "4",
    midsem: "24",
    endsem: "43",
  },
  {
    no: "6",
    roll: "B119036",
    name: "Nageshwar Murmu",
    quiz: "15",
    ta: "4",
    midsem: "24",
    endsem: "43",
  },
  {
    no: "7",
    roll: "B119036",
    name: "Nageshwar Murmu",
    quiz: "15",
    ta: "4",
    midsem: "24",
    endsem: "43",
  },
];

router.get("/", (req, res) => {
  res.render("../frontEnd/public/home.ejs"); //kichi nuha
});

router.get("/signUp", (req, res) => {
  res.render("../frontEnd/public/signup.ejs"); //pasa ethi
});

router.get("/login", (req, res) => {
  res.render("../frontEnd/public/login.ejs"); //exist
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
          res.send({});
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
      connection.query(sql, [result[0][0].email], (err, result2) => {
        if (err) throw err;
        else {
          res.render("../frontEnd/public/teacher.ejs", {
            name: result[0][0].name,
          });
        }
      });
    }
  });
});

router.get("/branch", (req, res) => {
  const year = req.query.year;
  var sql =
    "SELECT DISTINCT branch FROM teacher_details WHERE email=? AND year=?";
  connection.query("CALL fetch_email(?)", [req.query.ID], (err, result) => {
    if (err) throw err;
    else {
      connection.query(sql, [result[0][0].email, year], (err, result) => {
        if (err) throw err;
        else {
          res.render("../frontEnd/public/branch.ejs", { branches: result });
        }
      });
    }
  });
});

router.get("/subject", (req, res) => {
  const year = req.query.year;
  const branch = req.query.branch;
  var sql =
    "SELECT subj FROM teacher_details WHERE email=? AND year=? AND branch=?";
  connection.query("CALL fetch_email(?)", [req.query.ID], (err, result) => {
    if (err) throw err;
    else {
      connection.query(
        sql,
        [result[0][0].email, year, branch],
        (err, result) => {
          if (err) throw err;
          else {
            res.render("../frontEnd/public/subject.ejs", { subjects: result });
          }
        }
      );
    }
  });
});
router.get("/verify", auth, (req, res) => {
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
  var sql;
  
  if (req.query.filter != undefined) sql = filter(req.query.filter);
  else sql = "SELECT roll,name FROM fetchMark WHERE subject=? ORDER BY roll";
  
  connection.query(sql, [req.query.subj], (err, result) => {
    if (err) throw err;
    else {
      
      res.render("../frontEnd/public/show.ejs", { students: result });
    }
  });
});

router.get("/marks", function (req, res) {
  var sql = "SELECT * FROM combine WHERE roll=? AND subject=?";

  connection.query(sql, [req.query.roll, req.query.subj], (err, result) => {
    if (err) throw err;
    else {
      res.render("../frontEnd/public/marks.ejs", {
        students: result,
      });
    }
  });
});

router.post("/submitMarks", (req, res) => {
  var sql =
    "UPDATE student_mark_details SET midSem=?,endSem=?,quiz=?,TA=?  WHERE roll=? AND subject=?";
  connection.query(
    sql,
    [
      req.body.midSem,
      req.body.endSem,
      req.body.quiz,
      req.body.TA,
      req.query.roll,
      req.query.subj,
    ],
    (err, result) => {
      if (err) throw err;
      else {
        res.send({});
      }
    }
  );
});
router.post("/submitAttendance", (req, res) => {
  var sql =
    "UPDATE student_attd_details SET present=?,total=? WHERE roll=? AND subject=?";
  connection.query(
    sql,
    [req.body.present, req.body.total, req.query.roll, req.query.subj],
    (err, result) => {
      if (err) throw err;
      else {
        res.send({});
      }
    }
  );
});

router.get("/student", function (req, res) {
  const ID = req.query.ID;
  var sql = "SELECT roll,name FROM student WHERE sl=?";
  connection.query(sql, [ID], (err, result) => {
    const data = fetchYear(result[0].roll);
    const subjArray = extract[data.yr];
    res.render("../frontEnd/public/student_subject.ejs", {
      subjects: subjArray,
      roll: result[0].roll,
      name: result[0].name,
    });
  });
});

router.get("/studMark", (req, res) => {
  const ID = req.query.ID;
  var sql1 = "SELECT roll,name FROM student WHERE sl=?";
  connection.query(sql1, [ID], (err, result) => {
    var sql =
      "SELECT *,(present/total)*100 AS percent FROM combine WHERE subject=? AND roll=?";
    connection.query(sql, [req.query.subj, [result[0].roll]], (err, result) => {
      if (err) throw err;
      else {
        const color = range(result[0].percent);
        
        res.render("../frontEnd/public/studMark.ejs", {
          students: result,
          attendance: color,
        });
      }
    });
  });
});

module.exports = router;
