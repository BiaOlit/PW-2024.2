const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    titulo: String,
    conteudo: String,
    imagem: String,
    likes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});

// Atualiza o número de likes
postSchema.methods.incrementLikes = async function() {
  this.likes += 1;
  await this.save();
};
module.exports = mongoose.model('Post', postSchema);
