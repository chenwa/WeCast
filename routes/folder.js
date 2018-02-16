
/*
 * GET folder page.
 */
//Get folder data
var data = require('../data.json');

exports.view = function(req, res){
  res.render('folder', {
    folders: data.folders,  
    notes: data.notes, 
  });
};
