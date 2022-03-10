/**
 * @param {string} s
 * @return {number}
 */
//returning a length (or a number)
//holding a longest and a current
//traverse through the string using Math.max(currrent, longest)
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