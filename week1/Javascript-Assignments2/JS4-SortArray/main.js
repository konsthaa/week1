// 1. Define the sortArray function
function sortArray(arr) {
  // Use the spread operator [...] to create a shallow copy so we don't mutate the original array,
  // and provide a comparison function (a, b) => a - b to sort numbers numerically in ascending order.
  return [...arr].sort((a, b) => a - b);
}

// 2. Create a hard-coded array of numbers
const originalArray = [42, 7, 19, 3, 85, 12, 24];

// 3. Call the function and store the result
const sortedArray = sortArray(originalArray);

// 4. Use console.log to print both arrays
console.log("Original Array:", originalArray);
console.log("Sorted Array (Ascending):", sortedArray);
