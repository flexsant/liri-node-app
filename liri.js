// Code that reads and set any environment variables with the dotenv package
require("dotenv").config();
// Retrieves data and sends requests using the axios package to the Bands in Town, Spotify and OMDB api.
var axios = require("axios");
// Importing keys and storing it in a variable
var keys = require("./keys.js");
// To utilize Node
var moment = require('moment');
moment().format();
// Accessing data from api
var Spotify = require('node-spotify-api');
// Accessing keys information
var spotify = new Spotify(keys.spotify);
// Reads the random.txt file for do-what-it-says function
var fs = require("fs");
// Variable for the if else statement 
var action = process.argv[2];
// Variable sends the song, movie, and concert to their dedicated functions
var search = process.argv.slice(3).join("");
// function that parses the data provided by Spotify API
var runSpotify = function () {
    spotify.search({ type: 'track', query: search, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var artist = data.tracks.items[0].artists[0].name;
        var songName = data.tracks.items[0].name;
        var preview = data.tracks.items[0].preview_url;
        var album = data.tracks.items[0].album.name;
        console.log("\nArtist: ", artist + "\n");
        console.log("Song Title: ", songName + "\n");
        console.log("Song Link: ", preview + "\n");
        console.log("Album Title: ", album + "\n");
    });
}
// function that parses the data provided by BandsinTown API
var runBandsInTown = function () {
    axios.get("https://rest.bandsintown.com/artists/" + search + "/events?")
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }
                var dateTime = response.data[i].dateTime;
                var dateArr = datetime.split('T');

                var concerts = "-------------------------------" +
                    "\nVenue Name: " + response.data[i].venue.name +
                    "\nVenue Location: " + response.data[i].venue.name +
                    "\nDate of the Event: " + moment(dateArr[0], "MM-DD-YYYY");
                console.log(concerts);
            }
        });
}
// function that parses the data provided by OMDB API
function runOmdb(value) {
    if (!value) {
        value = "mr nobody";
    }
    axios.get("https://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            var movieResults =
                "--------------------------------------------------------------------" +
                "\nMovie Title: " + response.data.Title +
                "\nYear of Release: " + response.data.Year +
                "\nIMDB Rating: " + response.data.imdbRating +
                "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
                "\nCountry Produced: " + response.data.Country +
                "\nLanguage: " + response.data.Language +
                "\nPlot: " + response.data.Plot +
                "\nActors/Actresses: " + response.data.Actors;
            console.log(movieResults);
        });
}

function doThis(value) {

    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(',');
        runSpotify(dataArr[0], dataArr[1]);
    })
}

// If else statement that prints from action array 
if (action === "spotify-this-song") {
    runSpotify();
} else if (action === "concert-this") {
    runBandsInTown();
}
else if (action === "movie-this") {
    runOmdb();

}
else if (action === "do-what-it-says") {
    doThis();
}
else {
    console.log("Liri doesn't understand");
}

