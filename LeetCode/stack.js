const isValid = s => {
    let obj = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    
    let stack = [];
    
    for (let char of s) {
        if (char in obj) {
            stack.push(obj[char]);
        } else {
            if (stack.length > 0 && char === stack[stack.length - 1]) {
                stack.pop()
            } else {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};