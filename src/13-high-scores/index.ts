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
    if (this.scores.length === 0) {
      console.log("Empty array");
    }

    return this.scores.pop();
  }

  get personalBest() {
    let temp = this.scores[0];

    if (this.scores.length !== 0) {
      for (let i = 0; i < this.scores.length; i++) {
        if (temp < this.scores[i]) {
          temp = this.scores[i];
        }
      }
    } else {
      throw new Error("Scores array is empty");
    }

    return temp;
  }

  get personalTopThree() {
    let sortedArray = this.scores.slice().sort((a, b) => b - a);
    let resultArray: number[] = sortedArray.slice(0, 3);
    console.log(sortedArray);

    return resultArray;
  }
}

export { HighScores };
