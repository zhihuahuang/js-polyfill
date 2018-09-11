/**
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 */
if (!Array.of) {
    Array.of = function () {
        return Array.prototype.slice.call(arguments);
    };
}