const pairedParentheses = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === '(') {
            count++;
        } else if (char === ')') {
            if (count === 0) {
            return false;
            }
            count--;
        }
    }
    
    return count === 0;
};

const befittingBrackets = str => {
    const stack = [];
    const obj = {
      '{': '}',
      '[': ']',
      '(': ')'
    };
    
    for (let char of str) {
      if (char in obj) {
        stack.push(obj[char]);
      } else {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
          stack.pop()
        } else {
          return false;
        }
      }
    }
    
    return stack.length === 0;
};