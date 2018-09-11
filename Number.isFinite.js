/**
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
 */
if (!Number.isFinite) {
    Number.isFinite = function(value) {
        return typeof value === 'number' && isFinite(value);
    };
}