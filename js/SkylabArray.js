class SkylabArray {
  length;

  constructor(...values) {
    let iterationCount = 0;
    // eslint-disable-next-line no-restricted-syntax
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
}

module.exports = SkylabArray;
