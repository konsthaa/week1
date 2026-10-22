//Based on JS3-Numbers but also shows uneven numbers and all entered numbers

//empty array
const numbers = [];

//while loop to prompt user for numbers until they type "done"
while (true) {
  const input = prompt("Enter a number (or done to finish):");


  //check whether user clicked cancel or typed done (this would be case insensitive)
  if (input === null || input.toLowerCase() === "done") {
    break;
  }

  //convert input to a number
  const num = Number(input.trim());

  //check if the input is a valid number
  if (!isNaN(num) && input.trim() !== "") {
    numbers.push(num);
  } else {
    alert("Please enter a valid number or 'done'.");
  }
}

//arrat to store even numbers for nicer formatting
const evenNumbers = [];
const unevenNumbers = [];

//lets use for loop to iterate over the entered values stored in the array
for (const num of numbers) {
  // check if the current number is even using the modulo operator %
  if (num % 2 === 0) {
    evenNumbers.push(num);
  } else {
    unevenNumbers.push(num);
  }
}


//display the result on the html document
const outputDiv = document.getElementById("output");
let htmlContent = "";

if (numbers.length > 0) {
  htmlContent = "<p><strong>Entered numbers:</strong> " + numbers.join(", ") + "</p>";


  if (evenNumbers.length > 0) {
    htmlContent += "<p><strong>Even numbers:</strong> " + evenNumbers.join(", ") + "</p>";
  } else {
    htmlContent += "<p><strong>Even numbers:</strong> None</p>";
  }


//uneven numbers for curiosity and clarity
  if (unevenNumbers.length > 0) {
    htmlContent += "<p><strong>Uneven numbers:</strong> " + unevenNumbers.join(", ") + "</p>";
  } else {
    htmlContent += "<p><strong>Uneven numbers:</strong> None</p>";
  }
} else {
  htmlContent = "<p>No numbers were entered.</p>";
}

//end
htmlContent += "<p><em>Program finished.</em></p>";



outputDiv.innerHTML = htmlContent;
