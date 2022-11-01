const minChange = (amount, coins, memo={}) => {
    if (amount === 0) return 0;
    if (amount < 0) return -1
    if (amount in memo) return memo[amount];
    
    let min = Infinity;
    
    for (let coin of coins) {
        let res = minChange(amount - coin, coins, memo);
        if (res !== -1) min = Math.floor(res, min);
    }

    memo[amount] = min === Infinity ? -1 : min + 1;

    return memo[amount];
};

const countPaths = (grid, i=0, j=0, memo={}) => {
    if (`${i},${j}` in memo) return memo[`${i},${j}`];
    if (i === grid.length) return 0;
    if (j === grid[0].length) return 0;
    if (grid[i][j] === 'X') return 0;
    if (i === grid.length - 1 && j === grid[0].length - 1) return 1;
    
    let count = 0;
    
    count += countPaths(grid, i + 1, j, memo);
    count += countPaths(grid, i, j + 1, memo);
    
    memo[`${i},${j}`] = count;
    
    return count;
  };

  const maxPathSum = (grid, i = 0, j = 0, memo = {}) => {
    const pos = `${i},${j}`;
    if (pos in memo) return memo[pos];
    if (i === grid.length) return 0;
    if (j === grid[0].length) return 0;
    if (i === grid.length - 1 && j === grid[0].length - 1) return grid[i][j];
    
    let path1 = grid[i][j] + maxPathSum(grid, i + 1, j, memo);
    let path2 = grid[i][j] + maxPathSum(grid, i, j + 1, memo);
    let max = Math.max(path1, path2);
    
    memo[pos] = max;
    
    return max;
  };

  const summingSquares = (n, memo={}) => {
    if (n === 0) return 0;
    if (n in memo) return memo[n];
    
    let min = Infinity;
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
      let square = i ** 2
      let res = Infinity;
      if (n - square < 0) break
      
      res = summingSquares(n - square, memo);
      min = Math.min(min, res);
    }
    
    memo[n] = 1 + min;
    return 1 + min;
  };

  const arrayStepper = (nums, idx = 0, memo = {}) => {
    if (idx in memo) return memo[idx];
    if (idx >= nums.length - 1) return true;
    
    let ele = nums[idx];
    
    while (ele > 0) {
      if (arrayStepper(nums, idx + ele, memo)) {
        memo[idx] = true;
        return true;
      }
      ele--;
    }
    
    memo[idx] = false;
    
    return memo[idx]
  };