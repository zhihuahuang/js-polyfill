if (!String.prototype.trimEnd) {
    String.prototype.trimEnd = function () {
        return this.replace(/[\s\uFEFF\xA0]+$/g, '');
    };
}