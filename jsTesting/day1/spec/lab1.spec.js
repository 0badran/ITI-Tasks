const { capitalizeTextFirstChar } = require("../lab1");
describe("capitalizeTextFirstChar method", () => {
  it("should return a string", function () {
    expect(typeof capitalizeTextFirstChar("i'm Ahmed Ali")).toBe("string");
  });
  it("should return a string after capitalizing every word's first character", function () {
    expect(capitalizeTextFirstChar("i'm ahmed ali")).toBe("I'm Ahmed Ali");
  });
  it("should return a error is argument not string ", function () {
    expect(() => { capitalizeTextFirstChar(7) }).toThrow();
  });
});
