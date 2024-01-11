const { constructNote } = require("./construct-note") 

describe("constructNote", function constructNote() {
  it("should return false for empty letters string", function() {
    expect(constructNote("abcd", "")).toBe(false);
  });

  it("should return true for empty message", function constructNote() {
    expect(constructNote("", "abc")).toBe(true);
  });

  it("should account for duplicates", function constructNote() {
    expect(constructNote("aa", "abcd")).toBe(false);
  });

  it("should handle large cases", function constructNote() {
    expect(
      constructNote("skbjjjvnnd", "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd")
    ).toBe(true);
  });

  it("should return true if all letters contained", function constructNote() {
    expect(constructNote("abc", "abcd")).toBe(true);
  });
});
