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