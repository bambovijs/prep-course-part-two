/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
  let result = "";
  const words = input.split(/[ -]/g);
  //console.log(words);

  words.forEach((word) => {
    const cleanWord = word.replace(/[^a-z]/gi, "");
    //console.log(cleanWord);

    if (cleanWord) {
      result += cleanWord[0].toUpperCase();
    }
  });

  return result;
}

export { parse };
