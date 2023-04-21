const express = require('express');
const { default: mongoose, Mongoose } = require('mongoose');
const app = express();
const path = require('path');
const userController = require('./controllers/UserController.js');
const cors = require('cors');

mongoose.connect(
  'mongodb+srv://LukeDriscoll:Seaeagles4@cluster0.osgyvto.mongodb.net/?retryWrites=true&w=majority'
);

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('src'));
app.use(cors());

app.post('/users', userController.getUser, (req, res) => {
  return res.status(200).json(res.locals.login);
});

app.post('/newusers', userController.newUser, (req, res) => {
  return res.status(200).json(res.locals.newUser);
});

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  return res.status(400).send(res.locals.message);
});

app.listen(3000);
