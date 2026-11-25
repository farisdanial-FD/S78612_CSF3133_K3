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
