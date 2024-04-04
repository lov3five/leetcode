/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let stack = [""];
    for (let x of s)
        isBad(x, stack.at(-1)) ? stack.pop() : stack.push(x);
    return stack.join("");
}    

const isBad = (a,b) => {
    return (a !== b && a.toLowerCase() === b.toLowerCase()) 
}