

export const translateToMorse = (a) => {
    if (format.test(a)) {
    return ("Not a valid morse code character!")
    
  }
else {
  const morseArray = []
    const stringAsArray = Array.from(a.toLowerCase());
  
    stringAsArray.forEach(letter => { 
      const letterValue = englishAlphabet.indexOf(letter);
      morseArray.push(morseAlphabet[letterValue])
    });
    
    const arrayAsString = morseArray.join(" ")
    return arrayAsString;
}
}




export const translateToEnglish = (char) => {
  
  const englishArray = []
  const morseAsArray =  char.split(" ");
  
  morseAsArray.forEach(character => {
      const charValue = morseAlphabet.indexOf(character);
      englishArray.push(englishAlphabet[charValue])
    
     
  });

  const arrayAsString = englishArray.join("")
  return arrayAsString;
  
};


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
