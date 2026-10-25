// Luo ja alustaa fruits-taulukon
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Näyttää fruits-taulukon sisällön konsolissa
console.log("Fruits:", fruits);

// Laskee ja näyttää taulukon pituuden
console.log("Length of Fruits:", fruits.length);

// Hakee ja näyttää elementti indeksistä 2
console.log("Element at Index 2:", JSON.stringify(fruits[2]));

// Hakee ja näyttää viimeinen elementti length-ominaisuuden avulla
console.log("Last Element of Fruits:", JSON.stringify(fruits[fruits.length - 1]));

// Luo tyhjän vegetables-taulukon
const vegetables = [];

// Kysyy käyttäjältä kolme vihannesta ja lisää ne push():lla
vegetables.push(prompt("Enter vegetable 1:"));
vegetables.push(prompt("Enter vegetable 2:"));
vegetables.push(prompt("Enter vegetable 3:"));

// Näyttää vegetables-taulukon sisällön konsolissa
console.log("Vegetables:", vegetables);

// Laskee ja näyttää vegetables-taulukon pituuden
console.log("Length of Vegetables:", vegetables.length);
