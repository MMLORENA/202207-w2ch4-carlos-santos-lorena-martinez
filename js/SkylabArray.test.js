const SkylabArray = require("./SkylabArray");

describe("Given a SkylabArray object", () => {
  describe("When a new instance is created and it recives 45, 65 and 354", () => {
    test("Then it should return { '0': 3, '1': 8, '2': 10, '3': 2, length: 4 }", () => {
      const expectedResult = { 0: 3, 1: 8, 2: 10, 3: 2, length: 4 };
      const result = new SkylabArray(3, 8, 10, 2);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a SkylabArray object", () => {
  describe("When a new instance is created and it recives NaN, 0, 'Hola' and false", () => {
    test("Then it should return { '0': NaN, '1': 0, '2': 'Hola', '3': false, length: 4 }", () => {
      const expectedResult = { 0: NaN, 1: 0, 2: "Hola", 3: false, length: 4 };
      const result = new SkylabArray(NaN, 0, "Hola", false);

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given a SkylabArray object", () => {
  describe("When a new instance is created and it recives 7, 0, 5 and 43", () => {
    describe("When it's push method its invoced and it recives 4", () => {
      test("Then the instance should return { '0': 7, '1': 0, '2': 5, '3': 43, '4': 4,length: 4 }", () => {
        const expectedResult = { 0: 7, 1: 0, 2: 5, 3: 43, 4: 4, length: 5 };
        const instance = new SkylabArray(7, 0, 5, 43);
        instance.push(4);

        expect(instance).toEqual(expectedResult);
      });
    });
  });
});

describe("Given a SkylabArray object", () => {
  describe("When a new instance is created and it recives 34 and 23", () => {
    describe("When it's some method its invoced and it recives NaN", () => {
      test("Then the instance should return { '0': 34, '1': 53, length: 3 }", () => {
        const expectedResult = { 0: 34, 1: 53, 2: NaN, length: 3 };
        const instance = new SkylabArray(34, 53);
        instance.push(NaN);

        expect(instance).toEqual(expectedResult);
      });
    });
  });
});

describe("Given a SkylabArray object", () => {
  describe("When a new instance is created and it recives 34 and 53", () => {
    describe("When it's some method its invoced and it recives (x) => x < 73)", () => {
      test("Then it should return true", () => {
        const expectedResult = true;
        const instance = new SkylabArray(34, 53);
        const result = instance.some((x) => x < 73);

        expect(result).toEqual(expectedResult);
      });
    });
  });
});

describe("Given a SkylabArray object", () => {
  describe("When a new instance is created and it recives 'Hola', 'soy' and 'Carlos'", () => {
    describe("When it's some method its invoced and it recives (x) => x === 'Carlos')", () => {
      test("Then it should return true", () => {
        const expectedResult = true;
        const instance = new SkylabArray("Hola", "soy", "Carlos");
        const result = instance.some((x) => x === "Carlos");

        expect(result).toEqual(expectedResult);
      });
    });
  });
});

describe("Given a SkylabArray object", () => {
  describe("When a new instance is created and it recives 'Hola' and 'Mundo!'", () => {
    describe("When it's some method its invoced and it recives (x) => x === 2)", () => {
      test("Then it should return false", () => {
        const expectedResult = false;
        const instance = new SkylabArray("Hola", "Mundo!");
        const result = instance.some((x) => x === 2);

        expect(result).toEqual(expectedResult);
      });
    });
  });
});
