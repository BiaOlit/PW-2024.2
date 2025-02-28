const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    titulo: String,
    ano: Number, 
    capa: String,
    faixas: Array,
});

module.exports = mongoose.model('Album', albumSchema);
