// 32. Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Find the country containing the hightest number of characters in the countries array
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Extract all the countries containing only four characters from the countries array and print it as array
//     - Extract all the countries containing two or more words from the countries array and print it as array
//     - Reverse the countries array and capitalize each country and stored it as an array

const countries = require("./countries");

// ==============================================================================
const landIncludeCountry = [];
countries.map((country) => {
    if(country.includes("land")){
        landIncludeCountry.push(country);
    }
})

console.log(landIncludeCountry);

// ============================================================================

let highestChar = "";
countries.map((country) => {

    let high = highestChar.length;
    let cHigh = country.length;

    if(cHigh > high){
        highestChar = country;
    }
    
})

console.log(`Highes char Country ${highestChar}`);

// =============================================================================

const fourCharCountry = [];
countries.map((country) => {
    if(country.length == 4){
        fourCharCountry.push(country);
    }
})

console.log(fourCharCountry);

// ==============================================================================

const isMoreTwoWardsCountry = [];
countries.map((country) => {
    let temp = country.split(" ");
    if(temp.length >= 2){
        isMoreTwoWardsCountry.push(country);
    }
})

console.log(isMoreTwoWardsCountry);

// =====================================================================

const reverseCountry = countries.reverse();

// All the countries from array already capitalize.
// So the approach to do this problem is i will take the first char of the coutry and make is toUpperCase()

console.log(capitalized);
