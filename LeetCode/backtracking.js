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

var permute = function(nums) {
    if (nums.length === 0) return [ [] ];
    let first = nums[0];
    let rem = permute(nums.slice(1));
    let arr = [];
    for (let perm of rem) {
        for (let i = 0; i <= perm.length; i++) {
            arr.push([...perm.slice(0, i), first, ...perm.slice(i)])
        }
    }
    
    return arr
};