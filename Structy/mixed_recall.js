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