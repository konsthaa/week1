// Luo ja alusta fruits-taulukko
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Näytä fruits-taulukon sisältö konsolissa
console.log("Fruits:", fruits);

// Laske ja näytä taulukon pituus
console.log("Length of Fruits:", fruits.length);

// Hae ja näytä elementti indeksistä 2
console.log("Element at Index 2:", JSON.stringify(fruits[2]));

// Hae ja näytä viimeinen elementti length-ominaisuuden avulla
console.log("Last Element of Fruits:", JSON.stringify(fruits[fruits.length - 1]));

// Luo tyhjä vegetables-taulukko
const vegetables = [];

// Kysy käyttäjältä kolme vihannesta ja lisää ne push()-metodilla
vegetables.push(prompt("Enter vegetable 1:"));
vegetables.push(prompt("Enter vegetable 2:"));
vegetables.push(prompt("Enter vegetable 3:"));

// Näytä vegetables-taulukon sisältö konsolissa
console.log("Vegetables:", vegetables);

// Laske ja näytä vegetables-taulukon pituus
console.log("Length of Vegetables:", vegetables.length);
