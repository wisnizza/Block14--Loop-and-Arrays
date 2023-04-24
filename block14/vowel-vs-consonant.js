function countConsonantsAndVowels(str) {
  let vowelCount = 0;
  let consonantCount = 0;

  // loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // check if the character is a vowel
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      vowelCount++;
    }
    // check if the character is a consonant
    else {
      consonantCount++;
    }
  }

  // print the word followed by the number of consonants and vowels
  console.log(`${str} has ${vowelCount} vowels and ${consonantCount} consonants.`);
}

// example usage
countConsonantsAndVowels("hello"); // outputs "hello has 2 vowels and 3 consonants."
countConsonantsAndVowels("javascript"); // outputs "javascript has 3 vowels and 7 consonants."