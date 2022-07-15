const SkylabArray = require("./SkylabArray-lorena.js");

describe("Given a constructor functions", () => {
  describe("When it's born a new object using the SkylabArray class and recives as arguments 3,8,10,2 as values", () => {
    test("Then it should return an object similar to an Array with 4 properties (0,1,2,3) resolving respectivly at the values (3,8,10,2) when it is instanced", () => {
      const expectedNumbersObject = {
        0: 3,
      };
      expectedNumbersObject[1] = 8;
      expectedNumbersObject[2] = 10;
      expectedNumbersObject[3] = 2;

      const resultNumbersObject = new SkylabArray(3, 8, 10, 2);

      expect(expectedNumbersObject).toEqual(resultNumbersObject);
    });
  });
});
