// Load modules
const fs = require('fs');
const path = require('path');
const firebase = require('firebase');

// Firebase Stuff
let auth = JSON.parse(fs.readFileSync(path.join(__dirname, "../auth.json"), "utf8"))
var config = {
  apiKey: auth.key,
  authDomain: auth.project + ".firebaseapp.com",
  databaseURL: "https://" + auth.project + ".firebaseio.com",
  storageBucket: auth.project + ".appspot.com"
};
firebase.initializeApp(config);

let db = firebase.database();

for (let i = 0; i < db; i++) {
  console.log(i)
}


// Load item file
let items = JSON.parse(fs.readFileSync(path.join(__dirname, "../items.json"), "utf8"))

// Define functions
function populateTable() {

}
// Website actions
