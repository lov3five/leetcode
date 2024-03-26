/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    const mapArr = []
    for (let i = 0; i < arr.length; i++) {
        mapArr.push(fn(arr[i], i, arr))
    }
    return mapArr
};