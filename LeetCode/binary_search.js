const search = (nums, target) => {
    if (nums.length === 0 ) return -1
    let mid = Math.floor(nums.length / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid + 1);
    
    if (nums[mid] === target) {
        return mid
    } else if (target < nums[mid]) {
        return search(left, target)
    } else {
        let idx = search(right, target)
        return idx === -1 ? -1 : mid + idx + 1;
    }
};

const searchInsert = (nums, target) => {
    if (nums.length === 0) return 0;
    
    let mid = Math.floor(nums.length / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid + 1);
    
    if (target === nums[mid]) {
        return mid;
    } else if (target < nums[mid]) {
        return searchInsert(left, target);
    } else {
        let res = searchInsert(right, target);
        return res + mid + 1;
    }
};

const guessNumber = n => {
    const find = (low, high) => {
        let mid = Math.floor((high + low) / 2);
        if (guess(mid) === 0) return mid;
        if (guess(mid) === 1) return find(mid + 1, n);
        if (guess(mid) === -1) return find(low, mid - 1);
    }
    return find(0, n, 5);
};

const sortedSquares = nums => {
    let i = 0;
    let j = nums.length - 1;
    let arr = [];
    
    while (i <= j) {
        let first = nums[i] ** 2;
        let last = nums[j] ** 2;
        if (first > last) {
            arr.push(first);
            i++;
        } else {
            arr.push(last);
            j--;
        }
    }
    
    return arr.reverse();
};