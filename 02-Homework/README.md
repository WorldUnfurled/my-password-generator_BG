## my-password-generator-bg

# HTML
* Utilized HTML from Trilogy 03-JS Homework File
* Added descriptive comments to make for easier reading
* Added script tag for Rando js - a randomizer based on a refined Fisher-Yates shuffle 
# CSS
* Utilized CSS from Trilogy 03-JS Homework File
# JS
* _writePassword()_
* Saves the string produced by generatePassword to a variable - password; passwordText selects the "password" id element and its value is set to the string in password, displaying the string as text on the page
* _generateBtn.addEventListener()_
* Runs writePassword function when the password generation function is clicked
* _generatePassword_
* Empty vars for setup
* Arrays hold characters based on type
* Prompts user to enter a password length between 8 adn 128 characters
* Saves confirmed true or false value for each type choice based on user input
* Confirmation values stored in array
* If chosen password length is out of bounds, an alert tells the user that they should enter a character length within the bounds, and then it recursively calls generatePassword
# LINKS
