/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const laMa1 = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    const laMa2 = {
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    }

    const checkIsLaMa2 = (s) => {
        const lm2 = ["IV", "IX", "XL", "XC", "CD", "CM"]
        if(lm2.includes(s)) {
            return true
        }
        return false
    }

    let num = 0
    for(let i = 0; i < s.length; i++) {
        if(i+1 < s.length && checkIsLaMa2(s.substring(i, i+2))){
            num += laMa2[s.substring(i, i+2)]
            i+=1
        } else {
            num += laMa1[s[i]]
        }
    }
    return num
};