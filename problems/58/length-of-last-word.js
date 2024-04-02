/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    arr = s.trim().split(" ")
    return arr[arr.length - 1].length
};