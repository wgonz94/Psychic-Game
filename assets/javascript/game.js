var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft= 9;
var lettersGuessed= [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function winsTotal() {
  document.querySelector("#wins").innerHTML = "Wins: " + wins;
}
function lossesTotal(){
  document.querySelector("#losses").innerHTML = "Losses: " + losses;
}

function countGuessesLeft() {
	document.querySelector("#guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
}

function letterGuesses() {
	document.querySelector("#guesses-so-far").innerHTML = "Your Guesses so far: " + lettersGuessed.join(' ');
}

winsTotal();
lossesTotal();
countGuessesLeft();
letterGuesses();

var reset = function(){
  guessesLeft = 9;
  lettersGuessed = [];
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

document.onkeyup = function(event) {

    guessesLeft--;

 // Determines which key was pressed.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    lettersGuessed.push(userGuess);
	  countGuessesLeft();
  	letterGuesses();

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    



      
    }
  

