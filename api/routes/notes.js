const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /notes',
  });
});

router.post('/', (req, res, next) => {
  const note = {
    date: req.body.date,
    title: req.body.title,
    description: req.body.description,
    tags: req.body.tags,
    importance: req.body.importance,
  };
  res.status(201).json({
    message: 'Handling POST requests to /notes',
    createdNote: note,
  });
});

router.get('/:noteId', (req, res, next) => {
  const id = req.params.noteId;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID',
      id,
    });
  } else {
    res.status(200).json({
      message: 'You passed an ID',
      id,
    });
  }
});

router.patch('/:noteId', (req, res, next) => {
  res.status(200).json({
    message: 'Updated product!',
  });
});

router.delete('/:noteId', (req, res, next) => {
  res.status(200).json({
    message: 'Delated product!',
  });
});

module.exports = router;
