/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return "";
    let output = "";
    strs.sort();
    let firstStr = strs[0];
    let lastStr = strs[strs.length - 1];
    for(let i = 0; i < firstStr.length; i++) {
        if(firstStr[i] === lastStr[i]){
            output += firstStr[i]
        } else {
            break;
        }
    }
    return output
};