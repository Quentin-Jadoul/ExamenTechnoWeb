let Appartment = require('../models/appartmentModel');

let connection = require('../db.js');

exports.roomList = function(req,res){
    connection.query("select * from rooms;", function(error,result) {
        if (error) console.log(error);
        console.log(result.id);
        appartment = new Appartment(result);
        console.log(appartment);
        res.render('roomList.ejs',{appartment: result});
    });
}