require("dotenv").config();

var axios = require("axios");

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var inquirer = require("inquirer");


// Spotify inquirer prompt asking for user input
inquirer.prompt([

    {
        type: "input",
        name: "artist",
        message: "Choose an artist?"
    },

    {
        type: "list",
        name: ""

    },

]).then(function (user) {
    console.log(user);
    spotify.search({ type: 'track', query: user.artist }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });


})