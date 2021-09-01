const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.post("/", (req, res) => {
  res.render("bigcount");
});

app.get("/newyear", (req, res) => {
  res.render("newyear");
});

app.use("/", (req, res) => {
  res.render("waiting");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
