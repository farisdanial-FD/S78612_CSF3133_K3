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
