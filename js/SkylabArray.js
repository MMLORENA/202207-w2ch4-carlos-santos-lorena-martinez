/* eslint-disable no-restricted-syntax */
class SkylabArray {
  length;

  constructor(...values) {
    let iterationCount = 0;
    for (const index of values.keys()) {
      this[index] = values[index];
      iterationCount += 1;
    }
    this.length = iterationCount;
  }

  push(value) {
    this[this.length] = value;
    this.length += 1;
  }

  some(callback) {
    let isMatched = false;
    for (const value in this) {
      if (callback(this[value])) {
        isMatched = true;
      }
    }
    return isMatched;
  }
}

module.exports = SkylabArray;
