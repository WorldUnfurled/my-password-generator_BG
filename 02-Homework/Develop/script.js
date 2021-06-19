// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passKey = "";
  var charPool = [];

  var lowerCase = ['a','b','c','d','e','f','g','h','i','j', 'k','l','m','n','o','p','q','r', 's','t','u','v','w','x','y','z'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var special = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

  var allArrays = [lowerCase, upperCase, numeric, special];

  var passLength = parseInt(prompt("Enter a password length (8 chars or more)."), 10);
  var includeLowerCase = confirm("Want to include lowercase chars?");
  var includeUpperCase = confirm("Want to include uppercase chars?");
  var includeNumeric = confirm("Want to include numbers?");
  var includeSpecial = confirm("Want to include special characters?");

  var allChars = [includeLowerCase, includeUpperCase, includeNumeric, includeSpecial];

  if (passLength < 8 || passLength > 128) {
    alert("Enter a length more than 8 characters but less than 128.");
    return generatePassword();
  }

  var i = 0;
  while (i < allChars.length) {
    if (allChars[i]) {
      passKey += allArrays[i][Math.floor(Math.random() * allArrays[i].length)];
    };

    i++;
  }

  for (var num = 0; num < allChars.length; num++) {
    if (allChars[num]) {
      charPool = charPool.concat(allArrays[num]);
    }
  }

  while (i < passLength) {
    if (charPool.length > 0) {
      passKey += charPool[Math.floor(Math.random() * charPool.length)];
    } else {
      alert("Choose at least one character type for your password.");
      return generatePassword();
    };

    i++;
  }

  var randoKey = randoSequence(passKey).join("");

  return randoKey;
}

