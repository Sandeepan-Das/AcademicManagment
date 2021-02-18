const express = require("express");
const bcryptjs = require("bcryptjs");

const router = express.Router();

const connection = require("../dataBase/mysql");
const verifyLogin = require("../middlewares/verify");

const hid_pass = require("../External/pass");
const fetch_token = require("../External/token");


router.post("/register", verifyLogin, async (req, res) => {
  var sql;
  const password = await hid_pass(req.body.password);
  const token = await fetch_token(req.isStudent, req.primaryKey);
  if (req.isStudent) {
    sql = "INSERT INTO student (name,email,password,token) VALUES (?,?,?,?)";
  } else {
    sql = "INSERT INTO teacher (name,email,password,token) VALUES (?,?,?,?)";
  }
  try {
    connection.query(
      sql,
      [req.body.name, req.body.email, password, token],
      (err, result) => {
        if (err) throw err;
        else {
          res.send({ token });
        }
      }
    );
  } catch (error) {}
});

router.post("/login", verifyLogin, async (req, res) => {
  var sql;
  
  if (req.isStudent) {
    sql = `SELECT * FROM student WHERE email=?`;
  } else {
    sql = `SELECT * FROM teacher WHERE email=?`;
  }
  try {
    connection.query(sql, [req.body.email], async (err, result) => {
      if (err) throw err;
      else {
        if (result.length == 0) res.sendStatus(404);
        else {
          const matchPass = await bcryptjs.compare(
            req.body.password,
            result[0].password
          );

          if (!matchPass) {
            res.sendStatus(404);
          } else {
            res.send({ token: result[0].token });
          }
        }
      }
    });
  } catch (err) {}
});

router.get("/display", async (req, res) => {
  var sql = "SELECT * FROM userdata";
  try {
    connection.query(sql, (err, result) => {
      if (err) throw err;
      else console.log(result);
    });
  } catch (err) {}
});

module.exports = router;
