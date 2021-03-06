//choices to the computer to use for the user to guess
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft= 9;
var lettersGuessed= [];

//generating random choices (or random guess)
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
//reset the game when user wins or loses
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

    
  if (userGuess === computerGuess){
    wins++;
    alert("You Win!!")
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    reset();
  } else if (guessesLeft === 0) {
    losses++;
    alert("You Lose! ")
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    reset();
  }


      
    }
  

