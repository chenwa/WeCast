var data = require("../data.json");

exports.addNote = function(req, res) {   
  
  var newNote = new Object();
  newNote.name = req.query.name;
  newNote.date = req.query.data;
  newNote.time = req.query.time;

  data.folders.push(newNote);

  console.log(data);
  res.render('folder', {
    notes: data.notes,
  });
};
