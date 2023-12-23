var express = require("express");
var path = require("path");
var port = 4002;


var app = express();
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "assets")));

app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"index.html"));
});

app.get("/fight",(req,res)=>{
  res.sendFile(path.join(__dirname,"fight.html"));
});


app.listen(port,()=>{
  console.log("Listening on Port:"+port);
})
