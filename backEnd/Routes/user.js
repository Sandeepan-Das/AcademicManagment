const express = require("express");
const bcryptjs = require("bcryptjs");

const router = express.Router();

const connection = require("../dataBase/mysql");
const verifyLogin = require("../middlewares/verify");

const hid_pass = require("../External/pass");
const fetch_token = require("../External/token");
const { verify } = require("jsonwebtoken");

router.post("/register", verifyLogin, async (req, res) => {
  const password = await hid_pass(req.body.password);
  const token = await fetch_token(req.isStudent, req.primaryKey);
  var sql = "INSERT INTO userdata (name,email,password,token) VALUES (?,?,?,?)";
  var sql2 = `SELECT * FROM userdata WHERE email=?`;
  try {
    connection.query(
      sql,
      [req.body.name, req.body.email, password, token],
      (err, result) => {
        if (err) throw err;
        else {
          connection.query(sql2, [req.body.email], async (err, result) => {
            if (err) throw err;
            else {
              res.send({ token: result[0].token });
            }
          });
        }
      }
    );
  } catch (error) {}
});

router.post("/login", verify, async (req, res) => {
  var sql = `SELECT * FROM userdata WHERE email=?`;
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
