class SkylabArray {
  constructor(...values) {
    this[0] = values[0];
    this[1] = values[1];
  }
}

const test = new SkylabArray(3, 8, 10, 2);
