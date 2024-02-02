/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game,
 *  one of the highest selling and addictive games of all time,
 *  and a classic of the arcade era.
 *  Your task is to write methods that return the highest score from the list,
 *  the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest() {
    // 1.Variants
    // if (this.scores.length === 0) {
    //   console.log("Empty array");
    // }

    // return this.scores.pop();

    return this.scores[this.scores.length - 1];
  }

  get personalBest() {
    // Variats Nr.1
    // let temp = this.scores[0];

    // if (this.scores.length !== 0) {
    //   for (let i = 0; i < this.scores.length; i++) {
    //     if (temp < this.scores[i]) {
    //       temp = this.scores[i];
    //     }
    //   }
    // } else {
    //   throw new Error("Scores array is empty");
    // }

    // return temp;

    return Math.max(...this.scores);
  }

  get personalTopThree() {
    const array = [...this.scores];
    const resultArray: number[] = array.sort((a, b) => b - a).slice(0, 3);

    return resultArray;

    // const result = [...this.scores].sort((a, b) => b - a).slice(0, 3);
    // return result;
  }
}

export { HighScores };
