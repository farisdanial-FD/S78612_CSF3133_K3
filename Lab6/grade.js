// Error list: line numbers refer to the original files printed in the PDF.
// Error 1 (grade.html, line 9): The onsubmit handler must return checkMark() so false cancels submission.
// Error 2 (grade.html, line 17): The function is showTable(), not showtable().
// Error 3 (grade.html, line 19): The relative script filename is grade.js, not grades.js.
// Error 4 (grade.js, line 5): Use === to compare the name with ""; = assigns a value instead.
// Error 5 (grade.js, line 9): isNan() is not a function. Convert the input and use Number.isFinite().
// Error 6 (grade.js, line 13): parseInt() truncates fractions; Number() keeps the full mark for range checking.
// Error 7 (grade.js, line 14): Use || because a mark below 0 OR above 100 is invalid.
// Error 8 (grade.js, line 28): The method is getElementById(), not getElementByID().
// Error 9 (grade.js, line 30): The style property is color, not colour.
// Error 10 (grade.js, line 31): Return false even on success so the output does not disappear on reload.
// Error 11 (grade.js, line 38): Start i at 0 to include grade A.
// Error 12 (grade.js, line 42): The property is innerHTML, not innerHtml.

function checkMark() {
  const form = document.forms["gradeForm"];
  const name = form.elements["name"].value.trim();
  const markText = form.elements["mark"].value.trim();
  const feedback = document.getElementById("gradeFeedback");
  feedback.hidden = true;

  // Validate empty fields before trying to convert the mark to a number.
  if (name === "") {
    alert("Name must be filled out.");
    form.elements["name"].focus();
    return false;
  }
  if (markText === "") {
    alert("Mark field cannot be empty.");
    form.elements["mark"].focus();
    return false;
  }

  const mark = Number(markText);
  if (!Number.isFinite(mark)) {
    alert("Please enter a valid numeric value.");
    form.elements["mark"].focus();
    return false;
  }
  if (mark < 0 || mark > 100) {
    alert("Mark must be between 0 and 100.");
    form.elements["mark"].focus();
    return false;
  }

  // Score the mark using the grade cutoffs, then apply the matching colour.
  let grade;
  if (mark >= 80) grade = "A";
  else if (mark >= 65) grade = "B";
  else if (mark >= 50) grade = "C";
  else grade = "F";

  const gradeColors = { A: "green", B: "green", C: "#A34B00", F: "#B42318" }; // C: dark orange, F: red.
  const result = document.getElementById("result");
  feedback.hidden = false;
  result.textContent = `${name} got grade ${grade}`;
  result.style.color = gradeColors[grade];
  document.getElementById("checkedAt").textContent = `Checked on: ${Date()}`;
  return false;
}

// Generate a whole mark from 0 through 100 without submitting the form.
function randomMark() {
  document.getElementById("mark").value = Math.floor(Math.random() * 101);
}

// Use the parallel arrays to generate the four table rows.
function showTable() {
  const grades = ["A", "B", "C", "F"];
  const ranges = ["80–100", "65–79", "50–64", "0–49"];
  let tableHTML = '<table aria-label="Grade ranges"><thead><tr>' +
    '<th scope="col">Grade</th><th scope="col">Mark range</th></tr></thead><tbody>';

  for (let i = 0; i < grades.length; i++) {
    tableHTML += `<tr><td>${grades[i]}</td><td>${ranges[i]}</td></tr>`;
  }
  tableHTML += '</tbody></table><p class="range-note">Ranges shown for whole marks. Decimals use the same cutoffs.</p>';
  document.getElementById("tableContainer").innerHTML = tableHTML;
}