# liri-node-app

# LIRI Bot

### Overview

Here I've created an app called LIRI which is functionality is very similar to the iPhone's Siri user interface.The main difference being  which SIRI uses a Speech Interpretation and Recognition Interface, LIRI will utilize a _Language_ Interpretation and Recognition Interface  (i.e LIRI will be a command line node app that takes in parameters and gives you back data)

### Things LIRI can do

1. LIRI will be able to take in one of the following commands:

    a) `my-tweets`

    b)`spotify-this-song`

    c) `movie-this`

    d) `do-what-it-says`

### What Each Command Does

  a) `node liri.js my-tweets`

      - This will show your last 20 tweets and when they were created at in your terminal/bash window.

  b) `node liri.js spotify-this-song '<song name here>'`

      - This will show the following information about the song in your terminal/bash window
     
       - Artist(s)
     
       - The song's name
     
       - A preview link of the song from Spotify
     
        - The album that the song is from

       Note: If no song is provided then your program will default to "The Sign" by Ace of Base.

  c) `node liri.js movie-this '<movie name here>'`

       Note: This will output the following information to your terminal/bash window:

    
       - Title of the movie.
       - Year the movie came out.
       - IMDB Rating of the movie.
       - Rotten Tomatoes Rating of the movie.
       - Country where the movie was produced.
       - Language of the movie.
       - Plot of the movie.
       - Actors in the movie.
     

      Note: If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    
  c) `node liri.js do-what-it-says`
   
      - Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
      - It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     
      - Feel free to change the text in that document to test out the feature for other commands.


** Hope you enjoy using my LIRI APP. My apolgoies in advance for any breaks/broken code and for any uspetting user functionality. This is a work in progress. Note: any particlar pieces not funcitoning properly has been pseudocoded for reference and will be fixed at a later time.

Thank You!

MrMrP
