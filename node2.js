const fs = require("fs");
  
// STEP 1: Reading JSON file
const users = require("./Employee");
   
// Defining new user
let user = {
    name: "New User",
    Experience: 6
};
   
// STEP 2: Adding new data to users object
users.push(user);
   
// STEP 3: Writing to a file
fs.writeFile("Employee.json", JSON.stringify(users), err => {
     
    // Checking for errors
    if (err) throw err; 
   
    console.log("Done writing"); // Success
});