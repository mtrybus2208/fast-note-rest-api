const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Promise = require('bluebird');

const notesRoutes = require('./api/routes/notes');
const userRoutes = require('./api/routes/user');

if (process.env.NODE_ENV !== 'production') dotenv.load();

const app = express();
mongoose.Promise = Promise;
/* local */
// mongoose.connect('mongodb://localhost:27017/note-local');
mongoose.connect(`mongodb://mtrybus:${process.env.MONGO_ATLAS_PW}@notes-api-shard-00-00-n7zxg.mongodb.net:27017,notes-api-shard-00-01-n7zxg.mongodb.net:27017,notes-api-shard-00-02-n7zxg.mongodb.net:27017/test?ssl=true&replicaSet=notes-api-shard-0&authSource=admin`);


/* App Middleware */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* CORS */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    return res.status(200).json({});
  }
  next();
});

app.use('/notes', notesRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;

