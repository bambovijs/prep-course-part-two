/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {
  //parverst int par string un sadalīt
  const parsedInt = int.toString().split("");
  const reversedString = parsedInt.reverse().join("");

  const reversedInt = parseInt(reversedString) * Math.sign(int);

  //   console.log(parsedInt);
  //   console.log(reversedString);
  //   console.log(reversedInt);

  return reversedInt;
}

export { reverse };
