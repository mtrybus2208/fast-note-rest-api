const Note = require('./../../models/note');

module.exports = (req, res, next) => {
  const id = req.params.noteId;
  Note.remove({ _id: id })
    .then((result) => {
      console.log(`From database ${result}`);
      res.status(200).json({
        message: 'Note deleted',
      });
    })
    .catch((err) => {
      console.log(`Error from DB: ${err}`);
      res.status(500).json({
        error: err,
      });
    });
};
