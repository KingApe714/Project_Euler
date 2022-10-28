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

const validPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;
    
    while (i < j) {
        if (s[i] === s[j]) {
            i++;
            j--;
        } else {
            return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
        }
    }
    
    return true;
};

const isPalindrome = (s, i, j) => {
    while (i < j) {
        if (s[i] !== s[j]) {
            return false
        }
        i++;
        j--;
    }
    return true;
}

const moveZeroes = nums => {
    let l = 0;
    
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== 0) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++
        }
    }
};

const rotate = (nums, k) => {
    //I can reverse the entire array, then re-reverse the array from the position of k
    k %= nums.length;
    
    let l = 0, r = nums.length - 1;
    reverse(nums, l, r)
    
    l = 0;
    r = k - 1;
    reverse(nums, l, r)
    
    l = k;
    r = nums.length - 1
    reverse(nums, l, r)
};

const reverse = (arr, i, j) => {
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
}

const removeDuplicates = nums => {
    let l = 0;
    
    while (nums[l] !== nums[l + 1]) {
        l++;
    }
    let r = l + 1;
    
    while (r < nums.length) {
        if (nums[r] !== nums[r + 1]) {
            swap(nums, l, r)
            l++;
        }
        
        r++;
    }
    
    return l
};

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];