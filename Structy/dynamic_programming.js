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