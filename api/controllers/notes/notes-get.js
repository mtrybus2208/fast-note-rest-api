const Note = require('./../../models/note');

module.exports = (req, res, next) => {
  Note.find({ user: req.userData.userId })
    .select('_id date title description tags importance')
    .then((dbResults) => {
      const response = {
        count: dbResults.length,
        results: dbResults.map((result) => {
          const note = {
            _id: result._id,
            date: result.date,
            title: result.title,
            description: result.description,
            tags: result.tags,
            importance: result.importance,
          };
          return {
            note,
            request: {
              type: 'GET',
              url: `${process.env.DOMAIN}/notes/${result._id}`,
            },
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(`Error from database ${err}`);
      res.status(500).json({
        error: err,
      });
    });
};

