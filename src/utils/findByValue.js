/**
 * Finds and returns the first object in an array where a specified key matches a given value.
 * @param {Array} array - The array to search through.
 * @param {*} value - The value to match against.
 * @param {string} key - The property name (key) in each object to match against.
 * @returns {*} The first object in the array where the specified key matches the given value, or undefined if not found.
 */
export function findByValue(array, value, key) {
  return array.find((item) => item[key] === value);
}
