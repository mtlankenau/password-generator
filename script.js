// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePasswordLength(){
  // ask how long password length should be
  var passwordLength = prompt(
    "How long would you like your password to be? Please choose between no less than '8' characters and no more than '128' characters (decimal numbers will be rounded down to an integer)."
  );
  // all number inputs are rounded down to nearest whole integer
  passwordLength = Math.floor(passwordLength);
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
    "Would you like to include 'lower case' letters? Answer 'Yes' or 'No'"
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
    "Would you like to include 'upper case' letters? Answer 'Yes' or 'No'"
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
    "Would you like to include 'numbers'? Answer 'Yes' or 'No'"
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
    "Would you like to include 'symbols'? Answer 'Yes' or 'No'"
  );
  // convert response from prompt to lower case
  symbolsSelection = symbolsSelection.toLowerCase();
  // if desired response is entered, return response
  if (symbolsSelection === "yes" || symbolsSelection === "no") {
    console.log(symbolsSelection);
    return symbolsSelection;
  // if invalid/undesired response is entered, alert user and recall function until either 'yes' or 'no' response is entered
  } else {
    alert("Invalid entry: Try again!");
    return generateSymbolsSelection();
  }
}

// function that passes passwordLength value and 'yes' or 'no' selections for each character type as an argument
function generatePassword(passwordLength, lowerCaseSelection, upperCaseSelection, numericSelection, symbolsSelection) {
  console.log(passwordLength, lowerCaseSelection, upperCaseSelection, numericSelection, symbolsSelection);
  // local variables containing all possible character types as strings are defined
  var validCharacters = "";
  var generatedPassword = "";
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "1234567890";
  var symbolsCharacters = "!@#$%^&*(){}[]=<>/,.";
  // if user chose to include lower case letters to password, add all possible lower case letters as characters to string of 'validCharacters' variable
  if (lowerCaseSelection === "yes") {
    validCharacters += lowerCaseLetters;
    console.log(validCharacters);
  }
  // if user chose to include upper case letters to password, add all possible upper case letters as characters to string of 'validCharacters' variable
  if (upperCaseSelection === "yes") {
    validCharacters += upperCaseLetters;
    console.log(validCharacters);
  }
  // if user chose to include numbers to password, add all possible numbers as characters to string of 'validCharacters' variable
  if (numericSelection === "yes") {
    validCharacters += numericCharacters;
    console.log(validCharacters);
  }
  // if user chose to include symbols to password, add all possible symbols as characters to string of 'validCharacters' variable
  if (symbolsSelection === "yes") {
    validCharacters += symbolsCharacters;
    console.log(validCharacters);
  }
  // if string of 'validCharacters' variable is empty (due to selecting 'no' for all character type prompts), alert the user and recall the writePassword() function
  if (validCharacters === "") {
    alert("Please select at least one character type in order to generate password!");
    console.log("Try again: Select at least one character type");
    writePassword();
  }

  // for loop iterates through a random character within the 'validCharacters' string within desired password length
  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += validCharacters.charAt(Math.floor(Math.random() * validCharacters.length));
    console.log(generatedPassword);
  }
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  // calls function to determine the length of the password
  var passwordLength = generatePasswordLength();
  // calls function to determine whether or not to include lower case letters in the password
  var lowerCaseSelection = generateLowerCaseSelection();
  // calls function to determine whether or not to include upper case letters in the password
  var upperCaseSelection = generateUpperCaseSelection();
  // calls function to determine whether or not to include numbers in the password
  var numericCharacters = generateNumericSelection();
  // calls function to determine whether or not to include symbols in the password
  var symbolCharacters = generateSymbolsSelection();

  // once all prompts have succesfully been answered, calls function to generate password based on passwordLength, and 'yes' or 'no' responses to character type prompts
  var password = generatePassword(passwordLength, lowerCaseSelection, upperCaseSelection, numericCharacters, symbolCharacters);

  // selects <textarea> DOM element through #password id
  var passwordText = document.querySelector("#password");
  // assigns output of generatePassword function to value of DOM 
  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
