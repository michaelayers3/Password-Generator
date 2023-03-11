// Assignment Code
var generateBtn = document.querySelector("#generate");
var optionsLower= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var optionsUpper= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var optionsNumbers= ["0", "1" , "2", "3", "4", "5", "6", "7", "8", "9"];
var optionsSpecial= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];



function generatePassword(){
 var response = prompt("How many characters?");
  if (response < 8 || response > 128) {
    alert("Please enter a number between 8 and 128");
  return;
  }
  else {
    var Length = parseInt(response);
    console.log(Length);
  }
 
  var lowerCase = confirm("Do you want lowercase letters?");
    if(lowerCase === true){
      for(var i = 0; i < Length; i++){
      var index= Math.floor(Math.random() * optionsLower.length);
      var randomLower= optionsLower[index];
      console.log(randomLower);
  }
   } else{
    var randomLower= ""}

  var upperCase = confirm("Do you want uppercase letters?");
    if(upperCase === true){
      for(var i = 0; i < Length; i++){
      var index= Math.floor(Math.random() * optionsUpper.length);
      var randomUpper= (optionsUpper[index]);
      console.log(randomUpper);
  }
  } else{
    var randomUpper= "";}

  var numbers = confirm("Do you want numbers?");
    if(numbers === true){
      for(var i = 0; i < Length; i++){
      var index= Math.floor(Math.random() * optionsNumbers.length);
      var randomNumbers= optionsNumbers[index];
      console.log(randomNumbers);
      }} else{
        var randomNumbers= "";}
  var special = confirm("Do you want special characters?");
    if(special === true){
      for(var i = 0; i < Length; i++){
      var index= Math.floor(Math.random() * optionsSpecial.length);
      var randomSpecial= optionsSpecial[index];
      console.log(randomSpecial);
    }} else{
      var randomSpecial= "";}

  if (lowerCase === false && upperCase === false && numbers === false && special === false) {
    alert("Please select at least one character type");
  }
var password = randomLower+ randomUpper+ randomNumbers+ randomSpecial;
    for(var i = Length; i < Length; i++){
    //   var index= Math.floor(Math.random() * together.length);
    //   var randomTogether= together[index];
      console.log(password);
    
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
writePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  