// Load modules
const fs = require('fs');
const path = require('path');
const firebase = require('firebase');
const fetch = require('fetch');

// Firebase Stuff
let auth = JSON.parse(fs.readFileSync(path.join(__dirname, "../auth.json"), "utf8"))
var config = {
  apiKey: auth.key,
  authDomain: "inventory-4099.firebaseapp.com",
  databaseURL: "https://inventory-4099.firebaseio.com",
  storageBucket: "inventory-4099.appspot.com"
};
firebase.initializeApp(config);

let db = firebase.database();
fetch("https://inventory-4099.firebaseio.com/data.json?shallow=true").then(response => {
  return response.json();
}).then(data => {
  console.log(data);
})



// Load item file
let items = JSON.parse(fs.readFileSync(path.join(__dirname, "../items.json"), "utf8"))

// Define functions
function populateTable() {

}
// Website actions
