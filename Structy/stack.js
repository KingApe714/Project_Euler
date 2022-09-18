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