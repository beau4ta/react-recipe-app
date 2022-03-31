const express = require("express");
const session = require('express-session');
const mongoose = require('mongoose');
const path = require("path");
const routes = require("./routes");
const app = express();
const passport = require('passport')
require('./config/passport')(passport);
const User = require("./models/User")
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({  secret: 'secret',  resave: true,  saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//passport serialize 
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(_id, done) {
  User.findById(_id, function(err, user) {
    done(err, user);
  });
});

app.use(routes);

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactrecipes'), 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
