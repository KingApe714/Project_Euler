const isUgly = n => {
    const nums = [2, 3, 5];
    let i = 0;
    
    while (n >= 1 && i < 3) {
        if (n % nums[i] === 0) n /= nums[i];
        else i++;
    }
    
    return n === 1
};

const isPalindrome = x => {
    if (x < 0) return false;
    let i = 10 ** Math.floor(Math.log10(x));
    let j = 1;
    
    while (i >= 10 ** j) {
        let left = Math.floor(x / i) % 10;
        i /= 10;
        let right = Math.floor(x % (10 ** j) / (10 ** (j - 1)))
        j++;
        
        if (left !== right) return false
    }
    
    return true;
};

const isHappy = n => {
    let num = n;
    let nextNum = 0;
    let set = new Set()
    while (true) {
        
        while (num >= 1) {
            nextNum += (num % 10) ** 2;
            num = Math.floor(num / 10)
        }
        
        if (set.has(nextNum)) return false;
        
        set.add(nextNum)
        
        if (nextNum === 1) return true;
        
        num = nextNum
        nextNum = 0;
    }
    
    return false;
};