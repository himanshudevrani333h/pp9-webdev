let express = require("express");
let data = require("./data.json");
let server = express(); //ye server creation ke liye hai
 console.log(data);
server.get("/movies", function (req, res) {

  res.json(data);
});

server.get("/genre", function (req, res) {
  // will send data from server to browser

//   let allGenreObjects = data.map(function (el) {
//     return el.genre;
//   });

//   let uniqueGenreObjects = [];

//   for (let i = 0; i < allGenreObjects.length; i++) {
//     let genreId = allGenreObjects[i]["_id"];

//     let index = uniqueGenreObjects.findIndex(function (el) {
//       return el._id == genreId;
//     });

//     if (index == -1) {
//       uniqueGenreObjects.push(allGenreObjects[i]);
//     }
//   }
  

  let datatemp = [];
  for (let i = 0; i < data.length; i++) {
    let dup = false;
    for (let j = 0; j < datatemp.length; j++) {
      if (datatemp[j]._id == data[i].genre._id) dup = true;
    }
    if (!dup) datatemp.push(data[i].genre);
  }

  res.json(datatemp);
});

// this line will start the server on port 3000

server.listen(4000);

// https://localhost:3000           server hosted in local device
