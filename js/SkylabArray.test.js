const SkylabArray = require("./SkylabArray");

describe("Given a SkylabArray object", () => {
  describe("When it's called and it recives 45, 65 and 354", () => {
    test("Then it should return { '0': 3, '1': 8, '2': 10, '3': 2 }", () => {
      const expectedResult = { 0: 3, 1: 8, 2: 10, 3: 2 };
      const result = new SkylabArray(3, 8, 10, 2);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a SkylabArray object", () => {
  describe("When it's called and it recives NaN, 0, 'Hola' and false", () => {
    test("Then it should return { '0': NaN, '1': 0, '2': 'Hola', '3': false }", () => {
      const expectedResult = { 0: NaN, 1: 0, 2: "Hola", 3: false };
      const result = new SkylabArray(NaN, 0, "Hola", false);

      expect(result).toEqual(expectedResult);
    });
  });
});
