//Code added to read and set any enviroment variable with the dotenv package//

require("dotenv").config();

var stuffINeed = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);