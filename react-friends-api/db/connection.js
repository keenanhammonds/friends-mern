const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/friends", { useNewUrlParser: true })
  .then(conn => {
    console.log(`connected to mongodb on ${conn.connections[0].name} db`);
  })
  .catch(err => {
    console.error(err);
  });

mongoose.Promise = Promise;

module.exports = mongoose;
