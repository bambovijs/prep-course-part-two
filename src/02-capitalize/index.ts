/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str: string) {
  const words = str.split(" ");
  console.log(words);

  const newArray = words.map((word) => {
    const firstChar = word[0];
    const remainingWord = word.substring(1);
    return firstChar.toUpperCase() + remainingWord;
  });
  return newArray.join(" ");
}

export { capitalize };
