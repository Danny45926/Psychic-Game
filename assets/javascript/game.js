 var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var userGuess = 'event.key';

var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 9;
var guessedLetters = [];

var targetDiv=document.getElementById("game")

  targetDiv.innerHTML = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Guessed Letters: " + guessedLetters + "</p>";

document.onkeyup = function(event) { 
  var targetDiv=document.getElementById("game")

  targetDiv.innerHTML = 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Guessed Letters: " + guessedLetters + "</p>";

  var userGuess = event.key; //user guess

  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; //cpu guess


    if (userGuess === computerGuess) {
      wins++;
    }//increse score by 1 when your guess = cpu guess
    else {
      guessesLeft--;
    }//or subtract 1 guess if they dont match


    if (guessesLeft === 0) {
      losses++;
    }//if all guesses used add 1 to loss count

  

}
