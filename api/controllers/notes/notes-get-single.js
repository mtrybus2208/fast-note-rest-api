const Note = require('./../../models/note');

module.exports = (req, res, next) => {
  const id = req.params.noteId;
  Note.findById(id)
    .select('_id date title description tags importance')
    .then((result) => {
      console.log(`From database ${result}`);
      if (result) {
        res.status(200).json({
          note: result,
          request: {
            type: 'GET',
            url: `${process.env.DOMAIN}/`,
          },
        });
      } else {
        res.status(404).json({ 
          message: 'No valid entry found for provided ID',
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
