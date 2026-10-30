// JavaScript is the BEHAVIOUR of your page: what happens when someone interacts with it.

// 1. Find elements on the page using the ids we gave them in index.html
const button = document.getElementById("magic-button");
const message = document.getElementById("message");

// 2. Make a list of messages to choose from
// TASK 3: add a few of your own messages to this list
const messages = [
  "wassup!",
  "hey there!",
  "whats popping?",
  "howdy!",
  "hi there!",
  "greetings!",
  "salutations!",
  "sup?",
];

// 3. Keep track of how many times the button was clicked
let clicks = 0;

// 4. When the button is clicked, run this function
button.addEventListener("click", function () {
  clicks = clicks + 1;

  // Pick a random message from the list
  const randomIndex = Math.floor(Math.random() * messages.length);

  // Show it on the page
  message.textContent = messages[randomIndex] + " (Clicks: " + clicks + ")";
});

// Tip: open your browser's developer tools (press F12) and look at the Console tab.
// console.log() prints messages there, which is handy for debugging.
console.log("script.js loaded successfully!");
