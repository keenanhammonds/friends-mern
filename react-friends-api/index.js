const express = require("express");
const parser = require("body-parser");
const app = express();
const cors = require("cors");
const User = require("./db/models");


app.use(parser.json());
app.use(cors());

app.get("/users", (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => console.log(err));
});

app.post("/users", (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

app.get("/users/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

app.put("/:id", (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  })
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

app.delete("/:id", (req, res) => {
  User.findOneAndDelete({ _id: req.params.id })
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`PORT: ${app.get("port")}`);
});
