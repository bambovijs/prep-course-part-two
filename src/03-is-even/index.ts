/**
 * Is Even
 *
 * Determine if given number is even
 * without using any mathematic operators ( +, -, %, /, Math, ParseInt etc.)
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

const EVEN_NUMS = [0, 2, 4, 6, 8];

function isEven(n: number) {
  if (n !== 0) {
    const nAsString = n.toString(); // parvesh par string
    const wholeNumAsString = nAsString.split(".")[0]; // splito pie decimaldaļām
    const lastChar = wholeNumAsString[wholeNumAsString.length - 1];

    return EVEN_NUMS.includes(Number(lastChar));
  } else {
    return false;
  }
}

export { isEven };
