const express = require('express');
const {addToPlaylist,getPlaylist,removeFromPlaylist} = require('../controllers/playlist');
const router = express.Router();

router.post('/playlist/add', addToPlaylist);
router.get('/playlist/:userId', getPlaylist);
router.delete('/playlist/:userId/:storyId', removeFromPlaylist);




module.exports = router;
