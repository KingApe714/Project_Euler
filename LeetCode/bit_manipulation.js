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