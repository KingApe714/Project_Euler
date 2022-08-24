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

const fiveSort = (nums) => {
    // todo
    //i notice that the very last element got swapped with the first five that I saw
    //which tells me that I should loop forward through the array and have a j indexer
    //that decriments every time we see a 5
    //and then of course we can swap using array destructiuring
  //   let j = nums.length - 1; //there may be an edge case that I have to look out for
  //   while (nums[j] === 5) {
  //     j--;
  //   }
  //   for (let i = 0; i < j; i++) { //we want to be sure i and j never collide
  //     let ele = nums[i];
  //     if (ele === 5) {
  //       [nums[i], nums[j]] = [nums[j], nums[i]];
  //       while (nums[j] === 5) {
  //         j--;
  //       }
  //     }
  //   }
    
  //   return nums
    
    let j = nums.length - 1;
    let i = 0;
    while (i <= j) {
        if (nums[j] === 5) {
            j--;
        } else if (nums[i] === 5) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        } else {
            i++;
        }
    }

    return nums
};

const linkedListValues = (head) => {
    let arr = [];
    
    let current = head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    
    return arr;
};

const sumList = (head) => {
    let sum = 0;
    let current = head;
    while (current) {
        sum += current.val;
        current = current.next;
    }

    return sum;
};

const linkedListFind = (head, target) => {
  
    let current = head;
    while (current) {
        if (current.val === target) return true;
        current = current.next
    }

    return false;
};