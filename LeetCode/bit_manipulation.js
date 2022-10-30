const reverse = x => {
    let negCheck = 1
    if(x < 0){
        negCheck = -1
        x *= -1
    }
    const b = x.toString().split('').reverse()
    const back = parseInt(b.join('')) * negCheck
    if (back > Math.pow(-2,31) && back < Math.pow(2,31) - 1){
        return back
    } else {
        return 0
    }
};

//minimum of -2,147,483,648 and a maximum value of 2,147,483,647 (inclusive)

const reverse1 = x => {
    let res = 0;
    let negCheck = 1
    if (x < 0) {
        x *= -1
        negCheck = -1
    }
    
    let place = 10 ** Math.floor(Math.log10(x))
    
    while (x >= 1) {
        let digit = x % 10;
        x = Math.floor(x / 10);
        
        res += place * digit
        
        if (res > 2147483647) return 0;
        
        place /= 10;
    }
    
    return res * negCheck;
};

const addBinary = (a, b) => {
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    let res = '';
    
    while (i >= 0 || j >= 0 || carry) {
        let d1 = a[i] ? parseInt(a[i]) : 0
        let d2 = b[j] ? parseInt(b[j]) : 0
        let sum = d1 + d2 + carry;
        
        switch (sum) {
            case 3:
                res = 1 + res;
                carry = 1;
                break;
            case 2:
                res = 0 + res;
                carry = 1;
                break;
            case 1:
                res = 1 + res;
                carry = 0;
                break
            case 0:
                res = 0 + res;
                carry = 0;
                break
        }
        i--;
        j--;
    }
    
    return res;
};

//solved with gauases formula
const missingNumber = nums => {
    let sum = nums.reduce((acc, ele) => acc + ele, 0);
    let n = nums.length
    let expected = n * (n + 1) / 2;
    return expected - sum;
};

const romanToInt = s => {
    let obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    let num = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] < obj[s[i + 1]]) {
            num += obj[s[i+ 1]] - obj[s[i]];
            i++;
        } else {
            num += obj[s[i]];
        }
    }
    
    return num;
};

const singleNumber = nums => {
    let res = 0
    
    nums.forEach(num => {
        res = res ^ num;
    })
    
    return res;
};

const getSum = (a, b) => {

    while (b !== 0) {
        const xor = (a ^ b);
        const carry = ((a & b) << 1);
        
        a = xor;
        b = carry
    }
    return a;
};