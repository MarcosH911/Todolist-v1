const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

app.get("/", function (req, res) {
  const today = new Date();
  const day = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  res.render("list", { day: day, items: items });
});

app.post("/", function (req, res) {
  items.push(req.body.newItem);
  res.redirect("/");
});

app.listen("3000", function () {
  console.log("App running on port 3000");
});
