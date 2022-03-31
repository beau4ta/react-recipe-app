const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactrecipes"
);

const userSeed = [
    {
        email: 'beau@email.com',
        username: 'beau4ta',
        password: 'password1'
    },
    {
        email: 'john@email.com',
        username: 'jsmith1',
        password: 'password1'
    },
    {
        email: 'jane@email.com',
        username: 'jdoe2',
        password: 'password1'
    }
]
db.User.remove({})
.then(() => db.User.collection.insertMany(userSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
  });
