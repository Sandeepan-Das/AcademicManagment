const jwt = require("jsonwebtoken");

const fetch_token =  (role, id) => {
  const token = jwt.sign({ key: id, isStudent: role }, "secret");
  return token;
};

module.exports = fetch_token;
