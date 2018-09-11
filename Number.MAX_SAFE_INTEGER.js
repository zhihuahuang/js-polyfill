/**
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
 */
if (!Number.MAX_SAFE_INTEGER) {
    Number.MAX_SAFE_INTEGER = Math.pow(2, 53) - 1; // 9007199254740991
}