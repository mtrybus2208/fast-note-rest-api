const User = require('./../../models/user');

module.exports = (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .then(() => {
      return res.status(200).json({
        message: 'User deleted',
      });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
      });
    });
};
