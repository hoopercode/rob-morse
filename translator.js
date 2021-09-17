

export const translateToMorse = (a) => {
  
  if (a.length <=1 ){
    const lower = a.toLowerCase();
    const value =  englishAlphabet.indexOf(lower);
    const morseValue = morseAlphabet[value]
    return morseValue;
  }

  else if (a.length >=2 ){
    const morseArray = []
    const stringAsArray = Array.from(a.toLowerCase());
  
    stringAsArray.forEach(letter => { 
      const letterValue = englishAlphabet.indexOf(letter);
      morseArray.push(morseAlphabet[letterValue])
    });
    
    const arrayAsString = morseArray.join(" ")
    console.log(arrayAsString)
    return arrayAsString;
    
  }

};



export const translateToEnglish = (char) => {
  const morseValue =  morseAlphabet.indexOf(char);
  const value = englishAlphabet[morseValue]
  return value;
  
};

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