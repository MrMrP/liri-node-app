//Needed Requests 

var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = require("fs");
// // required to access keys.js 
var keys = require("./keys.js");
//Code added to read and set any enviroment variable with the dotenv package//
require("dotenv").config();
//End Needed Requests 


// the keys being read 
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


// process.argv will print out any command line arguments.
var input = process.argv
// var inputArray = [];
console.log(process.argv);

for (let j = 0; j < process.argv.length; j++) {  
    console.log(j + ' -> ' + (process.argv[j]));
    // push.argv(splice(2[1]))(inputArray)
    // console.log(inputArray);
}


// TAKING COMMANDS AND ADDING to random.txt

// Core node package for reading and writing files
// var fs = require("fs");

// This block of code will lookup a file called "random.txt".
// It will then add "my-tweets", "movie-this", "spotify-this-song, ""do-what-it-says"in the file
fs.writeFile("random.txt", "my-tweets, spotify-this-song, movie-this, do-what-it-says", function(err) {

    // If the code experiences any errors it will log the error to the console.
    if (err) {
      return console.log(err);
    }
    // Otherwise, it will print: "random.txt was updated!"
    console.log("random.txt was updated!");
  });


// if (parseFloat(process.argv[2]) === parseFloat(process.argv[3])) {
//     console.log("True")
//     }
    
//     else {
//         console.log("False")
//     }

// for (var i = 2; i < 6.; i++) {
//     console.log(process.argv(3))
// }

//END TAKING IN COMMAND LINES


//FOR OMBD REQUESTS


// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

// Grab the movieName which will always be the third node argument.
var movieName = process.argv[2];

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the needed pieces
    console.log("Title: " + JSON.parse(body).Title + "\nYear: " + JSON.parse(body).Year) + "\nIMDB Rating: " + JSON.parse(body).Rating + "\nRotten Tomatos Rating: " + JSON.parse(body).Rating + "\nCountry: " + JSON.parse(body).Country + "\nLanguage: " + JSON.parse(body).Language + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors;
  }

  //If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
  else {

  }
});

//END OMBD REQUESTS