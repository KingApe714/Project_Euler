const uncompress = (s) => {
    // todo
    let str = '';
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < s.length; i++) {
        let num = '';
        let chr = s[i];
        while (!alpha.includes(chr)) {
            num += chr;
            i++;
            chr = s[i];
        }
        num = parseInt(num); //turn it back into an integer;
        for (let j = 0; j < num; j++) {
            str += chr;
        }
    }
    
    return str;
};

const compress = (s) => {
    // todo
    let str = '';
    for (let i = 0; i < s.length; i++) {
        let count = 1;
        let chr = s[i];
        while (s[i] === s[i + 1]) {
        count++;
        i++;
        }
        if (count > 1) {
        str += count + chr;
        } else {
        str += chr;
        }
    }

    return str;
};

const anagrams = (s1, s2) => {
    // todo
    if (s1.length !== s2.length) return false;
    let obj = {};
    for (let i = 0; i < s1.length; i++) {
        let chr1 = s1[i];
        if (!(chr1 in obj)) {
        obj[chr1] = 0;
        }
        obj[chr1]++;
        
        let chr2 = s2[i];
        if (!(chr2 in obj)) {
        obj[chr2] = 0;
        }
        obj[chr2]--;
    }

    for (let chr in obj) {
        if (obj[chr] !== 0) return false;
    }

    return true;
};

const mostFrequentChar = (s) => {
    // todo
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in obj)) {
        obj[s[i]] = 0;
        }
        obj[s[i]]++;
    }
    let max = 0
    let maxChar = '';
    for (let key in obj) {
        if (max < obj[key]) {
        max = obj[key]
        maxChar = key;
        }
    }

    return maxChar;
};

const pairSum = (numbers, targetSum) => {
    let obj = {};
    for (let i = 0; i < numbers.length; i++) {
        num = numbers[i]
        let checkNum = targetSum - num;
        if (checkNum in obj) {
        return [obj[checkNum], i]
        }
        
        if (!(num in obj)) obj[num] = i;
        
    }
};

const pairProduct = (numbers, targetProduct) => {
    // todo
    let obj = {};
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        let checkNum = targetProduct / num;
        if (checkNum in obj) return [obj[checkNum], i];
        if (!(num in obj)) obj[num] = i;
    }
};

const intersection = (a, b) => {
    // todo
    let arr = [];
    // for (let i = 0; i < a.length; i++) {
    //   let num1 = a[i];
    //   if (b.includes(num1)) arr.push(num1)
    // } this solution is too slow
    // a.sort((a, b) => a - b)
    // b.sort((a, b) => a - b)
    // let i = 0;
    // let j = 0;
    // console.log(a)
    // while (i < a.length && j < b.length) {
    //   // console.log(j)
    //   if (a[i] === b[j]) {
    //     arr.push(a[i]);
    //     i++;
    //     j++;
    //   } else if (a[i] < b[j]) {
    //     i++;
    //   } else {
    //     j++
    //   }
    // } //this is an O(nlon(n) + mlog(m)) solution
    let setA = new Set(a) //just passing in the array automatically makes the set for you
    for (let ele of b) {
        if (setA.has(ele)) {
        arr.push(ele)
        }
    } //this is an O(n + m) solution

    return arr;
};