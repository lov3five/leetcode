function isValid(s: string): boolean {

    let mapBracket = {
        '(':')',
        '{':'}',
        '[':']'
    }

    let stack = []

    for(let bracket of s){
        if(mapBracket[bracket]){
            stack.push(bracket)
        } else if(mapBracket[stack.pop()] !== bracket) {
            return false
        }
    }

    return stack.length == 0
};

