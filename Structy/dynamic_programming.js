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

  const maxPalinSubsequence = (str, i = 0, j = str.length - 1, memo = {}) => {
    let pos = `${i},${j}`;
    if (pos in memo) return memo[pos];
    if (i === j) return 1;
    if (i > j) return 0;
    
    let count = 0;
    
    if (str[i] === str[j]) {
      count += 2 + maxPalinSubsequence(str, i + 1, j - 1, memo)
    } else {
      let left = maxPalinSubsequence(str, i + 1, j, memo);
      let right = maxPalinSubsequence(str, i, j - 1, memo);
      count += Math.max(left, right);
    }
    
    memo[pos] = count;
    
    return count;
  };

  const overlapSubsequence = (str1, str2, i = 0, j = 0, memo = {}) => {
    const key = `${i},${j}`;
    if (key in memo) return memo[key];
    if (i === str1.length || j === str2.length) return 0;
    
    if (str1[i] === str2[j]) {
      memo[key] = 1 + overlapSubsequence(str1, str2, i + 1, j + 1, memo);
    } else {
      memo[key] = Math.max(
        overlapSubsequence(str1, str2, i + 1, j, memo),
        overlapSubsequence(str1, str2, i, j + 1, memo)
      )
    }
    
    return memo[key]
  }

  const nonAdjacentSum = (nums, i = 0, memo = {}) => {
    if (i in memo) return memo[i];
    if (i >= nums.length) return 0;
    
    let include = nums[i] + nonAdjacentSum(nums, i + 2, memo);
    let exclude = nonAdjacentSum(nums, i + 1, memo);
    
    memo[i] = Math.max(include, exclude);
    
    return memo[i];
  };

  const countingChange = (amount, coins, i = 0, memo = {}) => {
    const key = `${i},${amount}`
    
    if (key in memo) return memo[key];
    if (amount === 0) return 1;
    
    let total = 0;
    
    for (let qty = 0; coins[i] * qty <= amount; qty += 1) {
      let rem = amount  - (qty * coins[i]);
      //because I amm looking at different amounts and indices I should be 
      //creating amout and index keys in my memo
      total += countingChange(rem, coins, i + 1, memo);
    }
    
    memo[key] =  total;
    
    return memo[key];
  };