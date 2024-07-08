/**
 * UUID Functions
 */

/**
 * Generates a standard UUID v4 string (xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx).
 * @returns {string} UUID v4 string
 */
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Generates a simplified UUID string (xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx).
 * @returns {string} Simplified UUID string
 */
function simpleUUID() {
  return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Generates a secure UUID v4 string using the `crypto` module for random number generation.
 * @returns {string} Secure UUID v4 string
 */
function secureUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = crypto.getRandomValues(new Uint8Array(1))[0] % 16;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Generates a UUID v4 string with a custom prefix.
 * @param {string} [prefix=''] Custom prefix (optional)
 * @returns {string} UUID v4 string with custom prefix
 */
function customPrefixUUID(prefix = "") {
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
  return `${prefix}${uuid}`;
}

/**
 * Generates a short UUID string (xxxxxxxxxx) using base 36 encoding.
 * @returns {string} Short UUID string
 */
function shortUUID() {
  return "xxxxxxxxxx".replace(/[x]/g, (c) => {
    const r = (Math.random() * 36) | 0;
    return r.toString(36);
  });
}

/**
 * Generates a UUID string that includes the current timestamp (Date.now()) followed by a random part.
 * @returns {string} Timestamp-based UUID string
 */
function timestampUUID() {
  const timestamp = Date.now().toString(16);
  const randomPart = "xxxxxxxx".replace(/[x]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return r.toString(16);
  });
  return `${timestamp}-${randomPart}`;
}

export {
  uuidv4,
  simpleUUID,
  secureUUID,
  customPrefixUUID,
  shortUUID,
  timestampUUID,
};
