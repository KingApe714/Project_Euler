/**
 * @param {string} s
 * @return {number}
 */
//returning a length (or a number)
//holding a longest and a current
//traverse through the string using Math.max(currrent, longest)
var lengthOfLongestSubstring = function(s) {
    let result = 0;
    let current = "";
    let longest = "";
    
    // abcdaeskdnvknsdk
    
    for (let i = 0; i < s.length; i++) {
        let hasChar = current.includes(s[i])
        if (hasChar) {
            let pos = current.indexOf(s[i])
            current = current.slice(pos + 1);
        }
        current += s[i];
        result = Math.max(current.length, result)
    }
    
    
    return result
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var response;
       nums.forEach((singNum, index)=>{
             for(j = index+1; j < nums.length; j++){
                if (nums[index] + nums[j] == target){
                    response = [index, j];
                }
            }
    })
   return response;
    //2 numbers index
};

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    var negCheck = 1
    if(x < 0){
        negCheck = -1
        x *= -1
    }
    var b = x.toString().split('').reverse()
    var back = parseInt(b.join('')) * negCheck
    if (back > Math.pow(-2,31) && back < Math.pow(2,31) - 1){
        return back
    } else {
        return 0
    }
};

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    var pal = x.toString().split('')
    var j = pal.length - 1
    var i = 0
    while( i < j ){
        if (pal[i] != pal[j]){
            return false
        } else {
            i += 1
            j -= 1
        }
    }
    return true
};

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    let merged = [intervals[0]];
	
	for (let i = 1; i < intervals.length; i++) {
		let [int1, int2] = intervals[i];
        let [cur1, cur2] = merged[merged.length - 1];
        if (int1 <= cur2) {
            merged[merged.length - 1] = [cur1, Math.max(int2, cur2)]
        } else {
            merged.push(intervals[i])
        }
	}

	return merged;
};

function getNthFib(n) {
    // Write your code here.
    if (n === 1) return 0
    let fibArray = [0, 1, 1];
    while (fibArray.length < n) {
        let sum = fibArray[fibArray.length - 1] + fibArray[fibArray.length -2]
        fibArray.push(sum)
    }
    return fibArray[fibArray.length - 1]
}
