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

document.onkeyup = function(event) {

    guessesLeft--;

 // Determines which key was pressed.
    var userGuess = event.key;
    
    // Reworked our code from last step to use "else if" instead of lots of if statements.

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if (userGuess !== computerGuess) {
        guessesLeft--;

      } else if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
      } else {
        losses++;
        guessesLeft = 9;
      }


      // Hide the directions
      // directionsText.textContent = "";

      // Display the user and computer guesses, and wins/losses/ties.
     
      winsText.textContent = "wins: " + wins;
      lossesText.textContent = "losses: " + losses;
      tiesText.textContent = "ties: " + ties; 
      userChoiceText.textContent = "You chose: " + userGuess;
      computerChoiceText.textContent = "The computer chose: " + computerGuess;
    }
  

