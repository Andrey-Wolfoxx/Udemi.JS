'use strict';

let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		this.count = +prompt('How many films have u seen?', '');
	
		while (this.count == '' || this.count == null || isNaN(this.count)) {
			this.count= +prompt('How many films have u seen?', '');
		} 
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			let a = prompt('One of the last film?', '').trim(),
				b = prompt('Rate it', '').trim();
			
			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				this.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}
		}
	},
	detectPersonalLevel: function () {
		if (this.count < 10) {
			alert("You've seen a few films");
		} else if (this.count >=10 && this.count < 30) {
			alert('You are common viewer');
		} else if (this.count >= 30) {
			alert('You are cinophile');
		} else {
			alert('Error!');
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		this.privat ? this.privat = false : this.privat = true; 
	},
	writeYourGenres: function () {
		for (let i = 0; i < 1; i++) {
			//let a = prompt(`Your favorite genres numbered: ${i + 1}`).trim();
			//if (a != null || a != '') {
			//	this.genres[i] = a;
			//} else {
			//	console.log('Incorrect data');
			//	i--;
			//}

			let genres = prompt(`Введите ваши любимвые жанры через запятую`).trim().toLowerCase();
			if (genres != null || genres != '') {
				this.genres = genres.split(', ');
				this.genres.sort();
			} else {
				console.log('Incorrect data');
				i--;
			}
		}

		this.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	}
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();