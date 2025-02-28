const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Rota para listar os posts
router.get('/', async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.render('blog', { posts });
});

// Rota para exibir o formulário de novo post
router.get('/novo', (req, res) => {
    res.render('novo-post');
});

// Rota para criar um novo post
router.post('/', async (req, res) => {
    const { titulo, conteudo, imagem } = req.body;
    const post = new Post({ titulo, conteudo, imagem });
    await post.save();
    res.redirect('/blog');
});


router.post('/:id/like', async (req, res) => {
    const post = await Post.findById(req.params.id);

  
    await post.incrementLikes();

    res.redirect('/blog');
});

module.exports = router;
