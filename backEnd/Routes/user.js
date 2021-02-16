const express = require("express");

const router = express.Router();

const connection = require("../dataBase/mysql");
const verifyLogin = require("../middlewares/verify");

const hid_pass = require("../External/pass");
const fetch_token = require("../External/token");

router.post("/register", verifyLogin, async (req, res) => {
  const password = await hid_pass(req.body.password);
  const token = await fetch_token(req.isStudent, req.primaryKey);
  var sql = "INSERT INTO userdata (name,email,password,token) VALUES (?,?,?,?)";

  try {
    connection.query(
      sql,
      [req.body.name, req.body.email, password, token],
      (err, result) => {
        if (err) throw err;
        else console.log("1 record inserted");
      }
    );
  } catch (error) {}
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
