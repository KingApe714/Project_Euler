const isUgly = n => {
    const nums = [2, 3, 5];
    let i = 0;
    
    while (n >= 1 && i < 3) {
        if (n % nums[i] === 0) n /= nums[i];
        else i++;
    }
    
    return n === 1
};

const isPalindrome = x => {
    if (x < 0) return false;
    let i = 10 ** Math.floor(Math.log10(x));
    let j = 1;
    
    while (i >= 10 ** j) {
        let left = Math.floor(x / i) % 10;
        i /= 10;
        let right = Math.floor(x % (10 ** j) / (10 ** (j - 1)))
        j++;
        
        if (left !== right) return false
    }
    
    return true;
};

const isHappy = n => {
    let num = n;
    let nextNum = 0;
    let set = new Set()
    while (true) {
        
        while (num >= 1) {
            nextNum += (num % 10) ** 2;
            num = Math.floor(num / 10)
        }
        
        if (set.has(nextNum)) return false;
        
        set.add(nextNum)
        
        if (nextNum === 1) return true;
        
        num = nextNum
        nextNum = 0;
    }
    
    return false;
};

const spiralOrder = matrix => {
    let res = [];
    let startRow = 0;
    let endRow = matrix.length - 1;
    let startCol = 0;
    let endCol = matrix[0].length - 1;
    
    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            res.push(matrix[startRow][col]);
        }
        
        for (let row = startRow + 1; row <= endRow; row++) {
            res.push(matrix[row][endCol]);
        }
        
        for (let col = endCol - 1; col >= startCol; col--) {
            if (startRow === endRow) break;
            res.push(matrix[endRow][col])
        }
        for (let row = endRow - 1; row > startRow; row--) {
            if (startCol === endCol) break;
            res.push(matrix[row][startCol]);
        }
        
        startRow++;
        startCol++;
        endRow--;
        endCol--;
    }
    
    return res;
};

const myPow = (x, n) => {
    if (n === 0) return 1
    
    let pow = Math.abs(n);
    let res
    
    if (n % 2 === 0) {
        res = myPow(x * x, pow / 2);
    } else {
        res = x * myPow(x * x, (pow - 1) / 2);
    }
    
    return n > 0 ? res : 1 / res
};

const intToRoman = num => {
    let numerals = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ]
    
    let roman = '';
    
    numerals.forEach(n => {
        let [letter, val] = n;
        //I know that I need to concatinate the letter
        while (num / val >= 1) {
            roman += letter;
            num -= val;
        }
    })
    
    return roman;
};