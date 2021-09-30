# Review

## Goals

1. Working morse code translator - done
   - english to morse - done
   - morse to english - close it does work but not if i type a ".", it needs to be '•' for it to translate
2. Practice using TDD - done
   - Got some practice writing tests first all test's pass!!!!!
3. Application of what you're learning (pure functions etc.) - Clean functions, and the app works - kinda done
   ​

## Specification

​

- Translator functions and Unit tests to be written in separate files. Functions to be brought into the main.js and unit test files - kinda done
  - Has written tests, data files and pure functions in separate files. Some have been brought into the main which is great not all though.
  - You need to have your tested functions brought into main and used as there isn't any point testing them if they are not used.
- Readme - kinda done
  - Technically has a README although there it needs a bit of polishing.
  - Add a section about set up so if someone came to project they know how to get it and run the tests.
  ```bash
  # get project
  git clone project-url
  # go into project
  cd project-name
  # add dependencies
  npm install
  # run test scripts
  npm run test
  ```
- 10 commits during development - done
  - \>10 commits done. Judging by commit comments, they are of value.
- Mobile first/Responsive - done
  - Responsive and looks nice!
  - Handles a large sentence translation
- No tutorials - done
  - This work looks original
    ​

## Overall

​​A very nice morse code translator which works well, provides some feedback if the character you type isn't able to be translate and the styling is great. I love the floating inputs that come into view. Also the noise and typewriter. It is a good project to play around with these things. 

The synth noise is awesome!

In terms of JS you have separated your files which is great. You are just not using the tested functions in translator.js. The code in main is great and tests are working you just need to move it around slightly so you are not rewriting functions.
​
You have complete the extension which is great!
​

## To work on

### Pure functions

You need to bring in your pure functions into main and use them rather then rewriting them with additions. I have tweaked your code to bring in your tested function and use it for its sole purpose. Your function will do the translating, The rest is handled by the event listener.

```js
// main.js
// BRINGING IN YOUR TESTED PURE FUNCTION
import { translateToMorse } from "./translator.js";
const boxEnglish = document.querySelector(".englishInput");
const boxMorse = document.querySelector(".morseOutput");

// UPDATING YOUR EVENT LISTENER TO USE YOUR TESTED FUNCTION
buttonFromEnglish.addEventListener("click", () => {
  const userInput = boxEnglish.value;
  const translation = translateToMorse(userInput);
  // translateToMorse() ONLY TRANSLATES -> GIVES YOU A TRANSLATION
  // THE DOM STUFF IS DONE BELOW
  if (translation === "Not a valid morse code character!") {
    boxEnglish.style.color = "#ff0000";
    boxEnglish.style.fontWeight = "900";
    boxEnglish.value = translation;
  } else {
    boxMorse.value = translation;
  }
});
```

### House keeping

- Typo on your test file name
- Jazz up your readme
- Fix the bug with the extension

Hey mate a lot of little things let me know if you want a hand or a further explanation.
