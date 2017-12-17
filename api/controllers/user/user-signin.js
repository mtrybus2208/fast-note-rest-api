const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./../../models/user');

module.exports = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .populate('notes')
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          title: 'Auth failed',
          error: { message: 'Invalid login credentials' },
        });
      }

      return bcrypt.compare(req.body.password, user.password)
        .then((result) => {
          if (result) {
            /* Auth successful */
            const token = jwt.sign(
              { email: user.email, userId: user._id },
              process.env.JWT_KEY,
              { expiresIn: 7200 }
            );
            return res.status(200).json({
              message: 'Auth successful',
              user: {
                _id: user._id,
                email: user.email,
                token,
                notes: user.notes,
              },
            });
            /* Auth successful */
          }
          return res.status(401).json({
            title: 'Auth failed',
            error: { message: 'Invalid login credentials' },
          });
        });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
      });
    });
};
