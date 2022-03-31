const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");
const passport = require("passport")
const User = require('../../models/User')
const mongoose = require('mongoose');
require('../../config/passport')(passport);


router.route("/profile/:username")
    .get(recipeController.findByUsername)

    router.post('/signup',function (req, res) { 
      User.create(req.body)
      .then((user) => {
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          console.log(user._id)
          return res.json(user._id);
        })
      })
  });


//Signin Route
router.post('/signin', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      console.log(user)
      if (!user) { return res.json("incorrect username"); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        console.log(user._id)
        return res.json(user._id);
      });
    })(req, res, next);
  });


//check if logged in
router.get('/check', function(req, res) {
  console.log(req.user)
  if(req.user) {
    res.json(true);
  }
  else {
    res.json(false)
  }
})

//Logout Route
router.post('/logout', function (req, res){
  console.log('logged out');
  req.logout();
  res.redirect('/')
});

module.exports = router