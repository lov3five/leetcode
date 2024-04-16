/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let bin = convertInt2Bin(n);
    let count = 0;
    for(let bit of bin) {
        if (bit == 1) {
            count++
        }
    }
    return count;
};

const convertInt2Bin = (number) => {
    if(number == 0) return '0';
    let bin = '';
    let temp = number;
    while(temp > 0) {
        bin = (temp % 2) + bin;
        temp = Math.floor(temp / 2);
    }
    return bin
}