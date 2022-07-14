const SkylabArray = require("./SkylabArray");

describe("Given a SkylabArray object", () => {
  describe("When it's called and it recives 45, 65 and 354", () => {
    test("Then it should return { '0': 3, '1': 8, '2': 10, '3': 2, length: 4 }", () => {
      const expectedResult = { 0: 3, 1: 8, 2: 10, 3: 2, length: 4 };
      const result = new SkylabArray(3, 8, 10, 2);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a SkylabArray object", () => {
  describe("When it's called and it recives NaN, 0, 'Hola' and false", () => {
    test("Then it should return { '0': NaN, '1': 0, '2': 'Hola', '3': false, length: 4 }", () => {
      const expectedResult = { 0: NaN, 1: 0, 2: "Hola", 3: false, length: 4 };
      const result = new SkylabArray(NaN, 0, "Hola", false);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a SkylabArray object", () => {
  describe("When it's called and it recives 7, 0, 5 and 43", () => {
    describe("When it's push method its called and it recives 4", () => {
      test("Then it should return { '0': 7, '1': 0, '2': 5, '3': 43, '4': 4,length: 4 }", () => {
        const expectedResult = { 0: 7, 1: 0, 2: 5, 3: 43, 4: 4, length: 5 };
        const result = new SkylabArray(7, 0, 5, 43);
        result.push(4);

        expect(result).toEqual(expectedResult);
      });
    });
  });
});

describe("Given a SkylabArray object", () => {
  describe("When it's called and it recives 34 and 53", () => {
    describe("When it's push method its called and it recives NaN", () => {
      test("Then it should return { '0': 34, '1': 53, length: 3 }", () => {
        const expectedResult = { 0: 34, 1: 53, 2: NaN, length: 3 };
        const result = new SkylabArray(34, 53);
        result.push(NaN);

        expect(result).toEqual(expectedResult);
      });
    });
  });
});
