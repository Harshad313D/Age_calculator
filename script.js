document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('calculateButton').addEventListener('click', calculateAge);
});

function calculateAge() {
  const day = document.getElementById('day').value;
  const month = document.getElementById('month').value;
  const year = document.getElementById('year').value;

  // Validate day, month, and year
  if (!isValidDate(day, month, year)) {
    alert('Please enter valid values for day, month, and year.');
    return;
  }

  const birthDate = new Date(`${year}-${month}-${day}`);
  const currentDate = new Date();

  if (isNaN(birthDate.getTime())) {
    alert('Invalid date. Please enter a valid date.');
    return;
  }

  const ageInMilliseconds = currentDate - birthDate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;

  const ageYears = Math.floor(ageInDays / 365.25);
  const remainingDays = Math.floor(ageInDays % 365.25);

  document.getElementById('result').innerHTML = `Your age is ${ageYears} years and ${remainingDays} days.`;
}

function isValidDate(day, month, year) {
  // Validate that day, month, and year are numbers
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return false;
  }

  // Validate month is in the range 1-12
  if (month < 1 || month > 12) {
    return false;
  }

  // Validate day is in the range 1-31
  if (day < 1 || day > 31) {
    return false;
  }

  // You may add additional year validation if needed

  return true;
}
