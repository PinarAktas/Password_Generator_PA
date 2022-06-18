// Assignment Code
var generateBtn = document.querySelector("#generate");

// Below code shows us, how can I get random lowercase, uppercase, number and symbol. I prefer to use https://net-comber.com/charset.html "Browser Character Set".
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
 }

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunc = {
	lowerCase: getRandomLower,
	upperCase: getRandomUpper,
	numbers: getRandomNumber,
	char: getRandomSymbol
}

function generatePassword() {
  var generatedPassword = ''; // Inıtially it must be empty.
  var passLenght = prompt("How many characters would you like your password to contain? (At least 8, max 128)", "");
  passLenght = parseInt(passLenght); // password lenght must be integer. I used parseInt for convert string to integer.
  if ((passLenght>=8) && (passLenght<=128)) //password must be 8-128, if ok than other questions must be asked.
  { 
    var char = confirm ("Click OK to confirm including special characters");
    var numbers = confirm ("Click OK to confirm including numeric characters");
    var lowerCase = confirm ("Click OK to confirm including lowercase characters");
    var upperCase = confirm ("Click OK to confirm including uppercase characters"); 
    var elementArray = [{char}, {numbers}, {lowerCase}, {upperCase}].filter(item => Object.values(item)[0]);
  }
  else alert ("The number of characters must be at least 8 and at most 128!!!"); // If password doesn't between 8-128, there is a alert.
  
  var count =0; //there is a count var. That count var calculate to number of type. 
  count=parseInt(count);
  if (char===true) count++;
  if (numbers===true) count++;
  if (lowerCase===true) count++;
  if (upperCase===true) count++;
  if ((passLenght>=8) && (passLenght<=128) && (count<1)) 
  {
  alert ("At least ona character type must be selected. !!!");
  return;
  }
  if ((passLenght>=8) && (passLenght<=128)) 
  {
    for(let i=0; i<passLenght; i+=count)//These code block calculate the random password by using count number, password lenght, randomFunc, elementArray.
      {
		    elementArray.forEach(type => 
          {
			      const funcName = Object.keys(type)[0];
			      generatedPassword += randomFunc[funcName]();
		      });
      }
  return generatedPassword;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword());


