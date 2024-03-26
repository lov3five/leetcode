/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let accum = init === undefined ? nums[0] : init
    for (let i = 0; i < nums.length; i++) {
        accum = fn(accum, nums[i], i, nums)
    }
    return accum
};