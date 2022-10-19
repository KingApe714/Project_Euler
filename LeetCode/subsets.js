const subsets = function(nums) {
    if (nums.length === 0) return [ [] ];
    const n = nums[0]
    const arr = subsets(nums.slice(1));
    const newArr = [];
    for (let inner of arr) {
        newArr.push([n, ...inner])
    }
    return [...arr, ...newArr]
};