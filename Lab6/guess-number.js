function playGame() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const input = prompt("Guess a number between 1 and 10:");
  if (input === null) return;

  const userGuess = Number(input);
  if (!Number.isInteger(userGuess) || userGuess < 1 || userGuess > 10) {
    alert("Please enter a valid number between 1 and 10.");
    return;
  }

  if (userGuess === randomNumber) {
    alert("Good Work! You guessed it right.");
  } else {
    alert(`Not matched. The correct number was ${randomNumber}.`);
  }
}
