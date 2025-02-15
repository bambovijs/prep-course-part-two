/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA: string, stringB: string) {
  const cleanString = (str: string) =>
    str.toLocaleLowerCase().replace(/[^\w]/g, ""); //regex- izdzes visu kas nav alfabeta burti un cipari

  const cleanA = cleanString(stringA);
  const cleanB = cleanString(stringB);

  const sortA = cleanA.split("").sort().join("");
  const sortB = cleanB.split("").sort().join("");

  if (sortA === sortB) {
    return true;
  } else {
    return false;
  }
}

export { anagrams };
