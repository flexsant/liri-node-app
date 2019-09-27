// Code that reads and set any environment variables with the dotenv package
require("dotenv").config();
// Retrieves data and sends requests using the axios package to the Bands in Town, Spotify and OMDB api.
var axios = require("axios");
// Importing keys and storing it in a variable
var keys = require("./keys.js");
// Accessing data from api
var Spotify = require('node-spotify-api');
// Accessing keys information
var spotify = new Spotify(keys.spotify);
// 
// var inquirer = require("inquirer");
// 
var fs = require("fs");
// variable returns an array containing command line arguments
var action = process.argv[2];
// variable that returns search parameters type, query, limit
var search = process.argv.slice(3).join("");

// function that parses the data provided by spotify api
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
        console.log("Song Title: " ,songName);
        console.log("Song Link: " ,preview);
        console.log("Album Title: " ,album);
    });
}

// If else statement that prints from action array 
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
