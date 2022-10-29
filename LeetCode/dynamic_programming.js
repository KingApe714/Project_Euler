const climbStairs = (n, memo={}) => {
    if (n === 0) return 1;
    if (n === -1) return 0;
    if (n in memo) return memo[n]
    
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    
    return memo[n];
};

const coinChange = (coins, amount, memo={}) => {
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    if (amount in memo) return memo[amount]
    
    
    
    let min = Infinity;
    for (let coin of coins) {
        let res = coinChange(coins, amount - coin, memo)
        
        if (res !== -1) min = Math.min(min, res);
    }
    
    memo[amount] = min === Infinity ? -1 : 1 + min;
    
    return memo[amount];
};