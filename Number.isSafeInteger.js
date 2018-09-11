/**
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
 */
require('./Number.MAX_SAFE_INTEGER');
require('./Number.isInteger');

if (Number.isSafeInteger) {
    Number.isSafeInteger = function (value) {
        return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
    };
}