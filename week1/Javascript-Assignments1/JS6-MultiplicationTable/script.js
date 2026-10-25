// Prompt the user for a positive integer and convert it to a number
let input = prompt("Enter a positive integer:");
let n = parseInt(input);

let outputElement = document.getElementById("output");

// Check if input is a valid positive integer
if (!isNaN(n) && n > 0) {
    let tableHTML = "<table>";

    // Outer loop represents the rows (i)
    for (let i = 1; i <= n; i++) {
        tableHTML += "<tr>";

        // Inner loop represents the columns (j)
        for (let j = 1; j <= n; j++) {
            let product = i * j;
            tableHTML += `<td>${product}</td>`;
        }

        tableHTML += "</tr>";
    }

    tableHTML += "</table>";

    // Show the generated table on the HTML document
    outputElement.innerHTML = `
        <h2>Multiplication Table up to ${n}</h2>
        ${tableHTML}
    `;
} else {
    outputElement.innerHTML = "<p style='color: red;'>Invalid input. Please reload and enter a valid positive integer greater than 0.</p>";
}
