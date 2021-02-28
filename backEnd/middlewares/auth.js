const jwt = require("jsonwebtoken");
const connection = require("../dataBase/mysql");

const auth = async (req, res, next) => {
  var user;
  var sql;
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    const code = jwt.verify(token, "secret");

    if (code.isStudent) {
      sql = `SELECT sl FROM student WHERE email=?`;
    } else {
      sql = `SELECT sl FROM teacher WHERE email=?`;
    }

    await connection.query(sql, [code.key], (err, result) => {
      if (err) throw err;
      else {
        if (result.length == 0) throw new Error();
        else {
          user = result[0].sl;
        }
      }

      req.isStudent = code.isStudent;
      req.ID = user;
      next();
    });
  } catch (error) {
    res.status(400).send("Cannot verify the user");
  }
};

module.exports = auth;
