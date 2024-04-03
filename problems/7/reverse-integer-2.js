/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let numOut
    if(x < 0) {
        numOut = Number(String(x).slice(1).split("").reverse().join("")) * -1;
    } 
    if(x >= 0) {
        numOut = Number(String(x).split("").reverse().join(""))
    }
    if(numOut > Math.pow(2,31) - 1 || numOut < Math.pow(-2,31)) return 0
    return numOut
};