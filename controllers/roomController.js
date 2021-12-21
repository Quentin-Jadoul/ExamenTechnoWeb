let Room = require('../models/roomModel');

let connection = require('../db.js');

exports.add = function(req,res){
    res.render('newRoom.ejs');
}

exports.save = function(req,res){
    connection.query(`INSERT INTO rooms (name, length,width) VALUES ('${req.body.name}',${req.body.length},${req.body.width});`, function(error,result) {
        if (error) console.log(error);
    });
    res.redirect('/appartment')
}
