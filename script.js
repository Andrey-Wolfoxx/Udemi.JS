'use strict';

const hamburger = 3,
	  fries = 3,
	  cola = 0,
	  nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
	console.log('All good!');
} else {
	console.log('Go away!');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);

console.log(!0);