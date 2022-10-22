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