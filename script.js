// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePasswordLength(){
  // ask how long password length should be
  var passwordLength = prompt(
    "How many long would you like your password to be? Please choose between no less than '8' characters and no more than '128' characters. (decimal numbers will be rounded down to an integer)"
  );
  passwordLength = Math.floor(passwordLength + 1);
  // if desired length of between 8 and 128 characters is provided, return passwordLength
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);
    return passwordLength;
  // if invalid/undesired response is entered, alert user and recall function until a value between 8 and 128 response is entered
  } else {
    alert("Invalid entry: Try again!");
    return generatePasswordLength();
  }
}

function generateLowerCaseSelection(){
  // ask whether or not to include lower case letters
  var lowerCaseSelection = prompt(
    "Would you like to include lower case letters? Answer 'Yes' or 'No'"
  );
  // convert response from prompt to lower case
  lowerCaseSelection = lowerCaseSelection.toLowerCase();
  // if desired response is entered, return response
  if (lowerCaseSelection === "yes" || lowerCaseSelection === "no") {
    console.log(lowerCaseSelection);
    return lowerCaseSelection;
  // if invalid/undesired response is entered, alert user and recall function until either 'yes' or 'no' response is entered
  } else {
    alert("Invalid entry: Try again!");
    return generateLowerCaseSelection();
  }
}

function generateUpperCaseSelection(){
  // ask whether or not to include upper case letters
  var upperCaseSelection = prompt(
    "Would you like to include upper case letters? Answer 'Yes' or 'No'"
  );
  // convert response from prompt to lower case
  upperCaseSelection = upperCaseSelection.toLowerCase();
  // if desired response is entered, return response
  if (upperCaseSelection === "yes" || upperCaseSelection === "no") {
    console.log(upperCaseSelection);
    return upperCaseSelection;
  // if invalid/undesired response is entered, alert user and recall function until either 'yes' or 'no' response is entered
  } else {
    alert("Invalid entry: Try again!");
    return generateUpperCaseSelection();
  }
}

function generateNumericSelection(){
  // ask whether or not to include numbers
  var numericSelection = prompt(
    "Would you like to include numbers? Answer 'Yes' or 'No'"
  );
  // convert response from prompt to lower case
  numericSelection = numericSelection.toLowerCase();
  // if desired response is entered, return response
  if (numericSelection === "yes" || numericSelection === "no") {
    console.log(numericSelection);
    return numericSelection;
  // if invalid/undesired response is entered, alert user and recall function until either 'yes' or 'no' response is entered
  } else {
    alert("Invalid entry: Try again!");
    return generateNumericSelection();
  }
}

function generateSymbolsSelection(){
  // ask whether or not to include symbols
  var symbolsSelection = prompt(
    "Would you like to include symbols? Answer 'Yes' or 'No'"
  );
  // convert response from prompt to lower case
  symbolsSelection = symbolsSelection.toLowerCase();
  // if desired response is entered, return response
  if (symbolsSelection === "Yes" || symbolsSelection === "yes" || symbolsSelection === "No" || symbolsSelection === "no") {
    console.log(symbolsSelection);
    return symbolsSelection;
  // if invalid/undesired response is entered, alert user and recall function until either 'yes' or 'no' response is entered
  } else {
    alert("Invalid entry: Try again!");
    return generateSymbolsSelection();
  }
}

function generatePassword(passwordLength, lowerCaseSelection, upperCaseSelection, numericSelection, symbolsSelection) {
  console.log(passwordLength, lowerCaseSelection, upperCaseSelection, numericSelection, symbolsSelection);
  return "fake password";
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "1234567890";
  var symbolCharacters = "!@#$%^&*(){}[]=<>/,.";
}

// Write password to the #password input
function writePassword() {
  var passwordLength = generatePasswordLength();
  var lowerCaseSelection = generateLowerCaseSelection();
  var upperCaseSelection = generateUpperCaseSelection();
  var numericCharacters = generateNumericSelection();
  var symbolCharacters = generateSymbolsSelection();

  var password = generatePassword(passwordLength, lowerCaseSelection, upperCaseSelection, numericCharacters, symbolCharacters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
