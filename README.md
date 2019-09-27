# liri-node-app

## Screen Shot
<img src="unit4gamescreenshot.png" alt="screenshot">

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Javascript - allows dynamic interaction between user and computer data entry
- JQuery - a javascript library that allows for simple yet more diverse and less verbos.
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Summary
This application allows the user to play a matching number game with a computer generated random number. The user chooses from four poisons with different values only seen once it is clicked and the corresponding number is displayed. If the user matches the computer's chosen random number then their win will be tallied. Just as if the user doesn't match the computer generated number then a loss will be tallied. Each new game win or loss with regenarate a computer generated random number and a new random value for each poison. 

## Code Snippet
``````Javascript Spotify
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

``````Javascript OMDB

``````Javascript BandsInTown


## Author Links
[GitHub](https://github.com/flexsant)
[GitHubSite](https://flexsant.github.io/liri-node-app/)