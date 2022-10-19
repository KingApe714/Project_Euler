var containsDuplicate = function(nums) {
    let obj = {};
    for (let num of nums) {
        if (num in obj) return true;
        obj[num] = true;
    }
    
    return false;
};

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        let chr1 = s[i];
        let chr2 = t[i];
        if (!(chr1 in obj)) obj[chr1] = 0;
        obj[chr1]++;
        if (!(chr2 in obj)) obj[chr2] = 0;
        obj[chr2]--;
    }
    for (let key in obj) {
        if (obj[key] !== 0) return false;
    }
    return true;
};

var replaceElements = function(arr) {
    let current = arr[arr.length - 1]
    let newArr = [-1];
    
    for (let i = arr.length - 2; i >= 0; i--) {
        let left = arr[i];
        while (left < current) {
            newArr.unshift(current);
            i--
            left = arr[i]
        }
        if (i >= 0) newArr.unshift(current)
        current = left
    }
    
    return newArr;
};

var isSubsequence = function(s, t) {
    if (s.length === 0) return true;
    if (t.length === 0) return false;
    return s[0] === t[0] ? isSubsequence(s.slice(1), t.slice(1)) : isSubsequence(s, t.slice(1))
};

var lengthOfLastWord = function(s) {
    let words = s.split(' ');
    // console.log(words)
    
    for (let i = words.length - 1; i >= 0; i--) {
        let word = words[i];
        if (word !== '') return word.length
    }
    
    return 0;
};

var twoSum = function(nums, target) {
    let obj = {};
    
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let currentTarget = target - currentNum;
        
        if (obj[currentTarget] !== undefined) {
            return [obj[currentTarget], i]
        }
        
        obj[currentNum] = i;
    }
};

var longestCommonPrefix = function(strs) {

    if (strs.length === 0){
        return prefix
    } else if (strs.length === 1){
        return strs[0]
    }
    
    let prefix = '';
    let stillPrefix = true;
    let firstWord = strs[0];
    let j = 0;
    if (firstWord.length === 0) return ''
    while (stillPrefix) {
        let char = firstWord[j]
        if (char && strs.every(ele => ele[j] === char)) {
            prefix += char;
            j++;
        } else {
            break;
        }
    }
    
    return prefix;
};

var groupAnagrams = function(strs) {
    let arr = [];
    let obj = {};
    for (let str of strs) {
        let sortedWord = str.split('').sort().join('');
        if (!(sortedWord in obj)) obj[sortedWord] = [];
        obj[sortedWord].push(str);
    }
    console.log(obj)
    return Object.values(obj)
};

var groupAnagrams2 = function(strs) {
    let obj = {};
    
    for (let str of strs) {
        let charCount = new Array(26).fill(0);
        
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            let pos = char.charCodeAt(0) - 'a'.charCodeAt(0);
            charCount[pos]++;
        }
        
        if (!(charCount in obj)) obj[charCount] = [];
        obj[charCount].push(str)
    }
    
    return Object.values(obj);
};

var generate = function(numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1, 1]];

    let arr = generate(numRows - 1);
    let bottom = arr[arr.length - 1];
    let newBottom = [1]

    for (let i = 0; i < bottom.length - 1; i++) {
        let num = bottom[i] + bottom[i + 1];
        newBottom.push(num);
    }

    newBottom.push(1)
    arr.push(newBottom);
    return arr;
};

var isValidSudoku = function(board) {
    let seen = new Set();
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === '.') continue;
            
            let value = board[i][j];
            let row = `row at ${i} has ${value}`
            let col = `col at ${j} has ${value}`
            let box = `box at ${Math.floor(i/3)},${Math.floor(j/3)} has ${value}`
            
            if (seen.has(row) || seen.has(col) || seen.has(box)) {
                return false;
            }
            
            seen.add(row);
            seen.add(col);
            seen.add(box);
        }
    }
    
    return true;
};