var maxProfit = function(prices) {
    let max = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min)
    }
    
    return max
};

var lengthOfLongestSubstring = function(s) {
    let result = 0;
    let current = "";
    let longest = "";
    
    // abcdaeskdnvknsdk
    
    for (let i = 0; i < s.length; i++) {
        let hasChar = current.includes(s[i])
        if (hasChar) {
            let pos = current.indexOf(s[i])
            current = current.slice(pos + 1);
        }
        current += s[i];
        result = Math.max(current.length, result)
    }
    
    
    return result
};