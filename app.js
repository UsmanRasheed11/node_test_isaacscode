const Test = require('./modules/test.controller')
const express=require("express"); 
const app= express();
app.get("/", function(req, res){
  const solution = Test.solution();
  res.send(solution)
});
app.listen(3000, function(){
        console.log("SERVER STARTED ON localhost:3000");     
})

