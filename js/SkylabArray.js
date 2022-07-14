class SkylabArray {
  constructor(...values) {
    // eslint-disable-next-line no-restricted-syntax
    for (const index of values.keys()) {
      this[index] = values[index];
    }
  }
}

module.exports = SkylabArray;
