async function verifyLogin(req, res, next) {
  const email = req.body.email;
  const domain = email.split("@")[1];
  if (domain != "iiit-bh.ac.in") res.send("Not from IIIT");

  const roll = email.split("@")[0];
  // console.log()

  if (Number(roll[1]) <= 5 && Number(roll[1]) > 0) req.isStudent = true;
  else req.isStudent = false;

  req.primaryKey = roll;
  next();
}

module.exports = verifyLogin;
