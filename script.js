'use strict';

let numberOfFilms;


function start() {
	numberOfFilms = +prompt('How many films have u seen?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('How many films have u seen?', '');
	} 
}

start();

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		let a = prompt('One of the last film?', '').trim(),
			b = prompt('Rate it', '').trim();
		
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert("You've seen a few films");
	} else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
		alert('You are common viewer');
	} else if (personalMovieDB.count >= 30) {
		alert('You are cinophile');
	} else {
		alert('Error!');
	}
}

detectPersonalLevel();

console.log(personalMovieDB);

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Your favorite genres numbered: ${i}`);
	}
}

writeYourGenres();