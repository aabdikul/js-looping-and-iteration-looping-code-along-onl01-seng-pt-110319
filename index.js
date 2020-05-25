// Code your solutions in this file

function writeCards(friends, surprise) {
	let array = []
	for (let i=0; i < friends.length; i++) {
		array.push(`Thank you, ${friends[i]}, for the wonderful ${surprise} gift!`);
	}
	return array;
}

function countDown(number) {
	let i = number;
	while (i >= 0) {
		console.log(i);
		i--
	}
}