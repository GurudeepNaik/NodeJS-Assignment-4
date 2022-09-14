const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.set("view engine", "ejs");
// your code goes here
app.get("/", (req, res) => {
  res.render("view");
});
app.post("/add", (req, res) => {
  res.status(200).send({
    status: "success",
    message: "the sum of given two numbers",
    sum: Number(req.body.num_1) + Number(req.body.num_2),
  });
});
app.post("/sub", (req, res) => {
  res.status(200).send({
    status: "success",
    message: "the difference of given two numbers",
    difference: Number(req.body.num_1) - Number(req.body.num_2),
  });
});
app.post("/multiply", (req, res) => {
  console.log(Number(req.body.num_1) * Number(req.body.num_2));
  res.status(200).send({
    status: "success",
    message: "The product of given numbers",
    result: Number(req.body.num_1) * Number(req.body.num_2),
  });
});
app.post("/divide", (req, res) => {
  if (Number(req.body.num_2) == 0) {
    res.status(200).send({
      status: "error",
      message: "Cannot divide by zero",
    });
  } else {
    res.status(200).send({
      status: "success",
      message: "The division of given numbers",
      result: Number(req.body.num_1) / Number(req.body.num_2),
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
