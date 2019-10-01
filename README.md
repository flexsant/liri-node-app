# liri-node-app

## Screen Shot
<img src="unit4gamescreenshot.png" alt="screenshot">

## Technologies Used
- AXIOS - 
- Bands in Town API -
- CSS - styles html elements on page
- HTML - used to create elements on the DOM
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Javascript - allows dynamic interaction between user and computer data entry
- JQuery - a javascript library that allows for simple yet more diverse and less verbos.
- Moment - 
- NODE.js - 
- OMDB API - 
- Spotify API -



## Summary


## Code Snippet
``````Javascript Spotify

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