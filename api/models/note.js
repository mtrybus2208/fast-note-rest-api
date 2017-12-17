const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: false },
  tags: { type: String, required: false },
  importance: { type: Number, required: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Note', noteSchema);
