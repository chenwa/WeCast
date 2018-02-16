/*
 * GET home page.
 */
//Get folder data
var data = require('../data.json');

exports.view = function(req, res){
  res.render('index', {
    folders: data.folders,
    notes: data.notes,   

  });
};
