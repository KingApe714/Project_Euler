const isUgly = n => {
    const nums = [2, 3, 5];
    let i = 0;
    
    while (n >= 1 && i < 3) {
        if (n % nums[i] === 0) n /= nums[i];
        else i++;
    }
    
    return n === 1
};