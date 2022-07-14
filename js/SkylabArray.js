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
}

module.exports = SkylabArray;
