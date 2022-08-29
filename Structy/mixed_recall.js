const binarySearch = (numbers, target) => {
    if (numbers.length === 0) return -1;
    
    let mid = Math.floor(numbers.length / 2);
    let left = numbers.slice(0, mid);
    let right = numbers.slice(mid + 1);
    if (target === numbers[mid]) {
      return mid;
    } else if (target < numbers[mid]) {
      return binarySearch(left, target);
    } else {
      let res = binarySearch(right, target);
      return res === -1 ? -1 : res + mid + 1;
    }
  };