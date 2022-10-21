var isPalindrome = function(s) {
    if (s.length === 0 || s.length === 1) return true;
    
    let i = 0;
    let j = s.length - 1;
    
    while (s[i] && !'abcdefghijklmnopqrstuvwxyz0123456789'.includes(s[i].toLowerCase())) i++;
    while (s[j] && !'abcdefghijklmnopqrstuvwxyz0123456789'.includes(s[j].toLowerCase())) j--;
    
    if (i >= j) return true;
    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
    
    return isPalindrome(s.slice(i + 1, j))
};

var minimumDifference = function(nums, k) {
    nums.sort((a, b) => a - b);
    console.log(nums)
    let i = 0;
    let j = k - 1;
    let min = Infinity;
    if (nums.length <= 1 || k > nums.length) {
        return 0;
    }
    while (j < nums.length) {
        if (nums[j] - nums[i] < min) {
            min = nums[j] - nums[i];
        }
        i++;
        j++;
    }
    return min;
};

var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;
    
    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]]
        i++;
        j--;
    }
    
    return s;
};

const maxArea = height => {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while(right > left) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return max
};