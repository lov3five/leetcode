/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let maxDepth = 0, depth = 0
    for(let i = 0; i < s.length; i++) {
        if(s[i] == "(") {
            depth++
        } 
        if(s[i] == ")") {
            depth--
        }
        if(depth > maxDepth) {
            maxDepth = depth
        }
    }
    return maxDepth
};

fjitit