const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = require('./../../models/user');

module.exports = (req, res, next) => {
  bcrypt.hash(req.body.password, bcrypt.genSaltSync(10))
    .then((hash) => {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: hash,
        notes: [],
      });
      return user.save();
    })
    .then((user) => {
      const { _id, email, notes } = user;
      const token = jwt.sign(
        { email: user.email, userId: user._id },
        process.env.JWT_KEY,
        { expiresIn: 7200 }
      );
      return res.status(201).json({
        message: 'User created successfully',
        user: {
          _id,
          email,
          token,
          notes,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    });
};
