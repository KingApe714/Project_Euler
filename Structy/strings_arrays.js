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