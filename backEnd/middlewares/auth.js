const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  let user;
  var sql;
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    const code = jwt.verify(token, "secret");

    if (code.isStudent) {
      sql = `SELECT * FROM student WHERE email=?`;
    } else {
      sql = `SELECT * FROM teacher WHERE email=?`;
    }

    try {
      connection.query(sql, [code.key], async (err, result) => {
        if (err) throw err;
        else {
          if (result.length == 0) throw new Error();
        }
      });
    } catch (err) {}

    req.isStudent = code.isStudent;
    req.email = code.key;
    
    
    next();
  } catch (error) {
    res.status(400).send("Cannot verify the user");
  }
};

module.exports = auth;
