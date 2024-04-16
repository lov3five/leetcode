var TimeLimitedCache = function () {
    this.cache = {}
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let found = this.cache[key]
    if (found) {
        clearTimeout(this.cache[key].timer)
        this.cache[key].value = value
        this.cache[key].timer = setTimeout(() => delete this.cache[key], duration)
        return true
    }
    else {
        this.cache[key] = {
            value: value,
            timer: setTimeout(() => delete this.cache[key], duration)
        }
        return false
    }
};

/** 
 * @param {number} key
// //  * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    return this.cache[key] ? this.cache[key].value : -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return Object.keys(this.cache).length
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
