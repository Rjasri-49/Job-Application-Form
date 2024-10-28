function validateForm() {
  // Get form values
  const name = document.getElementById("name").value.trim();
  const education = document.querySelector('input[name="education"]:checked');
  const gender = document.querySelector('input[name="gender"]:checked');
  const position = document.getElementById("position").value;

  // Check if name is filled
  if (name === "") {
    alert("Please enter your name.");
    return false;
  }

  // Check if education qualification is selected
  if (!education) {
    alert("Please select your educational qualification.");
    return false;
  }

  // Check if gender is selected
  if (!gender) {
    alert("Please select your gender.");
    return false;
  }

  // Check if position is selected
  if (position === "") {
    alert("Please select a position to apply for.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

