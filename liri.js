//Code added to read and set any enviroment variable with the dotenv package//

// require("dotenv").config();

// // required to access keys.js 
// var keys = require("./keys.js");

// //the keys being read 
// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);


// process.argv will print out any command line arguments.
var input = process.argv
// var inputArray = [];
console.log(process.argv);

for (let j = 0; j < process.argv.length; j++) {  
    console.log(j + ' -> ' + (process.argv[j]));
    // push.argv(splice(2[1]))(inputArray)
    // console.log(inputArray);
}


// Core node package for reading and writing files
var fs = require("fs");

// This block of code will lookup a file called "random.txt".
// It will then add "my-tweets", "movie-this", "do-what-it-says"in the file
fs.writeFile("random.txt", "my-tweets, spotify-this-song, movie-this, do-what-it-says", function(err) {

    // If the code experiences any errors it will log the error to the console.
    if (err) {
      return console.log(err);
    }
  
    // Otherwise, it will print: "random.txt was updated!"
    console.log("random.txt was updated!");
  
  });

// will take ouptut of process.argv[2-5] and add to random.txt


// if (parseFloat(process.argv[2]) === parseFloat(process.argv[3])) {
//     console.log("True")
//     }
    
//     else {
//         console.log("False")
//     }

// for (var i = 2; i < 6.; i++) {
//     console.log(process.argv(3))
// }