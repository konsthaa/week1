// 1. Defines an empty array to store the numbers entered by the user
const numbers = [];

// 2. Uses a loop (while) to prompt the user for numbers until they enter 'done' or cancel
while (true) {
  const input = prompt("Enter a number (or 'done' to finish):");

  // Check if user clicked Cancel or typed 'done' (case-insensitive)
  if (input === null || input.trim().toLowerCase() === "done") {
    break;
  }

  // Convert input to a number
  const num = Number(input.trim());

  // Check that the input is a valid number
  if (!isNaN(num) && input.trim() !== "") {
    numbers.push(num);
  } else {
    alert("Please enter a valid number or 'done'.");
  }
}

// Array to store even numbers for nice formatting
const evenNumbers = [];

// 3. Use the for...of loop to iterate over the entered values stored in the array
for (const num of numbers) {
  // 4. Check if the current number is even using the modulo operator %
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

// 5. Shows the result on the html document
const outputDiv = document.getElementById("output");

if (evenNumbers.length > 0) {
  outputDiv.innerHTML = "<p><strong>Even Numbers:</strong> " + evenNumbers.join(", ") + "</p>";
} else {
  outputDiv.innerHTML = "<p><strong>Even Numbers:</strong> None</p>";
}

// 6. Show a message indicating the end of the program
outputDiv.innerHTML += "<p><em>Program finished.</em></p>";
