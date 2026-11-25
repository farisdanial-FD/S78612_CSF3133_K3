function validateForm() {
  const fname = document.forms["myForm"]["fname"].value.trim();

  if (fname === "") {
    alert("First Name must be filled out.");
    return false;
  }

  return true;
}
