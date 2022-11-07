'use strict';

let result = '',
	height = 20;

for (let i = 0; i < height; i++) {
	for(let j = 0; j < height - i; j++) {
		result += ' ';
	}
	if (i === height -1) {
		let temp = 11 ** i + '';
		temp = splitStr(temp);
		result += temp;
		break;
	}
	let temp = 11 ** i + '';
	temp = splitStr(temp);
	result += temp + '\n';
}

function splitStr(stringToSplit) {
	let arreyOfStrings = [];
	for (let i = 0; i < stringToSplit.length; i++) {
		arreyOfStrings[i] = stringToSplit.charAt(i);
	}
	return arreyOfStrings.join(' ');
}

console.log(result);
