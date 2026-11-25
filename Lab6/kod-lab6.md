# Lab 6 — Kod untuk copy-paste

**Cara guna:** Cipta satu folder `lab6`. Simpan semua fail di bawah dalam folder itu, termasuk kedua-dua GIF. Tampal setiap blok kod ke fail dengan nama yang tertera, kemudian buka fail `.html` yang hendak diuji di Chrome.

- **6.3–6.11:** Buka fail HTML untuk latihan yang kau nak uji. Fail `.js` dan GIF kekal di sebelah fail HTML.
- **6.12:** Buka `index.html` untuk kuiz. Untuk eLearn, guna `lab6-kuiz-hantar.zip` atau ZIP sendiri `index.html`, `style.css`, dan `script.js` sahaja.

## 6.3 Basic JavaScript

Cuba `firstjs.html` dahulu. Untuk langkah 3, guna kod versi berformat untuk menggantikan kandungan fail itu, atau jalankan `firstjs-formatted.html` secara berasingan.

### `firstjs.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First JS</title>
</head>
<body>
  <script>
    document.write("My First JS!");
  </script>
</body>
</html>
```

### `firstjs-formatted.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First JS</title>
</head>
<body>
  <script>
    document.write("<b>My First</b> " + "<i>Java Script</i>");
  </script>
</body>
</html>
```

## 6.4 getElementById()

Manual guna semula `firstjs.html` untuk langkah 6.4. Versi ini dinamakan `firstjs-6.4.html` supaya tidak menimpa fail 6.3. Kalau perlu ikut nama dalam manual, gantikan isi `firstjs.html` dengan kod di bawah pada langkah 6.4.

### `firstjs-6.4.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Change HTML Content</title>
</head>
<body>
  <h2>What Can JavaScript Do?</h2>
  <p id="demo">JavaScript can change HTML content.</p>
  <button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>
    Click Me!
  </button>
</body>
</html>
```

## 6.5 Date and Time

Klik butang untuk paparkan tarikh dan waktu. JavaScript juga menukar warna teks kepada merah dan latar kepada kuning.

### `datetimejs.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Date and Time</title>
</head>
<body>
  <button type="button" onclick="showDateTime()">Click me to display Date and Time</button>
  <p id="demo"></p>

  <script>
    function showDateTime() {
      const demo = document.getElementById("demo");
      demo.innerText = Date();
      demo.style.color = "red";
      demo.style.backgroundColor = "yellow";
    }
  </script>
</body>
</html>
```

## 6.6 Change HTML Attribute Values

Letakkan `pic_bulbon.gif` dan `pic_bulboff.gif` di sebelah fail HTML. Kedua-dua GIF asal daripada pautan lab sudah ada dalam folder ini dan dalam ZIP semua latihan.

### `changelight.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Change the Light</title>
</head>
<body>
  <h2>What Can JavaScript Do?</h2>
  <p>JavaScript can change HTML attribute values.</p>
  <p>Here, JavaScript changes the src attribute of the image.</p>

  <button type="button" onclick="setLight(true)">Turn on the light</button>
  <img id="myImage" src="pic_bulboff.gif" width="100" height="180" alt="Light bulb is off">
  <button type="button" onclick="setLight(false)">Turn off the light</button>

  <script>
    function setLight(isOn) {
      const image = document.getElementById("myImage");
      image.src = isOn ? "pic_bulbon.gif" : "pic_bulboff.gif";
      image.alt = isOn ? "Light bulb is on" : "Light bulb is off";
    }
  </script>
</body>
</html>
```

## 6.7 External JavaScript

Klik **Click Me** untuk uji bahawa `message.js` sudah disambung.

### `extjavascript.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>External JavaScript Example</title>
  <script src="message.js"></script>
</head>
<body>
  <h2>Click the Button to See the Message</h2>
  <button type="button" onclick="msg()">Click Me</button>
</body>
</html>
```

### `message.js`

```js
function msg() {
  alert("Hello UMT student");
}
```

## 6.8 Working with Events

Klik kanan pada halaman ini untuk uji acara `contextmenu`.

### `disable-right-click.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Disable Right-Click</title>
  <script>
    document.addEventListener("contextmenu", function (event) {
      event.preventDefault();
      alert("Right-click is disabled on this page.");
    });
  </script>
</head>
<body>
  <h2>Right-Click Disabled</h2>
  <p>Try right-clicking anywhere on this page.</p>
</body>
</html>
```

## 6.9 Multiplication Table

Cuba 3 baris dan 4 lajur. Nilai terakhir ialah 12. Hadnya 50 supaya jadual yang terlalu besar tidak membekukan tab.

### `multiplication-table.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Multiplication Table</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    h2 { color: #333; }
    table { border-collapse: collapse; width: 100%; }
    td { border: 1px solid #ddd; text-align: center; padding: 8px; }
    input, button { padding: 10px; margin: 5px 0; }
    #tableContainer { margin-top: 16px; overflow-x: auto; }
  </style>
</head>
<body>
  <h2>Multiplication Table Generator</h2>
  <p>Enter a whole number from 1 to 50 for each field.</p>
  <label for="rows">Enter number of rows:</label>
  <input type="number" id="rows" min="1" max="50" placeholder="Rows">
  <br>
  <label for="columns">Enter number of columns:</label>
  <input type="number" id="columns" min="1" max="50" placeholder="Columns">
  <br>
  <button type="button" onclick="generateTable()">Generate Table</button>
  <div id="tableContainer"></div>
  <script src="multiplication-table.js"></script>
</body>
</html>
```

### `multiplication-table.js`

```js
function generateTable() {
  const rows = document.getElementById("rows").valueAsNumber;
  const columns = document.getElementById("columns").valueAsNumber;

  if (!Number.isInteger(rows) || !Number.isInteger(columns) ||
      rows < 1 || columns < 1 || rows > 50 || columns > 50) {
    alert("Please enter whole numbers from 1 to 50 for rows and columns.");
    return;
  }

  let tableHTML = '<table aria-label="Multiplication table">';
  for (let i = 1; i <= rows; i++) {
    tableHTML += "<tr>";
    for (let j = 1; j <= columns; j++) {
      tableHTML += `<td>${i * j}</td>`;
    }
    tableHTML += "</tr>";
  }
  tableHTML += "</table>";

  document.getElementById("tableContainer").innerHTML = tableHTML;
}
```

## 6.10.1 Form Validation

Cuba hantar tanpa nama, kemudian dengan nama contoh.

### `form-validation.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Form Validation</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    .form-group { margin-bottom: 10px; }
    label { display: block; margin-bottom: 5px; }
    input { box-sizing: border-box; width: 300px; max-width: 100%; padding: 8px; }
    button { padding: 10px 20px; border: none; color: white; background-color: #4CAF50; cursor: pointer; }
    button:hover { background-color: #45A049; }
  </style>
</head>
<body>
  <h2>Form Validation Example</h2>
  <form name="myForm" onsubmit="return validateForm()">
    <div class="form-group">
      <label for="fname">First Name:</label>
      <input type="text" id="fname" name="fname" autocomplete="given-name">
    </div>
    <button type="submit">Submit</button>
  </form>
  <script src="form-validation.js"></script>
</body>
</html>
```

### `form-validation.js`

```js
function validateForm() {
  const fname = document.forms["myForm"]["fname"].value.trim();

  if (fname === "") {
    alert("First Name must be filled out.");
    return false;
  }

  return true;
}
```

## 6.10.2 Numeric Input Validation

Uji dengan nilai kosong, `abc`, `200`, dan `25`.

### `numeric-validation.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Numeric Input Validation</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    .form-group { margin-bottom: 10px; }
    label { display: block; margin-bottom: 5px; }
    input { box-sizing: border-box; width: 300px; max-width: 100%; padding: 8px; }
    button { padding: 10px 20px; border: none; color: white; background-color: #007BFF; cursor: pointer; }
    button:hover { background-color: #0056B3; }
  </style>
</head>
<body>
  <h2>Numeric Input Validation Example</h2>
  <form name="numericForm" onsubmit="return validateNumericInput()">
    <div class="form-group">
      <label for="age">Enter Your Age:</label>
      <input type="text" id="age" name="age" inputmode="decimal" placeholder="Enter a number">
    </div>
    <button type="submit">Submit</button>
  </form>
  <script src="numeric-validation.js"></script>
</body>
</html>
```

### `numeric-validation.js`

```js
function validateNumericInput() {
  const input = document.forms["numericForm"]["age"].value.trim();

  if (input === "") {
    alert("Age field cannot be empty.");
    return false;
  }

  const age = Number(input);
  if (!Number.isFinite(age)) {
    alert("Please enter a valid numeric value.");
    return false;
  }

  if (age < 1 || age > 120) {
    alert("Please enter a number between 1 and 120.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
```

## 6.11 Guess a Number

Klik **Start Game** dan masukkan nombor bulat dari 1 hingga 10.

### `guess-number.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Guess the Number Game</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    h2 { color: #333; }
    button { padding: 10px 20px; border: none; color: white; background-color: #007BFF; cursor: pointer; }
    button:hover { background-color: #0056B3; }
  </style>
</head>
<body>
  <h2>Guess the Number Game</h2>
  <p>Try to guess the random number between 1 and 10!</p>
  <button type="button" onclick="playGame()">Start Game</button>
  <script src="guess-number.js"></script>
</body>
</html>
```

### `guess-number.js`

```js
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
```

## 6.12 Lab Exercise 6 — Quiz Application

Buka `index.html` di Chrome. Kuiz mempunyai 6 soalan yang diacak, dengan 20 saat setiap soalan. Selepas **Submit answer** atau apabila masa habis, semak maklum balas dan tekan **Next question**. Skor akhir muncul selepas soalan terakhir. ZIP penghantaran mengandungi tiga fail ini sahaja.

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Web Basics Quiz | Lab 6</title>
  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>
</head>
<body>
  <div class="page">
    <header class="hero">
      <p class="eyebrow">CSF3133 &middot; Lab Exercise 6</p>
      <h1>Web Basics Quiz</h1>
      <p>Test what you know about HTML, CSS, and JavaScript.</p>
    </header>

    <main>
      <section id="intro" class="card" aria-labelledby="intro-title">
        <p class="eyebrow">Quick practice</p>
        <h2 id="intro-title">Ready to start?</h2>
        <p>Pick one answer per question. You’ll get feedback before you move on.</p>
        <ul class="facts">
          <li><strong id="question-count">6</strong> questions</li>
          <li><strong id="seconds-per-question">20</strong> seconds per question</li>
        </ul>
        <button id="start-button" type="button">Start quiz <span aria-hidden="true">&rarr;</span></button>
      </section>

      <section id="quiz" class="card" aria-labelledby="question" hidden>
        <div class="quiz-meta">
          <p id="question-progress" class="eyebrow">Question 1 of 6</p>
          <p class="timer" id="timer">Time left: <strong id="time-left">20s</strong></p>
        </div>
        <progress id="progress-bar" value="1" max="6" aria-label="Question progress"></progress>

        <form id="quiz-form">
          <fieldset>
            <legend id="question" tabindex="-1">Quiz question</legend>
            <div id="options" class="options"></div>
          </fieldset>

          <section aria-label="Answer feedback">
            <p id="feedback" class="feedback" role="status"></p>
          </section>

          <div class="actions">
            <button id="submit-button" type="submit">Submit answer</button>
            <button id="next-button" type="button" hidden>Next question</button>
          </div>
        </form>
      </section>
    </main>

    <footer>
      <section id="results" class="card results" aria-labelledby="result-title" hidden>
        <p class="eyebrow">Quiz complete</p>
        <h2 id="result-title" tabindex="-1">Your final score</h2>
        <p id="score" class="score" role="status"></p>
        <p id="result-detail"></p>
        <button id="restart-button" type="button">Try again <span aria-hidden="true">&rarr;</span></button>
      </section>
      <p class="credit">Lab Module 6 &middot; JavaScript</p>
    </footer>
  </div>
</body>
</html>
```

### `style.css`

```css
:root {
  --ink: #17332a;
  --muted: #4d625a;
  --green: #176047;
  --line: #d6e1d9;
  --lime: #d1f69f;
}

* { box-sizing: border-box; }
[hidden] { display: none !important; }

body {
  margin: 0;
  min-height: 100vh;
  background: radial-gradient(ellipse at top right, #e3ede0, transparent 65%), #f5f7f0;
  color: var(--ink);
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  line-height: 1.5;
}

.page {
  width: min(42rem, calc(100% - 2rem));
  margin: 0 auto;
  padding: clamp(1rem, 4vw, 3rem) 0;
}

.hero {
  padding: clamp(1.4rem, 5vw, 2.6rem);
  border-radius: 1.25rem;
  color: white;
  background:
    repeating-radial-gradient(ellipse at 109% 48%, transparent 0 23px, #ffffff19 24px 25px),
    linear-gradient(115deg, #123328, #19543f);
}

.hero h1 {
  margin: 0.2rem 0 0.5rem;
  font-size: clamp(2.1rem, 6vw, 3.3rem);
  letter-spacing: -0.04em;
  line-height: 1.05;
}

.hero > p:last-child { margin: 0; color: #e1f0e9; }

.eyebrow {
  margin: 0;
  color: var(--green);
  font-size: 0.8rem;
  font-weight: 750;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero .eyebrow { color: var(--lime); }

.card {
  margin-top: 1rem;
  padding: clamp(1.15rem, 4vw, 2rem);
  border: 1px solid var(--line);
  border-radius: 1.25rem;
  background: white;
  box-shadow: 0 10px 28px #18392c0c;
}

h2 { margin: 0.35rem 0 0.5rem; line-height: 1.2; }
#intro > p:not(.eyebrow), #result-detail { margin: 0; color: var(--muted); }

.facts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 1.15rem 0 1.4rem;
  padding: 0;
  list-style: none;
}

.facts li, .timer {
  border-radius: 0.55rem;
  padding: 0.35rem 0.65rem;
  background: #eaf3ec;
  color: #20513c;
  font-size: 0.87rem;
}

.quiz-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.timer { margin: 0; font-variant-numeric: tabular-nums; }
.timer[data-urgent="true"] { background: #fce9df; color: #812b17; }

progress {
  display: block;
  width: 100%;
  height: 0.55rem;
  margin: 0.8rem 0 1.3rem;
  accent-color: var(--green);
}

fieldset { min-width: 0; margin: 0; padding: 0; border: 0; }

legend {
  padding: 0;
  margin-bottom: 0.85rem;
  font-size: clamp(1.12rem, 3vw, 1.45rem);
  font-weight: 700;
  line-height: 1.35;
  overflow-wrap: anywhere;
}

.options { display: grid; gap: 0.55rem; }

.choice {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.7rem 0.8rem;
  border: 1px solid var(--line);
  border-radius: 0.7rem;
  background: #fbfcf9;
  cursor: pointer;
  overflow-wrap: anywhere;
}

.choice input { margin: 0; flex: none; accent-color: var(--green); }
.choice:hover, .choice:focus-within { background: #eaf3ec; border-color: #7cae93; }
.choice:has(input:checked:not(:disabled)) { background: #e4f1e6; border-color: var(--green); }
.choice:has(input:disabled) { cursor: default; }
.choice.is-correct { background: #e4f5e5; border-color: #51996a; }
.choice.is-incorrect { background: #fce9e6; border-color: #b76050; }

.feedback:not(:empty) {
  margin: 1rem 0 0;
  padding: 0.75rem 0.85rem;
  border-radius: 0.65rem;
  background: #fff2d7;
  color: #684127;
}
.feedback:empty { margin: 0; }
.feedback[data-state="correct"] { background: #e4f5e5; color: #174b2d; }
.feedback[data-state="incorrect"] { background: #fce9e6; color: #7e2b21; }

.actions { margin-top: 1.15rem; }

button {
  min-height: 2.75rem;
  padding: 0.7rem 1.05rem;
  border: 0;
  border-radius: 0.65rem;
  background: var(--green);
  color: white;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}
button:hover { background: #104431; }
button span { margin-left: 0.3rem; }
:focus-visible { outline: 3px solid #367f5a; outline-offset: 3px; }

.results { text-align: center; }
.score {
  margin: 0.6rem 0;
  color: var(--green);
  font-size: clamp(2.5rem, 9vw, 4rem);
  font-weight: 800;
  line-height: 1;
}
#restart-button { margin-top: 1.15rem; }
.credit { margin: 1.2rem 0 0; text-align: center; color: var(--muted); font-size: 0.86rem; }
```

### `script.js`

```js
const questions = [
  {
    question: "Which method finds an HTML element by its ID?",
    options: ["document.write()", "document.getElementById()", "Math.floor()", "setInterval()"],
    answer: 1,
    explanation: "getElementById() returns the element whose ID matches your argument."
  },
  {
    question: "Which attribute tells an <img> element which image file to load?",
    options: ["href", "alt", "id", "src"],
    answer: 3,
    explanation: "src specifies the source URL of the image."
  },
  {
    question: "Which CSS property changes the text color?",
    options: ["color", "background-color", "font-family", "text-align"],
    answer: 0,
    explanation: "Use color for the text, and background-color for the area behind it."
  },
  {
    question: "What does event.preventDefault() do in the right-click example?",
    options: ["Shows an alert", "Reloads the page", "Stops the browser’s default context menu", "Deletes the element"],
    answer: 2,
    explanation: "It stops the default action. The alert is a separate instruction."
  },
  {
    question: "Which integers can Math.floor(Math.random() * 10) + 1 produce?",
    options: ["0 to 9", "0 to 10", "1 to 9", "1 to 10"],
    answer: 3,
    explanation: "Flooring Math.random() * 10 gives 0 through 9. Adding 1 shifts that to 1 through 10."
  },
  {
    question: "Which HTML tag loads an external JavaScript file?",
    options: ["<script>", "<link>", "<style>", "<meta>"],
    answer: 0,
    explanation: "Set the src attribute on a script element to load your .js file."
  }
];

const QUESTION_SECONDS = 20;
const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const results = document.getElementById("results");
const form = document.getElementById("quiz-form");
const questionText = document.getElementById("question");
const options = document.getElementById("options");
const feedback = document.getElementById("feedback");
const submitButton = document.getElementById("submit-button");
const nextButton = document.getElementById("next-button");
const timerLabel = document.getElementById("timer");
const timeLeft = document.getElementById("time-left");

let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let timerId = null;
let deadline = 0;
let answered = false;

// Shuffle a copy without changing the original question bank.
function shuffleQuestions() {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  if (shuffled.length > 1 && shuffled.every((question, i) => question === quizQuestions[i])) {
    [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
  }
  return shuffled;
}

function updateTimer(seconds) {
  timeLeft.textContent = `${seconds}s`;
  timerLabel.dataset.urgent = seconds <= 5 ? "true" : "false";
}

function startTimer() {
  clearInterval(timerId);
  deadline = Date.now() + QUESTION_SECONDS * 1000;
  updateTimer(QUESTION_SECONDS);

  timerId = setInterval(() => {
    const seconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    updateTimer(seconds);
    if (seconds === 0) finishAnswer(null);
  }, 200);
}

// Replace the radio options and reset the timer for this question.
function displayQuestion() {
  const current = quizQuestions[currentIndex];
  answered = false;
  feedback.textContent = "";
  delete feedback.dataset.state;
  submitButton.hidden = false;
  nextButton.hidden = true;

  document.getElementById("question-progress").textContent =
    `Question ${currentIndex + 1} of ${quizQuestions.length}`;
  const progressBar = document.getElementById("progress-bar");
  progressBar.max = quizQuestions.length;
  progressBar.value = currentIndex + 1;

  questionText.textContent = current.question;
  options.replaceChildren();
  current.options.forEach((text, index) => {
    const label = document.createElement("label");
    label.className = "choice";
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = index;
    const caption = document.createElement("span");
    caption.textContent = text;
    label.append(input, caption);
    options.append(label);
  });

  questionText.focus();
  startTimer();
}

function checkAnswer() {
  if (answered) return;
  if (Date.now() >= deadline) {
    updateTimer(0);
    finishAnswer(null);
    return;
  }

  const selected = form.querySelector('input[name="answer"]:checked');
  if (!selected) {
    feedback.textContent = "Choose an answer before submitting.";
    return;
  }
  finishAnswer(Number(selected.value));
}

// Score each question once, then show the result before advancing.
function finishAnswer(choice) {
  if (answered) return;
  answered = true;
  clearInterval(timerId);
  timerId = null;

  const current = quizQuestions[currentIndex];
  const correct = choice === current.answer;
  if (correct) score++;

  options.querySelectorAll('input[name="answer"]').forEach(input => {
    input.disabled = true;
    const index = Number(input.value);
    if (index === current.answer) input.parentElement.classList.add("is-correct");
    else if (index === choice) input.parentElement.classList.add("is-incorrect");
  });

  const correctAnswer = current.options[current.answer];
  if (correct) {
    feedback.dataset.state = "correct";
    feedback.textContent = `Correct! ${current.explanation}`;
  } else {
    feedback.dataset.state = choice === null ? "timeout" : "incorrect";
    const message = choice === null ? "Time’s up!" : "Incorrect.";
    feedback.textContent = `${message} Correct answer: ${correctAnswer}. ${current.explanation}`;
  }

  submitButton.hidden = true;
  nextButton.textContent = currentIndex === quizQuestions.length - 1 ? "See my score" : "Next question";
  nextButton.hidden = false;
  nextButton.focus();
}

function nextQuestion() {
  if (!answered || quiz.hidden) return;
  currentIndex++;
  if (currentIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    quiz.hidden = true;
    document.getElementById("score").textContent = `${score} / ${quizQuestions.length}`;
    document.getElementById("result-detail").textContent =
      `You answered ${score} of ${quizQuestions.length} questions correctly.`;
    results.hidden = false;
    document.getElementById("result-title").focus();
  }
}

function startQuiz() {
  clearInterval(timerId);
  quizQuestions = shuffleQuestions();
  currentIndex = 0;
  score = 0;
  intro.hidden = true;
  results.hidden = true;
  quiz.hidden = false;
  displayQuestion();
}

document.getElementById("question-count").textContent = questions.length;
document.getElementById("seconds-per-question").textContent = QUESTION_SECONDS;
document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("restart-button").addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
form.addEventListener("submit", event => {
  event.preventDefault();
  checkAnswer();
});
```
