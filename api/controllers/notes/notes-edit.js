/**
  * @api {patch} /note/:noteId Patch property of Note Object
  * @apiParam {noteId} id Note unique ID.
  * @bodyParam
  * [ { "propName": "nameOfProperty", "value": "New value" } ] Array of updated properties
*/

const Note = require('./../../models/note');

module.exports = (req, res, next) => {
  const id = req.params.noteId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  const options = { new: true };
  Note.findOneAndUpdate({ _id: id }, { $set: updateOps }, options)
    .then((result) => {
      console.log(`From database ${result}`);
      res.status(200).json({
        message: 'Note updated',
        result,
        request: {
          type: 'GET',
          url: `${process.env.DOMAIN}/notes/${id}`,
        },
      });
    })
    .catch((err) => {
      console.log(`Error from DB: ${err}`);
      res.status(500).json({
        error: err,
      });
    });
};
