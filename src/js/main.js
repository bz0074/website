
// main.js
// This file contains JavaScript functionality for the website

// Function to toggle a class on click
function toggleClass() {
  const element = document.getElementById('toggleElement');
  element.classList.toggle('active');
}

// Add event listener to a button
const button = document.getElementById('toggleButton');
button.addEventListener('click', toggleClass);

// Example: Fetch data from an API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
