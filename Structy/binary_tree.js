// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const depthFirstValues = (root) => {
    if (!root) return [];
    let arr = [];
    let stack = [root];
    
    while (stack.length) {
        let current = stack.pop();
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
        arr.push(current.val);
    }

    return arr;
};

const breadthFirstValues = (root) => {
    if (!root) return [];
    
    let queue = [ root ];
    let arr = [];
    
    while (queue.length) {
        let current = queue.shift();
        arr.push(current.val);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return arr;
};

const treeSum = (root) => {
    if  (!root) return 0;
    let sum = 0;
    let queue = [ root ];
    
    while (queue.length) {
        let current = queue.shift()
        sum += current.val;
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return sum;
};

const treeIncludes = (root, target) => {
    let queue = root ? [ root ] : [];
    
    while (queue.length) {
        let current = queue.shift();
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
        if (current.val === target) return true;
    }

    return false;
};

const treeMinValue = (root) => {
    let min = Infinity;
    let queue = [ root ];
    
    while (queue.length) {
        let current = queue.shift();
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
        if (current.val < min) min = current.val;
    }

    return min;
};

const maxPathSum = (root) => {
    if (root === null) return -Infinity;
    if (root.left === null && root.right === null) return root.val;
    let maxPath = Math.max(maxPathSum(root.left), maxPathSum(root.right));
    return root.val + maxPath;
};

const pathFinder = (root, target) => {
    if (root === null) return null;
    if (root.val === target) return [ root.val ];
    let leftNodes = pathFinder(root.left, target); //this is an array
    let rightNodes = pathFinder(root.right, target);
    
    // arr = [];
    
    if (leftNodes) return [ root.val ].concat(leftNodes);
    if (rightNodes) return [ root.val ].concat(rightNodes);
      
    return null;
};

const treeValueCount = (root, target) => {
    // todo
    if (root === null) return 0;
    let match = root.val === target ? 1 : 0
    return match + treeValueCount(root.left, target) + treeValueCount(root.right, target);
}