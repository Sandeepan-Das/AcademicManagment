const express = require("express");

const router = express.Router();
var subjects = [
  {
    year : "FIRST",
    branch : "CSE",
    subject: "DAA",
    image: "https://taylorandfrancis.com/wp-content/uploads/2018/05/booksellers-and-agents_800_320.jpg"
  },
  {
    year : "FIRST",
    branch : "CE",
    subject: "BME",
    image: "https://taylorandfrancis.com/wp-content/uploads/2018/05/booksellers-and-agents_800_320.jpg"  
  },
  {
    year : "SECOND",
    branch : "CE", 
    subject: "ENGLISH",
    image: "https://taylorandfrancis.com/wp-content/uploads/2018/05/booksellers-and-agents_800_320.jpg"
  }
];

router.get("/", (req, res) => {
  res.render("../frontEnd/public/home.ejs"); //kichi nuha
});

router.get("/teacher", (req, res) => {
  res.render("../frontEnd/public/teacher.ejs");  
});

router.get("/branch", (req, res) => {
  res.render("../frontEnd/partials/branch.ejs"); 
});

router.get("/subject", (req, res) => {
  res.render("../frontEnd/public/subject.ejs", { subjects: subjects }); //passing the above data which is in the form of an array in by giving it a name "subjects"
});

router.post("/subject", function(req, res){
  //get data from the form and add it subjects array
  var year = req.body.yearname;
  var branch = req.body.branchname;
  var subject = req.body.subjectname;
  var image = req.body.image;
  var newSubject = {year: year, branch: branch, subject: subject, image: image}
  subjects.push(newSubject);
  //redirect back to subjects page
  res.redirect("/subject");
});
router.get("/subject/new", function(req, res){
  res.render("../frontEnd/public/new.ejs");
});


module.exports = router;
