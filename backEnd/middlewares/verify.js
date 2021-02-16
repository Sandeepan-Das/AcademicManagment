async function verifyLogin(req, res, next) {
  const email = req.body.email;
  const domain = email.split("@")[1];
  if (domain != "iiit-bh.ac.in") res.send("Not from IIIT");

  const roll = email.split("@")[0];

  if (roll[0] == "b") req.isStudent = true;
  else req.isStudent = false;

  req.primaryKey = roll;
  next();
}

module.exports = verifyLogin;
