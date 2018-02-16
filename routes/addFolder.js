var data = require("../data.json");

exports.addFolder = function(req, res) {   
  
  var newFolder = new Object();
  newFolder.name = req.query.name;
  newFolder.sync = "none";
  newFolder.folderID = req.query.name;

  data.folders.push(newFolder);

  console.log(data);
  res.render('index', {
    folders: data.folders,
    notes: data.notes, 
  });
};
