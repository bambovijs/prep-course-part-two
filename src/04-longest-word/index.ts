/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */
function longestWord(sen: string): string {
  // Regex un sadalit vardos
  const words = sen.match(/[a-zA-Z]+/g);

  if (!words || words.length === 0) {
    return "nav neviena varda sen mainigaja";
  }

  // istatam ka mainigais ir pirmais elements/vards masiva
  let longestWord = words[0];
  // tapec saksim iterācijas no elementa[1]
  for (let i = 1; i < words.length; i++) {
    //console.log(words[i]);
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }

  return longestWord.toString();
}
longestWord("Hello there");
longestWord("My name is Adam");
longestWord("fun&!! time");
// longestWord("");
// longestWord(" ");

export { longestWord };
