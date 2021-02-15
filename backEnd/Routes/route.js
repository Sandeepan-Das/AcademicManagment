const express = require('express');

const router = express.Router();

router.get(("/teachers"),(req,res)=>{
    var subjects = [
        {name: "DAA", image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fst2.depositphotos.com%2F3591429%2F12123%2Fi%2F950%2Fdepositphotos_121233588-stock-photo-woman-working-on-laptop-with.jpg&imgrefurl=https%3A%2F%2Fdepositphotos.com%2F121233588%2Fstock-photo-woman-working-on-laptop-with.html&tbnid=b8omTtsJv1ws0M&vet=12ahUKEwjeweG--enuAhU6E7cAHUbXBfkQMygJegUIARDxAQ..i&docid=9Hj6IwJ6DvED0M&w=1023&h=604&q=laptop%20study%20images&ved=2ahUKEwjeweG--enuAhU6E7cAHUbXBfkQMygJegUIARDxAQ"},
        {name: "BME", image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fst2.depositphotos.com%2F3591429%2F12123%2Fi%2F950%2Fdepositphotos_121233588-stock-photo-woman-working-on-laptop-with.jpg&imgrefurl=https%3A%2F%2Fdepositphotos.com%2F121233588%2Fstock-photo-woman-working-on-laptop-with.html&tbnid=b8omTtsJv1ws0M&vet=12ahUKEwjeweG--enuAhU6E7cAHUbXBfkQMygJegUIARDxAQ..i&docid=9Hj6IwJ6DvED0M&w=1023&h=604&q=laptop%20study%20images&ved=2ahUKEwjeweG--enuAhU6E7cAHUbXBfkQMygJegUIARDxAQ"},
        {name: "ENGLISH", image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fst2.depositphotos.com%2F3591429%2F12123%2Fi%2F950%2Fdepositphotos_121233588-stock-photo-woman-working-on-laptop-with.jpg&imgrefurl=https%3A%2F%2Fdepositphotos.com%2F121233588%2Fstock-photo-woman-working-on-laptop-with.html&tbnid=b8omTtsJv1ws0M&vet=12ahUKEwjeweG--enuAhU6E7cAHUbXBfkQMygJegUIARDxAQ..i&docid=9Hj6IwJ6DvED0M&w=1023&h=604&q=laptop%20study%20images&ved=2ahUKEwjeweG--enuAhU6E7cAHUbXBfkQMygJegUIARDxAQ"}
    ]
    res.render("../frontEnd/public/teachers.ejs",{subjects:subjects})   //passing the above data which is in the form of an array in by giving it a name "subjects"
});
router.get(("/branch"),(req,res)=>{
    
    res.render("../frontEnd/Partials/branch.ejs")   //passing the above data which is in the form of an array in by giving it a name "subjects"
});
module.exports = router;
