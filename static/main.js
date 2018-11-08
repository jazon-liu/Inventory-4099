/*========= TODO =========*/
/* Use an API to automatically get csv from inventory sheet and convert to JSON */
/* Automate collection of csv data when sheet is updated */
// CSV URL (Copy): https://docs.google.com/a/team4099.com/spreadsheets/d/1YVnjXinLYBRPBY3uEe10vgiO9Z9fyTDe9Z6JLuPUliA/export?format=csv&id=1YVnjXinLYBRPBY3uEe10vgiO9Z9fyTDe9Z6JLuPUliA&gid=0

// Once system is set up completely, just update file one last time and have people use that

/*

*/

// Load modules
const fs = require('fs');
const path = require('path');
const firebase = require('firebase');
/*
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
*/

// Load item file
let items = JSON.parse(fs.readFileSync(path.join(__dirname, "../items.json"), "utf8"))

// Define functions
function populateTable() {

}
// Website actions
