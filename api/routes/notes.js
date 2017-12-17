const express = require('express');

const checkAuth = require('./../middleware/check-auth');
const fromNotesController = require('./../controllers/notes');

const router = express.Router();

router.get('/', checkAuth, fromNotesController.getNotes);

router.get('/:noteId', checkAuth, fromNotesController.getSingleNote);

router.post('/', checkAuth, fromNotesController.createNotes);

router.patch('/:noteId', checkAuth, fromNotesController.editNote);

router.delete('/:noteId', checkAuth, fromNotesController.deleteNote);

module.exports = router;
