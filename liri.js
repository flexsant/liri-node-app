require("dotenv").config();

var axios = require("axios");

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var inquirer = require("inquirer");

var fs = require("fs");

var action = process.argv[2];

var search = process.argv.slice(3).join("");


// concert-this


// spotify-this-song


// movie-this


// do-what-it-says

// Spotify inquirer prompt asking for user input
// inquirer.prompt([

//     {
//         type: "input",
//         name: "artist",
//         message: "Choose an artist?"
//     },


// function for spotify
// ])
// .then(function (user) {
// console.log(user);
var runSpotify = function () {
    spotify.search({ type: 'track', query: search, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var artist = data.tracks.items[0].artists[0].name;
        var songName = data.tracks.items[0].name;
        var preview = data.tracks.items[0].preview_url;
        var album = data.tracks.items[0].album.name;
        console.log("Artist: " , artist);
        console.log(songName);
        console.log(preview);
        console.log(album);
    });
}


// })

// function for omdb

// function bandsintown

// function do what it says

// main processes

if (action === "spotify-this-song") {
    runSpotify();
} else if (action === "concert-this") {
    console.log("concert-this");
}
else if (action === "movie-this") {
    console.log("movie-this");

}
else if (action === "do-what-it-says") {
    console.log("do-what-it-says");
}
else {
    console.log("Liri doesn't understand");
}
