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

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var response;
       nums.forEach((singNum, index)=>{
             for(j = index+1; j < nums.length; j++){
                if (nums[index] + nums[j] == target){
                    response = [index, j];
                }
            }
    })
   return response;
    //2 numbers index
};