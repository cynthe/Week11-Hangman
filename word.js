// word.js should contain all of the methods which will check the letters guessed versus the random word selected


//METHODS TO CHECK LETTERS GUESSED AGAINST THE RANDOM WORD SELECTED
//This is a constructor file

//this.randomWord = function (){
//	var word = game.value[Math.floor(Math.random() * value.length)];

//}

var Letter = require('./letter.js');

function Word(value) {
	// The word we want our users to guess
	this.value = value;
	// An array of Letter objects that represent our word
	this.letters = value
		.split('')
		.map(function(l) {
			return new Letter(l);
		});
}

// Takes Letters and calls .show on each one,
// collects them into a new array,
// calls .join to return a string
Word.prototype.render = function() {
	return this.letters
		.map(l => l.render()) {
			return v.show();
		};
		.join('');
};
// Takes Letters and calls .show on each one,
// collects them into a new array,
// calls .join to return a string
Word.prototype.render = function() {
	return this.letters
		.map(l => l.render()) {
			return v.show();
		};
		.join('');
};
// Modifiy any correctly guessed letter to set visible to true
// then it will return true or false depending on if a correct letter was guessed
Word.prototype.guess = function(guess) {
	return this.letters
		.map(function(l) {
			var match = (guess === l.value);
			l.visible = l.visible || match;
			return match;
		})
		.some(function(v) {
			return v;
		});
};
// Return true or false depending on if the word has been completely guessed
Word.prototype.finished = function() {
	return this.render() === this.value;

};
//must decrement guesses if they guess wrong
//console.log or .show to print word on screen

module.exports = Word;