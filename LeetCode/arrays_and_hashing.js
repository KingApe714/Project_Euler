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

const isIsomorphic = (s, t) => {
    if (s.length !== t.length) return false;
    let obj1 = {};
    let obj2 = {};
    
    for (let i = 0; i < s.length; i++) {
        let chr1 = s[i];
        let chr2 = t[i];
        
        if (!(chr1 in obj1)) {
            obj1[chr1] = chr2;
        }
        if (!(chr2 in obj2)) {
            obj2[chr2] = chr1;
        }
        
        if (obj1[chr1] !== chr2) return false;
        if (obj2[chr2] !== chr1) return false;
    }
    
    return true;
};

const numUniqueEmails = function(emails) {
    let arr = [];
    
    for (let email of emails) {
        let [local, domain] = email.split('@')
        let actualEmail = local.split('.').join('').split('+')[0] + '@' + domain
        console.log(actualEmail)
        if (!arr.includes(actualEmail)) {
            arr.push(actualEmail)
        }
    }
    
    return arr.length;
};

const canPlaceFlowers = (flowerbed, n) => {
    
    for (let i = 0; i < flowerbed.length; i++) {
        let left = flowerbed[i - 1];
        let mid = flowerbed[i];
        let right = flowerbed[i + 1];
        if (!left && !mid && !right) {
            flowerbed[i] = 1
            n--;
        }
    }
    console.log(flowerbed)
    return n <= 0;
};

const majorityElement = function(nums) {
    let obj = {};
    
    for (let num of nums) {
        if (!(num in obj)) obj[num] = 0;
        obj[num]++;
    }
    
    for (let key in obj) {
        if (obj[key] > nums.length / 2) return key;
    }
};

const pivotIndex = nums => {
    
    let totalSum = nums.reduce((acc, ele) => acc + ele, 0);
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (totalSum - sum - nums[i] === sum) {
            return i;
        }
            
        sum += nums[i];
    }
    
    return -1;
};

const merge = (nums1, m, nums2, n) => {
    let i = m - 1;
    let j = n - 1;
    let k = nums1.length - 1;
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            [nums1[k], nums1[i]] = [nums1[i], nums1[k]];
            i--;
        } else {
            [nums1[k], nums2[j]] = [nums2[j], nums1[k]];
            j--;
        }
        k--;
    }
    
    while (j >= 0) {
        [nums1[k], nums2[j]] = [nums2[j], nums1[k]];
        j--;
        k--;
    }
}

const wordPattern = (pattern, s) => {
    let obj = {};
    let words = s.split(' ');
    if (words.length !== pattern.length) return false;
    if (new Set(words).size !== new Set(pattern.split('')).size) return false;
    
    for (let i = 0; i < words.length; i++) {
        let chr = pattern[i];
        let word = words[i];
        if (!(chr in obj)) {
            obj[chr] = word
        } else {
            if (chr in obj && obj[chr] !== word) {
                return false;
            }
        }
    }
    
    return true;
};

const arrayStringsAreEqual = (word1, word2) => {
    return word1.join('') === word2.join('')
};

const largestNumber = nums => {
    //I want to loop through and grab elements as I see them.
    nums.sort((a, b) => {
        let sa = a.toString();
        let sb = b.toString();
        return parseInt(sa + sb) > parseInt(sb + sa) ? -1 : 1
    })
    
    if (nums[0] === 0) return '0';
    
    return nums.join('');
};

const removeElement = (nums, val) => {
    let j = nums.length - 1;
    while (nums[j] === val) {
        nums.pop()
        j--;
    }
    for (let i = 0; i < j; i++) {
        if (nums[i] === val) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            while (nums[j] === val) {
                nums.pop()
                j--;
            }
        }
    }
};

const nextGreaterElement = (nums1, nums2) => {
    let obj = {};
    let ans = [];
    
    for (let i = 0; i < nums2.length; i++) {
        obj[nums2[i]] = i;
    }
    
    for (let i = 0; i < nums1.length; i++) {
        let idx = obj[nums1[i]];
        let num = nums1[i]
        let newNum = -1;
        for (let j = idx + 1; j < nums2.length; j++) {
            if (nums2[j] > num) {
                newNum = nums2[j];
                break;
            }
        }
        ans.push(newNum);
        
    }
    
    return ans;
};

const findDisappearedNumbers = nums => {
    let numsSet = new Set(nums);
    let disappeared = [];
    
    for (let i = 1; i <= nums.length; i++) {
        if (!numsSet.has(i)) disappeared.push(i)
    }
    
    return disappeared;
};

const topKFrequent = (nums, k) => {
    let obj = {};
    let arr = [];
    
    for (let num of nums) {
        if (obj[num]) {
            obj[num]++;
        } else {
            obj[num] = 1
        }
    }
    
    for (let key in obj) {
        arr.push([key, obj[key]]);
    }
    
    return arr.sort((a, b) => b[1] - a[1]).map(ele => {
        return parseInt(ele[0])
    }).slice(0, k)
};

const topKFrequent2 = (nums, k) => {
    let obj = {}
    
    for (let num of nums) {
        if (!(num in obj)) obj[num] = 0
        obj[num]++
    }
    
    //now implement the bucket sort system with the indices referencing the counts and the elements are arrays
    let buckets = new Array(nums.length + 1)
    //now loop through the object and push the nums in their respective indices
    for (let num in obj) {
        let count = obj[num]
        if (!buckets[count]) buckets[count] = [];
        buckets[count].push(parseInt(num))
    }
    //now loop backward through the buckets array and push in k amount of elements
    let arr = [];
    let h = 0;
    for (let i = buckets.length - 1; i >= 0 && h < k; i--) {
        if (buckets[i]) {
            for (let j = 0; j < buckets[i].length && h < k; j++) {
                arr.push(buckets[i][j]);
                h++;
            }
        }
    }
    
    return arr;
};

const frequencySort = s => {
    let obj = {};
    
    for (let chr of s) {
        if (!(chr in obj)) obj[chr] = 0;
        obj[chr]++;
    }
    
    let buckets = new Array(s.length + 1).fill('');
    
    for (let chr in obj) {
        let count = obj[chr];
        let str = '';
        for (let i = 0; i < count; i++) str += chr;
        buckets[count] += str;
    }
    
    return buckets.reverse().join('');
};