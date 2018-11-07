// Load modules
const fs = require('fs');
const path = require('path');

// Load item file
let items = JSON.parse(fs.readFileSync(path.join(__dirname, "../items.json"), "utf8"))

// Define functions

// Website actions
