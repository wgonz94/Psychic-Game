var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft= 9;
var lettersGuessed= "";

var lettersguessedText = document.getElementById("guesses-so-far-text");
// var userChoiceText = document.getElementById("userchoice-text");
// var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("guesses-left-text");


document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // Reworked our code from last step to use "else if" instead of lots of if statements.

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if (userGuess === computerGuess) {
        wins++;
      } else if (userGuess !== computerGuess) {
        lettersGuessed.textContent = userGuess;
        guessesLeft--;
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
  

