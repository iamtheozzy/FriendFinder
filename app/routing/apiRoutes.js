var path = require('path');


// Exports these variables to server.js for route direction
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
  res.json(friendArray);
});

  app.post("/api/friends"), function(req, res){

    console.log(req.body);
    
  };

};
