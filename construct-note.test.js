const { constructNote } = require("./construct-note") 

describe("constructNote", function() {
  test("should return false for empty letters string", function() {
    expect(constructNote("abcd", "")).toBe(false);
  });

  test("should return true for empty message", function() {
    expect(constructNote("", "abc")).toBe(true);
  });

  test("should account for duplicates", function() {
    expect(constructNote("aa", "abcd")).toBe(false);
  });

  test("should handle large cases", function () {
    expect(
      constructNote("skbjjjvnnd", "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd")
    ).toBe(true);
  });

  test("should return true if all letters contained", function () {
    expect(constructNote("abc", "abcd")).toBe(true);
  });
});
