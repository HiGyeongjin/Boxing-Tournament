const express = require("express");
const app = express();
// const port = 4000;

app.get("/", (req, res) => {
  res.send("OK!");
});

app.get("/user", (req, res) => {
  res.send("users!!!");
});

app.listen(4000);
