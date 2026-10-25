// Prompt the user for the 4 coordinates
let x1 = parseFloat(prompt("Enter x coordinate for Point 1 (x1):"));
let y1 = parseFloat(prompt("Enter y coordinate for Point 1 (y1):"));
let x2 = parseFloat(prompt("Enter x coordinate for Point 2 (x2):"));
let y2 = parseFloat(prompt("Enter y coordinate for Point 2 (y2):"));

let outputElement = document.getElementById("output");

// Check that all inputs are valid numbers
if (!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)) {
    // Calculate Euclidean Distance: Math.sqrt((x2 - x1)^2 + (y2 - y1)^2)
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    // Show results in HTML
    outputElement.innerHTML = `
        <div class="result-box">
            <p><strong>Point 1:</strong> (${x1}, ${y1})</p>
            <p><strong>Point 2:</strong> (${x2}, ${y2})</p>
            <p><strong>Distance between points:</strong> ${distance.toFixed(2)}</p>
        </div>
    `;
} else {
    outputElement.innerHTML = "<p style='color: red;'>Invalid input. Please reload and enter numeric coordinates.</p>";
}
