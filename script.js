'use strict';

let num = 20;

function showFirstMessege(text) {
	console.log(text);
	let num = 10;
	console.log(num);
}

showFirstMessege('Hello world');
console.log(num);

function culc(a, b) {
	return (a + b);
}

//console.log(culc(4, 3));
//console.log(culc(5, 6));

function ret() {
	let num = 50;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);

const loger = function () {
	console.log('Hello');
};

loger();

const calc = (a, b) => {
	console.log('1');
	return a + b;
};

console.log(calc(5, 6));
