// 1. Luo tyhjä numbers-taulukko
const numbers = [];

// 2. Kysy käyttäjältä viisi numeroa ja lisää ne push()-metodilla (muutetaan merkkijonot numeroiksi Number()-funktiolla)
numbers.push(Number(prompt("Enter Number 1:")));
numbers.push(Number(prompt("Enter Number 2:")));
numbers.push(Number(prompt("Enter Number 3:")));
numbers.push(Number(prompt("Enter Number 4:")));
numbers.push(Number(prompt("Enter Number 5:")));

// 3. Näytä taulukon sisältö konsolissa
console.log("Numbers:", numbers);

// 4. Kysy etsittävää numeroa
const searchNum = Number(prompt("Enter a Number to Search:"));

// 5. Tarkista includes()-metodilla löytyykö numero ja tulosta viesti
if (numbers.includes(searchNum)) {
    console.log(`Number ${searchNum} is found in the array.`);
} else {
    console.log(`Number ${searchNum} is not found in the array.`);
}

// 6. Poista viimeinen numero pop()-metodilla
numbers.pop();

// 7. Näytä päivitetty taulukko
console.log("Updated Numbers:", numbers);

// 8. Järjestä taulukko nousevaan numeeriseen järjestykseen custom-funktiolla
numbers.sort((a, b) => a - b);

// 9. Näytä järjestetty taulukko
console.log("Sorted Numbers:", numbers);
