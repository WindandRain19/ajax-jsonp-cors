const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/data", (req, res) => {
  res.send("用户数据");
});

app.listen("8081", () => {
  console.log("8081端口已经打开");
});
