/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cacheMemory = {}
    return function (...args) {
        const key = JSON.stringify(args)
        if(key in cacheMemory) {
            return cacheMemory[key]
        }
        const result = fn(...args)
        cacheMemory[key] = result
        return result
    }
}
/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */