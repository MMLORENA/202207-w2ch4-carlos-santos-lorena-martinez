class SkylabArray {
  constructor(...values) {
    let index = 0;

    do {
      this[index] = values[index];
      index += 1;
      this.length = index;
    } while (index <= values.length - 1);
  }
}

module.exports = SkylabArray;
