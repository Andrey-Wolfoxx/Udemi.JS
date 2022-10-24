'use strict';

const numberOfFilms = +prompt('How many films have u seen?', '');

let personalMovitDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let a = prompt('One of the last film?', ''),
    b = prompt('Rate it', ''),
	c = prompt('One of the last film?', ''),
	d = prompt('Rate it', '');

personalMovitDB.movies[a] = b;
personalMovitDB.movies[c] = d;

console.log(personalMovitDB);
