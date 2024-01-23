/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str: string): boolean {
  // izveidojam masivu kur liksim elementus
  let splitString: string[] = [];

  //parbaudam vai str mainigais nav tukšs
  if (str.length > 0) {
    //masiva sadala a elementiem
    splitString = str.split("");

    //salīdzina elementus ejot cauri masīvam līdz pusei.
    for (let i = 0; i < Math.floor(splitString.length / 2); i++) {
      if (splitString[i] !== splitString[splitString.length - 1 - i]) {
        return false;
      }
    }

    return true;
  }

  return false;
}

export { palindrome };
