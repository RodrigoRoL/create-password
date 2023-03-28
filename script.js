// Assigned the variables (numbers,uppercase,lowercase,special characters), as well as default length to 8 since its the min required length
var characterlength = 8;
var choices = [] // Empty array until you select if you want numbers, letters, special characters
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["!","#","$","%","&","(",")","*","+",",","-",".","/","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    console.log("You are generating your password");
    var password = "";
    for(var i = 0; i < characterlength; i++){
        var randompassword = Math.floor(Math.random() * choices.length); 
        password = password + choices[randompassword];
    }
// Display the password
    return password
}

function prompts(){
    choices = [];
    //Asking to select a password length range between 8 to 128 characters
    characterlength = parseInt(prompt("How many characters you want for your password from 8 to 128 characters?")); 
    // If the user selects a non numerical value, the password is less than 8 characters or more than 128, the password generator app will stop working 
    if (isNaN(characterlength) || characterlength < 8 || characterlength > 128) {
    prompt ('Password should be 8 to 128 characters');
    return false;
    }
  // If the password lenght is correct (within range and using a numerical value), the following prompts will be presented to the user
  // If they select yes to any of the following prompts, the content of the arrays selected as "yes", will be added to the generated password
    if(confirm ("Would you like numbers in your password?")){
        choices = choices.concat(numbers);
    }
    if(confirm ("Would you like lowercase letters in your password?")){
        choices = choices.concat(lowercase);
    }
    if(confirm ("Would you like uppercase letters in your password?")){
        choices = choices.concat(uppercase);
    }
    if(confirm ("Would you like special characters in your password?")){
        choices = choices.concat(special);
    }
    return true;
    }

// Write password to the #password input
function writePassword() {
    var generate = prompts();
    if(generate){
  var generatedpassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = generatedpassword;
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);