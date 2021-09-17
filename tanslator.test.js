import {translateToMorse, translateToEnglish} from "./translator"

// it should take input "a" and return an output of "*-"
      //This same test would be replicated for all letters of the alphabet (accented included)

describe("Testing translateToMorse", () => {
        // VALID TEST CASE
        it("Should format 'a' to '•—' ", () => {
          let result = translateToMorse("a");
          // ASSERT -> TEST WILL PASS OF FAIL
          expect(result).toBe("•—");
        });


// it should take input "A" <----CAPITAL and return an output of "*-" 
      //This same test would be replicated for all letters of the alphabet (accented included)

        it("Should format 'A' to '•—' ", () => {
          // ARRANGE
          let result;
          // ACT
          result = translateToMorse("A");
          // ASSERT -> TEST WILL PASS OF FAIL
          expect(result).toBe("•—");
        });

// it should take input "1" and return an output of ".----"
      //This same test would be replicated for all numbers up to 100
      
      it("Should format '1' to '•----'' ", () => {
        // ARRANGE
        let result;
        // ACT
        result = translateToMorse("1");
        // ASSERT -> TEST WILL PASS OF FAIL
        expect(result).toBe("•----");
      });
      
// it should take an input of an entire string "abcde" and return ".- -... -.-. -.. ."
      //This same test would be replicated for any letter combinations in a string.

      it("Should format 'Rob Hooper' to '•—• ——— —••• / •••• ——— ——— •——• • •—•' ", () => {
        let result = translateToMorse("Rob Hooper");
        // ASSERT -> TEST WILL PASS OF FAIL
        expect(result).toBe("•—• ——— —••• / •••• ——— ——— •——• • •—•");
      });

// it should take input of an "?" and return ". . _ _ . ."
      //This same test would be replicated for all other punctuation symbols. 
      it("Should format '?' to '••--••' ", () => {
        // ARRANGE
        let result;
        // ACT
        result = translateToMorse("?");
        // ASSERT -> TEST WILL PASS OF FAIL
        expect(result).toBe("••--••");
      });
// it should take input of an "SOS" <--- Standard morse abbreviation and return ". . . _ _ _ .. ."
      //This same test would be replicated for all other standard morse abbreviations.  
      it("Should format 'SOS' to '••• ——— •••' ", () => {
        // ARRANGE
        let result;
        // ACT
        result = translateToMorse("SOS");
        // ASSERT -> TEST WILL PASS OF FAIL
        expect(result).toBe("••• ——— •••");
      });
// it should return "Character not available in morse code" if character "%" is input.
    //This would return whenever a symbol that is not registered with the internation morse code dictionary //
    it("Should format '%' to 'Not a valid morse code character!' ", () => {
      // ARRANGE
      let result;
      // ACT
      result = translateToMorse("%");
      // ASSERT -> TEST WILL PASS OF FAIL
      expect(result).toBe("Not a valid morse code character!");
    });
});


// it should take an input of "*-" and return the letter "a"
      //This same test would be replicated for all symbols of the morse code alphabet
      
      describe("Testing translateToEnglish", () => {
        // VALID TEST CASE
        it("Should format '•—'' to 'a' ", () => {
          // ARRANGE
          let result;
          // ACT
          result = translateToEnglish("•—");
          // ASSERT -> TEST WILL PASS OF FAIL
          expect(result).toBe("a");
        });
 // it should take input ".----" and return an output of "1"
      //This same test would be replicated for all morse code up to 100     
      it("Should format '•----' to '1' ", () => {
        // ARRANGE
        let result;
        // ACT
        result = translateToEnglish("•----");
        // ASSERT -> TEST WILL PASS OF FAIL
        expect(result).toBe("1");
      });
      });

// it should take an input of an entire morse code string ".- -... -.-. -.. ." and return "abcde"
      //This same test would be replicated for any letter combinations in a string.
      it("Should format '•—• ——— —••• / •••• ——— ——— •——• • •—•' to 'rob hooper' ", () => {
        
        let result = translateToEnglish("•—• ——— —••• / •••• ——— ——— •——• • •—•");
        // ASSERT -> TEST WILL PASS OF FAIL
        expect(result).toBe("rob hooper");

      });

// it should take input of an ". . _ _ . ." and return "?"
      //This same test would be replicated for all other morse punctuation symbols.

        it("Should format '••--••' to '?' ", () => {
          // ARRANGE
          let result;
          // ACT
          result = translateToEnglish("••--••");
          // ASSERT -> TEST WILL PASS OF FAIL
          expect(result).toBe("?");
        });
// it should take input of an ". . . _ _ _ . . ." <--- Standard morse abbreviation and return ""
      //This same test would be replicated for all other standard morse symbol abbreviations. 
      it("Should format '••• ——— •••' to 'SOS' ", () => {
        // ARRANGE
        let result;
        // ACT
        result = translateToEnglish("••• ——— •••");
        // ASSERT -> TEST WILL PASS OF FAIL
        expect(result).toBe("sos");
      });
// it should return "Character not available in morse code" if character "%" is input.
    //This would return whenever a symbol that is not registered with the internation morse code dictionary //

      










    
      


   
      



//The things above are the things it SHOULD do but need to remember about 

