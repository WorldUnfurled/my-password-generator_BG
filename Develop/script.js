// Assignment Code
var generateBtn = document.querySelector("#generate"); // Selects the password generation button

// Write password to the #password input
function writePassword() { // Saves the string produced by generatePassword to a variable - password; passwordText selects the "password" id element and its value is set to the string in password, displaying the string as text on the page
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // Runs writePassword function when the password generation function is clicked

function generatePassword() {
  var passKey = ""; // Unrandomized passKey will be held here 
  var randoKey = ""; // Randomized passKey will be held here 
  var charPool = []; // Array of chosen chars will be held here

  var lowerCase = ['a','b','c','d','e','f','g','h','i','j', 'k','l','m','n','o','p','q','r', 's','t','u','v','w','x','y','z']; // Array holds lowercase letters
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // Array holds uppercase letters
  var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // Array holds numbers
  var special = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']; // Array holds symbols

  var allArrays = [lowerCase, upperCase, numeric, special]; // Holds arrays of chars in an array

  var passLength = parseInt(prompt("Enter a password length (More than 8 chars, less than 128)."), 10); // Prompts user to enter a password length between 8 adn 128 characters
  var includeLowerCase = confirm("Want to include lowercase chars?"); // Saves confirmed true or false value for lowercase letter choice based on user input
  var includeUpperCase = confirm("Want to include uppercase chars?"); // Saves confirmed true or false value for uppercase letter choice based on user input
  var includeNumeric = confirm("Want to include numbers?"); // Saves confirmed true or false value for numeric choice based on user input 
  var includeSpecial = confirm("Want to include special characters?"); // Saves confirmed true or false value for symbol choice based on user input

  var allChars = [includeLowerCase, includeUpperCase, includeNumeric, includeSpecial]; // Holds confirmations in an array

  if (passLength < 8 || passLength > 128) { // If chosen password length is out of bounds, an alert tells the user that they should enter a character length within the bounds, and then it recursively calls generatePassword
    alert("Enter a length more than 8 characters but less than 128.");
    return generatePassword();
  }

  var i = 0;
  while (i < allChars.length) { // While the new iterator i is less than the length of the allChars array, then function checks if the element in allChars evaluates to true; if the element evaluates to true, its corresponding array is chosen from allArrays and a character is chosen from the array to be added to the unradomized password stored in passKey 
    if (allChars[i]) {
      passKey += allArrays[i][Math.floor(Math.random() * allArrays[i].length)];
    };

    i++;
  }

  for (var num = 0; num < allChars.length; num++) { // As long as the num iterator is less than length of the allChars array, each confirmation that evaluates to true in allChars is concatenated to the pool of chosen characters from which the password will be forged
    if (allChars[num]) {
      charPool = charPool.concat(allArrays[num]);
    }
  }

  while (i < passLength) { // While the iterator i is less than the chosen length of the password, if the pool of chosen characters has more than 0 elements concatenated to it, an unrandomized password will be continued if added to earlier and generated fully; the password takes takes random characters from the pool and i is iterated up by one; otherwise, the system will ask for the user to choose at least one character type for their password and recursively call the function
    if (charPool.length > 0) {
      passKey += charPool[Math.floor(Math.random() * charPool.length)];
    } else {
      alert("Choose at least one character type for your password.");
      return generatePassword();
    };

    i++;
  }

  randoKey = randoSequence(passKey).join(""); // Randomizes passKey using refined Fischer-yates shuffle from random.js

  return randoKey; // Returns shuffled key string
}

