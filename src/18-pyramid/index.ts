/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number) {
  const maxWidth = 2 * n - 1;

  for (let i = 0; i < n; i++) {
    let level = "";

    const numSharp = 2 * i + 1;

    const numSpace = (maxWidth - numSharp) / 2;

    level += " ".repeat(numSpace);
    level += "#".repeat(numSharp);
    level += " ".repeat(numSpace);

    console.log(level);
  }
}

export { pyramid };
