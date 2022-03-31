const db = require("../models");

module.exports = {
    //search a user and see their watch list
    findByUsername: function (req, res) {
      db.User.find({
        $text: { $search: req.params.username, $caseSensitive: false },
      })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
    findAll: function (req, res) {
      db.Recipe.find(req.query)
        .sort({ date: -1 })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
    findById: function (req, res) {
      db.Recipe.findById(req.params.id)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
      db.Recipe.create(req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
      db.Recipe.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
      db.Recipe.findById({ _id: req.params.id })
        .then((dbModel) => dbModel.remove())
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
  };
  