/* eslint-disable no-restricted-syntax */
class SkylabArray {
  lengthCounter;

  constructor(...values) {
    let length = 0;
    for (const index of values.keys()) {
      this[index] = values[index];
      length += 1;
    }
    this.length = length;
  }

  push(value) {
    this[this.lengthCounter] = value;
    this.lengthCounter += 1;
  }

  some(callback) {
    let isMatched = false;
    for (const value in this) {
      if (callback(this[value]) && value !== "length") {
        isMatched = true;
      }
    }
    return isMatched;
  }
}

module.exports = SkylabArray;
