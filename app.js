var express = require('express');
var app = express();
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
var port = process.env.PORT || 3000;
app.use(express.static('public'));

app.post("/data", (req, res) => {
    let name = req.body.name;
    let phone= req.body.phone;
    let message= req.body.message;
    let mail= req.body.mail;
    let address=req.body.address;
    let skill=req.body.skill;
    if (name === "") res.redirect("/"); 
    data={name:name,
        phone:phone,
        message:message,
        mail:mail,
        address:address,
        skill:skill
    };
    console.log(data)
    res.render("template",{data:data});
  })
 

app.get("/", (req, res) => {
      res.render("home");
   
    });
app.get("/favicon.ico", (req, res) => {
      res.render("home");
   
    });
app.post("/favicon.ico", (req, res) => {
      res.render("home");
   
    });




  
app.listen(port, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});