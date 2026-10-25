// Prompt the user for the lengths of three sides
let s1 = parseFloat(prompt("Enter length of side 1:"));
let s2 = parseFloat(prompt("Enter length of side 2:"));
let s3 = parseFloat(prompt("Enter length of side 3:"));

let outputElement = document.getElementById("output");

// Check that inputs are valid numbers and greater than 0
if (!isNaN(s1) && !isNaN(s2) && !isNaN(s3) && s1 > 0 && s2 > 0 && s3 > 0) {
    let triangleType = "";

    // Logical operators
    if (s1 === s2 && s2 === s3) {
        triangleType = "Equilateral (all sides are equal)";
    } else if (s1 === s2 || s2 === s3 || s1 === s3) {
        triangleType = "Isosceles (two sides are equal)";
    } else if (s1 !== s2 && s2 !== s3 && s1 !== s3) {
        triangleType = "Scalene (no sides are equal)";
    } else {
        triangleType = "Invalid triangle dimensions.";
    }

    // Show classification result in HTML
    outputElement.innerHTML = `
        <div class="result-box">
            <p><strong>Side 1:</strong> ${s1}</p>
            <p><strong>Side 2:</strong> ${s2}</p>
            <p><strong>Side 3:</strong> ${s3}</p>
            <p><strong>Triangle Type:</strong> <strong>${triangleType}</strong></p>
        </div>
    `;
} else {
    outputElement.innerHTML = "<p style='color: red;'>Invalid input. Please enter valid positive numbers for the side lengths.</p>";
}
