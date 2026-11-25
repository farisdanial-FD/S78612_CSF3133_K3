// Store the allowed moves, the outcome for each round, and the totals.
const choices = ["rock", "paper", "scissors"];
const results = [];
const totals = { Win: 0, Lose: 0, Draw: 0 };
const colors = { Win: "green", Lose: "red", Draw: "gray" };
let gameStarted = false;

// Validate the name and start a session. Serialize the name as text before using innerHTML.
function startGame() {
  if (gameStarted) return;
  const nameInput = document.getElementById("playerName");
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter your name.");
    nameInput.focus();
    return;
  }

  const safeName = document.createElement("strong");
  safeName.textContent = name;
  document.getElementById("welcome").innerHTML = `Welcome, ${safeName.outerHTML}!`;
  document.getElementById("startTime").textContent = `Started on: ${Date()}`;
  gameStarted = true;
  nameInput.readOnly = true;
  document.getElementById("startButton").disabled = true;
  document.getElementById("rockButton").focus();
}

// Pick one of the three moves with an index from 0 through 2.
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function capitalise(move) {
  return move[0].toUpperCase() + move.slice(1);
}

// Change the image source and the caption for one side of the match.
function displayMove(side, move) {
  const image = document.getElementById(`${side}Img`);
  image.src = `${move}.png`;
  image.hidden = false;
  document.getElementById(`${side}Placeholder`).hidden = true;
  document.getElementById(`${side}Move`).textContent = capitalise(move);
}

function updateScore() {
  document.getElementById("wins").textContent = totals.Win;
  document.getElementById("losses").textContent = totals.Lose;
  document.getElementById("draws").textContent = totals.Draw;
}

// Decide the winner, then update the images, status, score and history.
function playRound(playerChoice) {
  if (!gameStarted) {
    alert("Click Start Game first.");
    return;
  }
  if (!choices.includes(playerChoice)) return;

  const computerChoice = getComputerChoice();
  let outcome;
  if (playerChoice === computerChoice) {
    outcome = "Draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    outcome = "Win";
  } else {
    outcome = "Lose";
  }

  displayMove("player", playerChoice);
  displayMove("computer", computerChoice);
  const result = document.getElementById("result");
  result.textContent = { Win: "Win!", Lose: "Lose — the computer wins.", Draw: "Draw — same move." }[outcome];
  result.style.color = colors[outcome];
  totals[outcome]++;
  results.push(outcome);
  updateScore();

  // The row contains only known moves and outcomes, never the player's input.
  document.getElementById("historyBody").innerHTML += `
    <tr>
      <td>${results.length}</td>
      <td>${capitalise(playerChoice)}</td>
      <td>${capitalise(computerChoice)}</td>
      <td>${outcome}</td>
    </tr>`;

  if (document.getElementById("summary").textContent !== "") showSummary();
}

// Use a loop to count wins and avoid division by zero before the first round.
function showSummary() {
  let wins = 0;
  for (let i = 0; i < results.length; i++) {
    if (results[i] === "Win") wins++;
  }
  const rounds = results.length;
  const percent = rounds === 0 ? 0 : Math.round(wins / rounds * 100);
  document.getElementById("summary").textContent =
    `You played ${rounds} ${rounds === 1 ? "round" : "rounds"} and won ${percent}%.`;
}

// Clear the session, keeping the table header available for the next player.
function resetGame() {
  gameStarted = false;
  results.length = 0;
  totals.Win = totals.Lose = totals.Draw = 0;
  updateScore();

  document.getElementById("historyBody").innerHTML = "";
  document.getElementById("welcome").textContent = "";
  document.getElementById("result").textContent = "";
  document.getElementById("result").style.color = "";
  document.getElementById("summary").textContent = "";
  document.getElementById("startTime").textContent = "";

  for (const side of ["player", "computer"]) {
    const image = document.getElementById(`${side}Img`);
    image.hidden = true;
    image.src = "rock.png";
    document.getElementById(`${side}Placeholder`).hidden = false;
    document.getElementById(`${side}Move`).textContent = "Waiting";
  }

  const nameInput = document.getElementById("playerName");
  nameInput.value = "";
  nameInput.readOnly = false;
  document.getElementById("startButton").disabled = false;
  nameInput.focus();
}