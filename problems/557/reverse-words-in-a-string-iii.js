/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function(s) {
//     let arrStr = s.split(" ");
    
//     const output = arrStr.map((ele) => {
//         return ele.split("").reverse().join("")
//     }).join(" ")

//     return output
// };

// Method 2
var reverseWords = function(s) {
    let output = "";
    let arrStr = s.split(" ");
    for(let str of arrStr) {
        output += str.split("").reverse().join("") + " "
    }
    return output.trim()
};



