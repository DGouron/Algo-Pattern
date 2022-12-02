// An anagram is a word or expression obtained by swapping the letters of a starting word or expression.

/**
 *
 * @param {String} word
 * @returns {String}
 */
const normalize = (word) => {
  return word
    .toLowerCase()
    .replace(/[\W]/g, "") // remove all non-alphanumeric characters
    .split("")
    .sort()
    .join("");
};

/**
 *
 * @param {String} word
 * @param {String} wordSuposeToBeAnagram
 * @returns {Boolean}
 */
const findAnagram = (word, wordSuposeToBeAnagram) => {
  if (typeof word !== "string" || typeof wordSuposeToBeAnagram !== "string")
    return false;

  return normalize(word) === normalize(wordSuposeToBeAnagram);
};

module.exports = findAnagram;
