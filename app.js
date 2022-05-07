const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const today = new Date();
  const day = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  console.log(day);
  res.render("list", { day: day });
});

app.listen("3000", function () {
  console.log("App running on port 3000");
});
