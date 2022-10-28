const climbStairs = (n, memo={}) => {
    if (n === 0) return 1;
    if (n === -1) return 0;
    if (n in memo) return memo[n]
    
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    
    return memo[n];
};