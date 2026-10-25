// 1. Luo tyhjän numbers-taulukon
const numbers = [];

// 2. Kysyy käyttäjältä viisi numeroa ja lisää ne push()-metodilla (muutetaan merkkijonot numeroiksi Number()-funktiolla)
numbers.push(Number(prompt("Enter Number 1:")));
numbers.push(Number(prompt("Enter Number 2:")));
numbers.push(Number(prompt("Enter Number 3:")));
numbers.push(Number(prompt("Enter Number 4:")));
numbers.push(Number(prompt("Enter Number 5:")));

// 3. Näyttää taulukon sisällön konsolissa
console.log("Numbers:", numbers);

// 4. Kysyy etsittävää numeroa
const searchNum = Number(prompt("Enter a Number to Search:"));

// 5. Tarkistaa includes()-metodilla löytyykö se numero ja tulostaa viestin
if (numbers.includes(searchNum)) {
    console.log(`Number ${searchNum} is found in the array.`);
} else {
    console.log(`Number ${searchNum} is not found in the array.`);
}

// 6. Poistaa viimeisen numeron pop()-metodilla
numbers.pop();

// 7. Näyttää päivitetyn taulukon
console.log("Updated Numbers:", numbers);

// 8. Järjestää taulukon nousevaan numeeriseen järjestykseen custom-funktiolla
numbers.sort((a, b) => a - b);

// 9. Näyttää järjestetyn taulukon
console.log("Sorted Numbers:", numbers);
