const User = require('./../../models/user');

module.exports = (req, res, next) => {
  User.find()
    .populate('notes')
    .then((users) => {
      console.log(users)
      return res.status(200).json({
        users,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
      });
    });
};
