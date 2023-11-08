const express = require("express");
const bodyParser = require("body-parser");

// The "express" function returns an object that contains many methods such as 'listen', 'get', 'post', 'use', etc.
const app = express();

app.use(bodyParser.urlencoded());

// 'listen' establishes a port to be listened and a callback function that fires as soon as the server is launched.
app.listen(3000, () => {
  console.log("Listening to port 3000");
});

// Just so we don't have to write down {root: __dirname} at every request
const root = __dirname;

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

const obj = {
  school: "BeCode",
  year: 2023,
};

app.post("/", (req, res) => {
  // Sends json back
  console.log(req.body);
  res.json(obj);
});

// Remember that the code will run untill it finds a match. "use" is a match for any request. So in this case, we want to put it at the end as a "catch all"
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root });
});
