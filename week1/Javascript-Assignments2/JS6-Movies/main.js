// 1. Prompt the user to enter the number of movies they want to rate
const countInput = prompt("How many movies do you want to rate?");
const numMovies = parseInt(countInput);

// Define an empty array to store movie objects
const movies = [];

// Validate the number of movies
if (isNaN(numMovies) || numMovies <= 0) {
  alert("Please refresh and enter a valid positive number.");
  document.getElementById("output").innerHTML = "<p><strong>Error:</strong> Invalid number of movies entered.</p>";
} else {
  // 2. Use a loop to gather user input for each movie
  for (let i = 0; i < numMovies; i++) {
    const title = prompt(`Enter the title for movie #${i + 1}:`);

    // Check if user clicked cancel or left title empty...
    if (!title || title.trim() === "") {
      alert("Movie title cannot be empty. Please try again for this entry.");
      i--; // Repeat this iteration
      continue;
    }

    const ratingInput = prompt(`Enter rating for "${title.trim()}" (on a scale of 1 to 5):`);
    const rating = Number(ratingInput);

    // Validate rating
    if (isNaN(rating) || rating < 1 || rating > 5) {
      alert("Invalid rating! Please enter a number between 1 and 5.");
      i--; // Repeat this iteration
      continue;
    }

    // Store the movie details as an object literal in the array
    movies.push({
      title: title.trim(),
      rating: rating
    });
  }

  // 3. Sort the array of movie objects based on ratings from highest to lowest
  movies.sort((a, b) => b.rating - a.rating);

  // 4. Determine the highest-rated movie (first element of the sorted array)
  const outputDiv = document.getElementById("output");

  if (movies.length > 0) {
    const highestRated = movies[0];

    // 5. Build the HTML output
    let htmlContent = "";

    // Display the highest-rated movie highlight
    htmlContent += `
      <div class="highest-rated">
        <h2>🏆 Highest-Rated Movie</h2>
        <p><strong>${highestRated.title}</strong> — Rating: ${highestRated.rating} / 5</p>
      </div>
    `;

    // Display the sorted list of all movies
    htmlContent += "<h3>Sorted List of Movies (Highest to Lowest):</h3>";
    htmlContent += "<ul>";
    for (const movie of movies) {
      htmlContent += `<li><strong>${movie.title}</strong> — Rating: ${movie.rating} / 5</li>`;
    }
    htmlContent += "</ul>";

    outputDiv.innerHTML = htmlContent;
  } else {
    outputDiv.innerHTML = "<p>No movies were recorded.</p>";
  }
}
