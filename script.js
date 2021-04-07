console.log("Hello, Airtable");

var Airtable = require("airtable");

var base = new Airtable({ apiKey: "key36DMlmYm8Ica1w" }).base(
  "appKKY5lkROSOnbZf"
);
 
base("songs").select({
	view: "Rating"
}).eachPage(gotPageOfSongs, gotAllSongs);

var songs = [];

function gotPageOfSongs(records, fetchNextPage){
console.log("gotPageOfSongs()");
songs.push(...records);
fetchNextPage();
}

function gotAllSongs(err){
console.log("gotAllSongs()");

if (err) {
	console.log("error loading songs");
	console.error(err);
	return;
}

consoleLogSongs();
showSongs();
}

function consoleLogSongs() {
	console.log("consoleLogSongs()");
	songs.forEach((song) => {
		console.log("Song:", song);
	});
}

function showSongs() {
	console.log("showSongs()");
	songs.forEach((song) => {

		let songContainer = document.createElement("div");
		songContainer.classList.add("song-container");
		document.querySelector(".container").append(songContainer);
	
		let songTitle = document.createElement("h1");
		songTitle.classList.add("song-title");
		songTitle.innerText = song.fields.title;
		songContainer.append(songTitle);

		let songArtist = document.createElement("h2");
		songArtist.classList.add("song-artist");
		songArtist.innerText = song.fields.artist;
		songContainer.append(songArtist);

		let songYear = document.createElement("p");
		songYear.classList.add("song-year");
		songYear.innerText = song.fields.year;
		songContainer.append(songYear);

		let songLyrics = document.createElement("p");
		songLyrics.classList.add("song-lyrics");
		songLyrics.innerText = song.fields.lyrics;
		songContainer.append(songLyrics);

		let songRating = document.createElement("h3");
		songRating.classList.add("song-rating");
		songRating.innerText = "Rating: "+ song.fields.rating;
		songContainer.append(songRating);

		let songGenres = document.createElement("h3");
		songGenres.classList.add("song-genres");
		songGenres.innerText = song.fields.genres;
		songContainer.append(songGenres);

		var songImage = document.createElement("img");
		songImage.classList.add("song-image");
		songImage.src = song.fields.image[0].url;
		songContainer.append(songImage);

		songContainer.addEventListener("click", function() {
			songLyrics.classList.toggle("active");
			songRating.classList.toggle("active");
			songGenres.classList.toggle("active");
			songImage.classList.toggle("active");
		})

		var songGenre = song.fields.genres;
		songGenre.forEach(function(genre) {
			songContainer.classList.add(genre)
		})

		var filterPop = document.querySelector('.pop');
		filterPop.addEventListener("click", function() {

			if (songContainer.classList.contains("pop")) {
				songContainer.style.background = "darkgreen"
				songContainer.style.color = "white"
			} else {
				songContainer.style.background = "white";
				songContainer.style.color = "darkgreen"
			}
		})

		var filterRap = document.querySelector('.rap');
		filterRap.addEventListener("click", function() {

			if (songContainer.classList.contains("rap")) {
				songContainer.style.background = "darkgreen"
				songContainer.style.color = "white"
			} else {
				songContainer.style.background = "white";
				songContainer.style.color = "darkgreen"
			}
		})

		var filterHip_Hop = document.querySelector('.hip_hop');
		filterHip_Hop.addEventListener("click", function() {

			if (songContainer.classList.contains("hip_hop")) {
				songContainer.style.background = "darkgreen"
				songContainer.style.color = "white"
			} else {
				songContainer.style.background = "white";
				songContainer.style.color = "darkgreen"
			}
		})

		var filterNeo_Soul = document.querySelector('.neo_soul');
		filterNeo_Soul.addEventListener("click", function() {

			if (songContainer.classList.contains("neo_soul")) {
				songContainer.style.background = "darkgreen"
				songContainer.style.color = "white"
			} else {
				songContainer.style.background = "white";
				songContainer.style.color = "darkgreen"
			}
		})

		var filterAlternative_Indie = document.querySelector('.alternative_indie');
		filterAlternative_Indie.addEventListener("click", function() {

			if (songContainer.classList.contains("alternative_indie")) {
				songContainer.style.background = "darkgreen"
				songContainer.style.color = "white"
			} else {
				songContainer.style.background = "white";
				songContainer.style.color = "darkgreen"
			}
		})

		var filterRock = document.querySelector('.rock');
		filterRock.addEventListener("click", function() {

			if (songContainer.classList.contains("rock")) {
				songContainer.style.background = "darkgreen"
				songContainer.style.color = "white"
			} else {
				songContainer.style.background = "white";
				songContainer.style.color = "darkgreen"
			}
		})

		var filterDance_Electronic = document.querySelector('.dance_electronic');
		filterDance_Electronic.addEventListener("click", function() {

			if (songContainer.classList.contains("dance_electronic")) {
				songContainer.style.background = "darkgreen"
				songContainer.style.color = "white"
			} else {
				songContainer.style.background = "white";
				songContainer.style.color = "darkgreen"
			}
		})

		var filterReset = document.querySelector('.js-reset')
		filterReset.addEventListener("click", function(){
			songContainer.style.background = "white";
				songContainer.style.color = "darkgreen"
			})



	});
}