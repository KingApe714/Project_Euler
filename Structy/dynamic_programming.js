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