/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    const filterArr = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            filterArr.push(arr[i])
        }
    }
    return filterArr
};

const arr = [1,2,3,4,5,6,7,8,9]

const result = filter(arr, (item) => item % 2 === 0)
console.log(result) // [2, 4, 6, 8]