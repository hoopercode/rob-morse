
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


const boxEnglish = document.querySelector('.englishInput');
const boxMorse = document.querySelector('.morseOutput');
const buttonFromEnglish = document.querySelector('.translator__buttonEnglish');
const buttonFromMorse = document.querySelector('.translator__buttonMorse');
const buttonReset = document.querySelector('.btn-reset');
const buttonPlay = document.querySelector('.btn-play');
const boxTypewriter = document.getElementsByClassName('.typewriter')




//event listeners

buttonFromEnglish.addEventListener(('click'), () => translateToMorse());
buttonFromEnglish.addEventListener(('click'), () => addToType());

buttonFromMorse.addEventListener(('click'), () => translateToEnglish());
buttonReset.addEventListener(('click'), () => reset());
buttonPlay.addEventListener(('click'), () => play());




const translateToMorse = () => {
  
if (format.test(boxEnglish.value)) {
  boxMorse.value = incorrectInput
  
  
}
else {
const morseArray = []
  const stringAsArray = Array.from(boxEnglish.value.toLowerCase());

  stringAsArray.forEach(letter => { 
    const letterValue = englishAlphabet.indexOf(letter);
    morseArray.push(morseAlphabet[letterValue])
  });
  
  const arrayAsString = morseArray.join(" ")
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
  let morse = new morseSynth();
  morse.play(boxEnglish.value);

  // boxEnglish.value = "";
  // boxMorse.value = "";
}

const reset = () => {
  boxEnglish.value = "";
  boxMorse.value = "";
}

const incorrectInput = "Not a valid morse code character!"

////Script for Scrolling Text //

// // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml6 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml6 .letter',
//     translateY: ["1.1em", 0],
//     translateZ: 0,
//     duration: 750,
//     delay: (el, i) => 50 * i
//   }).add({
//     targets: '.ml6',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

//   ////Script for Scrolling Text //


