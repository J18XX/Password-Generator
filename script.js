
var passwordChoice = [];

// this function is for random special Chars
var specialChar = function getRandomSymbols() {
  const symbols = '~!@#$%^&*()_+<>{}[].,/';
  return symbols[Math.floor(Math.random() * symbols.length)]
}

var lowerCase = function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

var upperCase = function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

var numbers = function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
} 


// var specialChar = ["~","!","@","#","$","%","^","&","*","(",")","-","+"];
// var lowerCase = ["a","b","c","d"];
// var upperCase = ["A", "B", "C", "D"];
// var numbers = ["1", "2", "3", "4"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
      var newPassword = generatePassword();
      passwordText.value = newPassword;
  } else {
      passwordText.value = "";
  }
}

function getPrompts(){
  passwordChoice = [];

  passwordLengths = parseInt(prompt("Password number must at lease 8 and no more than 128 characters.", "Enter your number"))

  if(isNaN(passwordLengths) || 8 > passwordLengths || passwordLengths > 128){
    alert("Please enter valid number!");
    return false;
  }

  if(confirm("Do you like lowercase letters in your password?")){
    passwordChoice = passwordChoice.concat(lowerCase);
  }

  if(confirm("Do you like uppercase letters in your password?")){
    passwordChoice = passwordChoice.concat(upperCase);
  }

  if(confirm("Do you like numbers in your password?")){
    passwordChoice = passwordChoice.concat(numbers);
  }

  if(confirm("Do you like special characers in your password?")){
    passwordChoice = passwordChoice.concat(specialChar);
  }

  return true;
}
// this function generate my random password 
function generatePassword(){
  var password = "";
  for (var i = 0; i < passwordLengths; i++){
    var randonIndex = Math.floor(Math.random() * passwordChoice.length);
    password = password + passwordChoice[randonIndex]();
  }

  return password;
}






