const mongoose = require('mongoose');

const agendaSchema = new mongoose.Schema({
  data: { type: Date, required: true },
  local: { type: String, required: true },
  evento: { type: String, required: true },
});

module.exports = mongoose.model('Agenda', agendaSchema);
