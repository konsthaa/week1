// 1. Define the enhanced sortArray function
function sortArray(numbers, order) {
  // Create a shallow copy using the spread operator to avoid mutating the original array
  const sortedNumbers = [...numbers];

  // Sort based on the order parameter
  if (order === "asc") {
    sortedNumbers.sort((a, b) => a - b); // Ascending order
  } else if (order === "desc") {
    sortedNumbers.sort((a, b) => b - a); // Descending order
  }

  return sortedNumbers;
}

// 2. Test the function with different arrays and orders
const numbers1 = [5, 2, 8, 1, 9];
console.log("--- Test Case 1 ---");
console.log("Original Array:", numbers1);
console.log("Sorted (asc):", sortArray(numbers1, "asc"));   // Output: [1, 2, 5, 8, 9]
console.log("Sorted (desc):", sortArray(numbers1, "desc")); // Output: [9, 8, 5, 2, 1]

const numbers2 = [42, 3, 15, 23, 8, 100, 12];
console.log("\n--- Test Case 2 ---");
console.log("Original Array:", numbers2);
console.log("Sorted (asc):", sortArray(numbers2, "asc"));
console.log("Sorted (desc):", sortArray(numbers2, "desc"));
