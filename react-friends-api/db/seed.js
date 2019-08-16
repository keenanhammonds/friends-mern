const User = require("./models");
const data = require("./data.json");

User.remove({})
  .then(() => {
    User.create(data).then(users => {
      console.log(users);
      process.exit();
    });
  })
  .catch(err => console.log(err));
