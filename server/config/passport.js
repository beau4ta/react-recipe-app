const LocalStrategy = require('passport-local').Strategy;

// Load User model
const User = require('../models/User')

module.exports = function(passport) {
  passport.use(
    new LocalStrategy((username, password, done) => {
      console.log("in strategy")
      console.log(username)
      // Match user
      User.findOne({
        username: username
      }).then(user => {
        console.log(user)
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        } 
        if(user.password !== password) {
          return done(null, false, { message: 'password incorrect'});
        }
        else {
          return done(null, user)
        }
      });
    })
  );

};