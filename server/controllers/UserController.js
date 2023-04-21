const mongoose = require('mongoose');
const User = require('../models/UserModel.js');

const userController = {};

userController.getUser = (req, res, next) => {
  User.findOne({ username: req.body.username, password: req.body.password })
    .then((user) => {
      if (user) {
        res.locals.login = user;
        next();
      } else {
        res.locals.login = null;
        next();
      }
    })
    .catch((err) => {
      console.log('User not found');
      next({ message: 'Error in getUser' });
    });
};

userController.newUser = (req, res, next) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((newUser) => {
      if (newUser) {
        res.locals.newUser = newUser;
      }
    })
    .catch((err) => {
      next({ message: 'Error in newUser' });
    });
};

module.exports = userController;
