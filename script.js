'use strict';

const numberOfFilms = +prompt('How many films have u seen?', '');

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	let a = prompt('One of the last film?', ''),
		b = prompt('Rate it', '');
	
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
}

if (personalMovieDB.count < 10) {
	alert("You've seen a few films");
} else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
	alert('You are common viewer');
} else if (personalMovieDB.count >= 30) {
	alert('You are cinophile');
} else {
	alert('Error!');
}

console.log(personalMovieDB);