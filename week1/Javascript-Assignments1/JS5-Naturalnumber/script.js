// Prompt user for a positive integer
let input = prompt("Enter a positive integer:");
let n = parseInt(input);

let outputElement = document.getElementById("output");

// Check that input is a valid positive integer
if (!isNaN(n) && n > 0) {
    let sum = 0;

    // Use a for loop to iterate from 1 up to n and add them together
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    // Show the sum on the HTML document
    outputElement.innerHTML = `
        <div class="result-box">
            <p><strong>Entered Number:</strong> ${n}</p>
            <p><strong>Sum of natural numbers (1 to ${n}):</strong> <strong>${sum}</strong></p>
        </div>
    `;
} else {
    outputElement.innerHTML = "<p style='color: red;'>Invalid input. Please reload and enter a valid positive integer greater than 0.</p>";
}
