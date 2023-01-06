var http = require('http');
const fs = require("fs");
http.createServer(function (req, res) {
  
   
// Read users.json file
fs.readFile("Employee.json", function(err, data) {
      
    // Check for errors
    if (err) throw err;
   
    // Converting to JSON
    const users = JSON.parse(data);
      
    console.log(users); // Print users 
});
}).listen(8091);