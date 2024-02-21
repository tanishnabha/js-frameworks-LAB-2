const fs = require('fs');

// first function
function register(firstName,lastName){
	console.log(`Dear ${firstName} ${lastName}, Your account has been registered successfully`);
}

//second function
function kgToPound(weightInKg) {
    const pound = weightInKg * 2.20462;
    return pound;
}

//third function
function simpleInterest(principal, rate, time) {
    const simpleInterest =  (principal * rate * time) / 100;
    return simpleInterest;
}

//fourth function 
async function saveJSON(url, filePath) {
  try {
    const response = await fetch(url);
    const jsonData = await response.json();
    const jsonString = JSON.stringify(jsonData, null, 2);
    fs.writeFileSync(filePath, jsonString);
    console.log(`JSON successfully fetched from ${url} and saved in ${filePath}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports = { register, kgToPound, simpleInterest, saveJSON };

