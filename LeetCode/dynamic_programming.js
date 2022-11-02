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

const uniquePaths = (m, n, memo = {}) => {
    const pos = `${m},${n}`;
    if (pos in memo) return memo[pos];
    if (m === 0 || n ===0) return 0;
    if (m === 1 && n === 1) return 1;
    
    const path1 = uniquePaths(m - 1, n, memo);
    const path2 = uniquePaths(m, n - 1, memo);
    const count = path1 + path2;
    
    memo[pos] = count;
    
    return memo[pos];
};

const stoneGame = piles => {
    const scoreToBeat = Math.floor(piles.reduce((acc, ele) => acc + ele, 0) / 2);
    
    const dp = (aliceScore, i, j, memo = {}) => {
        const pos = `${i},${j}`;
        if (pos in memo) return memo[pos];
        if (aliceScore > scoreToBeat) return true;
        if (i === j) return aliceScore > scoreToBeat;

        const attempt1 = dp(aliceScore + piles[i], i + 1, j, memo);
        const attempt2 = dp(aliceScore + piles[j], i, j - 1, memo);

        memo[pos] = attempt1 || attempt2;

        return memo[pos];
    }
    
    return dp(0, 0, piles.length - 1)
};

const numSquares = n => {
    const dp = [0];
    
    for (let i = 1; i <= n; i++) {
        dp[i] = Number.MAX_VALUE;
        for (let j = 1; j*j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i-j*j]+1);
        }
    }
    
    return dp[n]
};

const isInterleave = (s1, s2, s3, i = 0, j = 0, k = 0, memo = {}) => {
    const key = `${i},${j}`
    
    if (key in memo) return memo[key];
    if (s1.length + s2.length !== s3.length) return false;
    if (k >= s3.length) return true;
    
    let res1 = false
    let res2 = false
    
    if (s1[i] === s3[k]) {
        res1 = isInterleave(s1, s2, s3, i + 1, j, k + 1, memo);
    }
    if (s2[j] === s3[k]) {
        res2 = isInterleave(s1, s2, s3, i, j + 1, k + 1, memo);
    }
    
    memo[key] = res1 || res2;
    
    return memo[key];
};