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

const binarySearchTreeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  if (target < root.val) {
    return binarySearchTreeIncludes(root.left, target);
  } else {
    return binarySearchTreeIncludes(root.right, target);
  }
};

const combineIntervals = (intervals) => {
  // todo
  intervals.sort((a, b) => a[0] - b[0]);
  let arr = [];
  let current = intervals[0];
  console.log(intervals)
  for (let i = 1; i < intervals.length; i++) {
    let [a, b] = current;
    let [c, d] = intervals[i];
    if (b >= c) {
      if (!(b >= d)) {
        current = [a, d];
      }
    } else {
      arr.push(current);
      current = [c, d];
    }
  }
  
  if (!arr.includes(current)) arr.push(current);
       
  return arr;
};

const stringSearch = (grid, s) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (dfs(grid, s, i, j)) return true;
    }
  }
  
  return false;
};

const dfs = (grid, s, i, j) => {
  if (s.length === 0) return true;
  
  let rowInbounds = i >= 0 && i < grid.length;
  let colInbounds = j >= 0 && j < grid[0].length;
  
  if (!rowInbounds || !colInbounds) return false;
  let chr = grid[i][j];
  if (s[0] !== chr) return false;
  
  grid[i][j] = '*'
  let res = dfs(grid, s.slice(1), i + 1, j) ||
            dfs(grid, s.slice(1), i - 1, j) ||
            dfs(grid, s.slice(1), i, j + 1) ||
            dfs(grid, s.slice(1), i, j - 1);
  grid[i][j] = chr;
  
  return res;
}

const lexicalOrder = (word1, word2, alphabet) => {
  let max = Math.max(word1.length, word2.length);

  for (let i = 0; i < max; i++) {
    let chr1 = word1[i];
    let chr2 = word2[i];
    let idx1 = alphabet.indexOf(chr1);
    let idx2 = alphabet.indexOf(chr2);
    
    if (idx1 < idx2) {
      return true;
    } else if (idx1 > idx2) {
      return false;
    }
  }
  
  return true;
};

const flipTree = (root) => {
  if (!root) return null;
  
  const rightTree = flipTree(root.right);
  const leftTree = flipTree(root.left);
  
  root.right = leftTree;
  root.left = rightTree;
  
  return root;
};

const lowestCommonAncestor = (root, val1, val2) => {
  const set2 = new Set(path(root, val2));
  
  for (let val of path(root, val1)) {
    if (set2.has(val)) return val;
  }
};

const path = (root, val) => {
  if (!root) return null;
  if (root.val === val) return [ val ];
  
  const leftPath = path(root.left, val);
  if (leftPath) {
    return [...leftPath, root.val];
  }
  
  const rightPath = path(root.right, val);
  if (rightPath) {
    return [...rightPath, root.val];
  }
  
  return null;
}

const detectDictionary = (dictionary, alphabet) => {
  for (let i = 0; i < dictionary.length - 1; i++) {
    let word1 = dictionary[i];
    let word2 = dictionary[i + 1];
    
    if (!isLexical(word1, word2, dictionary, alphabet)) {
      return false;
    }
  }
  
  return true;
};

const isLexical = (word1, word2, dictionary, alphabet) => {
  let length = Math.max(word1.length, word2.length);
  const alpha = {};
  
  for (let i = 0; i < alphabet.length; i++) {
    alpha[alphabet[i]] = i;
  }
  
  for (let i = 0; i < length; i++) {
    let chr1 = word1[i];
    let chr2 = word2[i];
    let idx1 = alpha[chr1] ? alpha[chr1] : -1;
    let idx2 = alpha[chr2] ? alpha[chr2] : -1;
    
    if (idx1 < idx2) return true;
    if (idx1 > idx2) return false;
  }
  
  return true;
}

const leftyNodes = (root) => {
  const values = [];
  traverse(root, 0, values);
  return values;
};

const traverse = (root, level, values) => {
  if (!root) return;
  
  if (values.length === level) values.push(root.val);
  
  traverse(root.left, level + 1, values);
  traverse(root.right, level + 1, values);
}