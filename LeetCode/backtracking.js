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

const stringSearch = (grid, s) => {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (dfs(grid, s, i, j)) return true;
      }
    }
    
    return false;
  };
  
  const dfs = (grid, s, i, j) => {
    if (s.length === 0) return true;
    
    let rowInbounds = i >= 0 && i < grid.length;
    let colInbounds = j >= 0 && j < grid[0].length;
    
    if (!rowInbounds || !colInbounds) return false;
    let chr = grid[i][j];
    if (s[0] !== chr) return false;
    
    grid[i][j] = '*'
    let res = dfs(grid, s.slice(1), i + 1, j) ||
              dfs(grid, s.slice(1), i - 1, j) ||
              dfs(grid, s.slice(1), i, j + 1) ||
              dfs(grid, s.slice(1), i, j - 1);
    grid[i][j] = chr;
    
    return res;
}