function pigLatin(word){
  let vowelCheck=/\b[aeiou]/i; 
  let consonantCheck=/\b[^aeiou]+/ig;
  if(word[0]==word.match(vowelCheck)){
    console.log("Vowel detected");
    let PigLatined=word+"way"; //words beginning with vowels have "way" added to their end
    return PigLatined;
  }
  else{
    
    console.log("Consonant run");
    let trimmedLetters=word.match(/\b[^aeiou]+/ig);
    let PigLatined=word.replace(trimmedLetters, '').concat(trimmedLetters)+"ay"; //consonants before vowels are added to the end with "ay"
    return PigLatined;
  }
}

pigLatin("apple");

