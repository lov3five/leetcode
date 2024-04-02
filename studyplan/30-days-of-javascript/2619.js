/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    return this.length == 0 ? -1 : this.reverse()[0]
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */