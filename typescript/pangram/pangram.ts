const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

export function isPangram(sentence: string) : boolean {

  // Make case insensitive
  sentence = sentence.toLowerCase();
  
  let letterIndex;
  for(let i=0; i<ALPHABET.length; i++){
    letterIndex = sentence.indexOf(ALPHABET[i]);
    if(letterIndex === -1){
      return false;
    }
  }
  return true;
}
