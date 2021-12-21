let express = require('express');
let router = express.Router();

let appartmentController = require('./controllers/appartmentController');
let roomController = require('./controllers/roomController');

//Liste des routes vers les controleurs
router.get('/', (req,res) => res.redirect('/appartment'));
router.get('/appartment', appartmentController.roomList);

module.exports = router;