/**
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
if (!Array.prototype.filter) {
    Array.prototype.filter = function (func, thisArg) {
        if (!((typeof func === 'Function' || typeof func === 'function') && this)) {
            throw new TypeError();
        }

        var len = this.length >>> 0,
            res = new Array(len), // preallocate array
            t = this,
            c = 0,
            i = -1;

        if (thisArg === undefined) {
            while (++i !== len) {
                // checks to see if the key was set
                if (i in t) {
                    if (func(t[i], i, t)) {
                        res[c++] = t[i];
                    }
                }
            }
        }
        else {
            while (++i !== len) {
                // checks to see if the key was set
                if (i in t) {
                    if (func.call(thisArg, t[i], i, t)) {
                        res[c++] = t[i];
                    }
                }
            }
        }

        res.length = c; // shrink down array to proper size
        return res;
    };
}