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

var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while(right > left) {
          maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea
};

var addTwoNumbers = function(l1, l2) {
    //we need to also return the sum in a reversed linkedList
    let carry = 0; //this will check to see if I need to carry into the next digit
    
    let current1 = l1;
    let current2 = l2;
    let newList = new ListNode(0, null);
    let currentSum = newList
    while(current1 || current2 || carry) {
        let num1 = current1 ? current1.val : 0;
        let num2 = current2 ? current2.val : 0;
        let sum = num1 + num2 + carry;
        if (carry) carry = 0;
        if (sum > 9) {
            carry = 1
            sum = sum - 10;
        }
        if (current1) current1 = current1.next;
        if (current2) current2 = current2.next;
        console.log(sum)
        currentSum.val = sum;
        if (current1 || current2 || carry) {
            currentSum.next = new ListNode(0, null)
            currentSum = currentSum.next;
        }
    }
    console.log(newList)
    
    return newList;
};

var subsets = function(nums) {
    let subs = [];
    let queue = [[], [nums[0]]];
    for (let i = 1; i < nums.length; i++) {
        let tempSubs = [];
        let ele = nums[i];
        console.log(queue)
        for (let j = 0; j < queue.length; j++) {
            tempSubs.push(queue[j])
            tempSubs.push(queue[j].concat([nums[i]]))
        }
        queue = tempSubs;
    }
    return queue
};