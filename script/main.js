const boxEnglish = document.querySelector('.englishInput');
const boxMorse = document.querySelector('.morseOutput');
const buttonFromEnglish = document.querySelector('.translator__buttonEnglish');
const buttonFromMorse = document.querySelector('.translator__buttonMorse');
const buttonReset = document.querySelector('.btn-reset');
const buttonPlay = document.querySelector('.btn-play');


//event listeners

buttonFromEnglish.addEventListener(('click'), () => translateToMorse());
buttonFromMorse.addEventListener(('click'), () => translateToEnglish());
buttonReset.addEventListener(('click'), () => reset());
buttonPlay.addEventListener(('click'), () => play());

const translateToMorse = () => {
  
if (format.test(boxEnglish.value)) {
  return ("Not a valid morse code character!")
  
}
else {
const morseArray = []
  const stringAsArray = Array.from(boxEnglish.value.toLowerCase());

  stringAsArray.forEach(letter => { 
    const letterValue = englishAlphabet.indexOf(letter);
    morseArray.push(morseAlphabet[letterValue])
  });
  
  const arrayAsString = morseArray.join(" ")
  console.log(arrayAsString)
  boxMorse.value = arrayAsString;

}
}




const translateToEnglish = () => {

const englishArray = []
const morseAsArray =  boxMorse.value.split(" ");

morseAsArray.forEach(character => {
    const charValue = morseAlphabet.indexOf(character);
    englishArray.push(englishAlphabet[charValue])
  
   
});

const arrayAsString = englishArray.join("");
boxEnglish.value = arrayAsString;

};

const play = () => {
  var morse = new morseSynth();
  morse.play(boxEnglish.value);

  // boxEnglish.value = "";
  // boxMorse.value = "";
}

const reset = () => {
  boxEnglish.value = "";
  boxMorse.value = "";
}

////Script for Morsify///

    var encoded = morsify.encode('SOS'); // ... --- ...
    var decoded = morsify.decode('... --- ...'); // SOS
    var characters = morsify.characters(); // {'1': {'A': '.-', ...}, ..., '11': {'ㄱ': '.-..', ...}}
    var audio = morsify.audio('SOS');
    var oscillator = audio.oscillator; // OscillatorNode
    var context = audio.context; // AudioContext
    var gainNode = audio.gainNode; // GainNode
    audio.play(); // play audio
    audio.stop(); // stop audio

 ////Script for Morsify///


const format = /[@$%*]+/;
const englishAlphabet = [
'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z',
'1',
'2',
'3',
'4',
'5',
'6',
'7',
'8',
'9',
' ',
',',
'?',
':',
'-',
'.',
';',
'/',
'"',
')',
'(',
'@',
'+',
]
const morseAlphabet = [
'•—',
'—•••',
'—•—•',
'—••',
'•',
'••—•',
'——•',
'••••',
'••',
'•———',
'—•—',
'•—••',
'——',
'—•',
'———',
'•——•',
'——•—',
'•—•',
'•••',
'—',
'••—',
'•••—',
'•——',
'—••—',
'—•——',
'——••',
'•----',//1
'••---',//2
'•••--',//3
'••••-',//4
'•••••',//5
'-••••',//6
'--•••',//7
'---••',//8
'----•',//9
'/',//space
'--••--',//comma
'••--••',//question mark
'---•••',//colon
'-••••-',//hyphen
'•-•-•-',//full stop
'-•-•-•',//semi-colon
'-••-•',//slash
'•----•',//apostrophe
'-•--•-',//right bracket
'-•--•',//left bracket
'•--•-•',//@
'•-•-•',//+ sign 
]
