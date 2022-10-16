var isPalindrome = function(s) {
    if (s.length === 0 || s.length === 1) return true;
    
    let i = 0;
    let j = s.length - 1;
    
    while (s[i] && !'abcdefghijklmnopqrstuvwxyz0123456789'.includes(s[i].toLowerCase())) i++;
    while (s[j] && !'abcdefghijklmnopqrstuvwxyz0123456789'.includes(s[j].toLowerCase())) j--;
    
    if (i >= j) return true;
    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
    
    return isPalindrome(s.slice(i + 1, j))
};