/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    numberToStr = x.toString()
    let nums = ""
    if (numberToStr[0] === "-") {
        numberToStr = numberToStr.slice(0,)
        let arrRev = numberToStr.split("").reverse()
        for (n in arrRev) {
            nums += arrRev[n]
        }
        nums = "-" + nums.slice(0,-1)
    }
    else {
        let arrRev = numberToStr.split("").reverse()
        for (n in arrRev) {
            nums += arrRev[n]
        }
    }
    nums = Number(nums)
    if(nums > 2**31-1 || nums < -(2**31)) return 0
    return Number(nums)
};