const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    nome: String,
    cargo: String,
    imagem: String,
});

module.exports = mongoose.model('Member', memberSchema);
