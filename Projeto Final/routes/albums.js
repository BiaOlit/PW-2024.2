const express = require('express');
const router = express.Router();
const Album = require('../models/Album');


router.get('/', async (req, res) => {
    const albums = await Album.find();
    res.render('discografia', { albums });
});


router.get('/:id', async (req, res) => {
    const album = await Album.findById(req.params.id);
    res.render('detalhes-album', { album });
});

module.exports = router;
