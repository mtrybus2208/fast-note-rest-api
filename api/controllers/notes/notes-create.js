const mongoose = require('mongoose');

const Note = require('./../../models/note');
const User = require('./../../models/user');

module.exports = (req, res, next) => {
  const { userId } = req.userData;
  let receivedUser = null;
  let receivedNote = null;
  User.findById(userId)
    .then((user) => {
      receivedUser = user;
      const note = new Note({
        _id: new mongoose.Types.ObjectId(),
        date: req.body.date,
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
        importance: req.body.importance,
        user: userId,
      });
      return note.save();
    })
    .then((result) => {
      receivedNote = result;
      receivedUser.notes.push(receivedNote._id);
      return receivedUser.save();
    })
    .then(() => {
      res.status(201).json({
        message: 'Created note succesfully',
        createdNote: {
          note: receivedNote,
          request: {
            type: 'GET',
            url: `${process.env.DOMAIN}/notes/${receivedNote._id}`,
          },
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
