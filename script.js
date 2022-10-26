'use strict';

let asterix = '';
const lenght = 9;
let space = lenght;

for (let i = 1; i < lenght; i++) {

	for (let j = space; j > 1; j--)  {
		asterix += ' ';
	}
	space--;

	
	for (let k = 0; k < i * 2; k++) {
		asterix += '*';
	}

	asterix += '\n';
}

console.log(asterix);