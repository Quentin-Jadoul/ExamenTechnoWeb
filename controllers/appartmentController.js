let Appartment = require('../models/appartmentModel');

let connection = require('../db.js');

exports.roomList = function(req,res){
    // connection.query("select * from formation;", function(error,result) {
    //     if (error) console.log(error);
    //     catalog = new Catalog(result);
    //     res.render('roomList.ejs');
    // });
    res.render('roomList.ejs');
}