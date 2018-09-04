
const express = require('express');
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname,"../public");
console.log(publicPath);
app.use("/",function (res, req,next) {
    console.log("google");
    next();
});
app.use(express.static(publicPath));
app.get("/server",function (req, res) {
   res.send("googd");
});
app.get("/google",function (req,res) {
    console.log("google");
});
app.get("/google",function (req,res) {
    console.log("google");
});
app.listen(port,function () {
    console.log("app is running on port"+port);
});
