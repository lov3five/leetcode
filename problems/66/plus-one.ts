/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    return String(BigInt(digits.join('')) + BigInt(1)).split('')
    
};