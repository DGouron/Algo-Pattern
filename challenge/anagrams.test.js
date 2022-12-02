const findAnagram = require("./anagrams");

test("Find anagram", () => {
  expect(findAnagram("chien", "niche")).toBe(true);
  expect(findAnagram("chien", "ni\\*che")).toBe(true);
  expect(findAnagram("chiø♀ØÞen", "ni\\*che")).toBe(true);
  expect(findAnagram("chien", "noche")).toBe(false);
  expect(findAnagram("chien", "")).toBe(false);
  expect(findAnagram(86, 68)).toBe(false);
});
