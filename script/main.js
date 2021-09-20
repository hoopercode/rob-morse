import {englishAlphabet, morseAlphabet, format} from '../script/morseChars.js'

const boxEnglish = document.querySelector('.englishInput');
const boxMorse = document.querySelector('.morseOutput');
const buttonFromEnglish = document.querySelector('.translator__buttonEnglish');
const buttonFromMorse = document.querySelector('.translator__buttonMorse');
const buttonReset = document.querySelector('.btn-reset');
const buttonPlay = document.querySelector('.btn-play');




//event listeners

buttonFromEnglish.addEventListener(('click'), () => translateToMorse(boxEnglish));
buttonFromEnglish.addEventListener(('click'), () => colors());
buttonFromMorse.addEventListener(('click'), () => translateToEnglish(boxMorse));
buttonReset.addEventListener(('click'), () => reset());
buttonPlay.addEventListener(('click'), () => play());



//Function - English to Morse

const translateToMorse = (string) => {
const incorrectInput = "Not a valid morse code character!"
if (format.test(string.value)) {
  string.style.color = "#ff0000";
  string.style.fontWeight = "900";
  string.value  = incorrectInput

  return incorrectInput;
  
  
}
else {
const morseArray = []
  const stringAsArray = Array.from(string.value.toLowerCase());

  stringAsArray.forEach(letter => { 
    const letterValue = englishAlphabet.indexOf(letter);
    morseArray.push(morseAlphabet[letterValue])
  });
  
  const arrayAsString = morseArray.join(" ")
  boxMorse.value = arrayAsString;
  return arrayAsString;
  

}
}


//Function - Morse to English 
const translateToEnglish = (string) => {
let validInput = /•—/i

if (validInput.test(string.value)) {
  const englishArray = []
  const morseAsArray =  string.value.split(" ");
  morseAsArray.forEach(character => {
    const charValue = morseAlphabet.indexOf(character);
    englishArray.push(englishAlphabet[charValue])
    
  
});

const arrayAsString = englishArray.join("");
boxEnglish.value = arrayAsString;
return arrayAsString;

}
else {
  const incorrectInput = "Not a valid morse code character!"
  string.style.color = "#ff0000";
  string.style.fontWeight = "900";
  string.value  = incorrectInput
  return incorrectInput;

}

    





};

//Function to Play Sound
const play = () => {
  let morse = new morseSynth();
  morse.play(boxEnglish.value);

  // boxEnglish.value = "";
  // boxMorse.value = "";
}

const reset = () => {
  boxEnglish.value = "";
  boxMorse.value = "";
  boxMorse.style.color = "#302B27";
  boxMorse.style.fontWeight = "normal";
  boxEnglish.style.color = "#302B27";
  boxEnglish.style.fontWeight = "normal";
}


const colors = () => {
  if (format.test(boxEnglish.value)) {
    boxEnglish.style.color = "#ff0000";
    boxEnglish.style.fontWeight = "900";

}
}
