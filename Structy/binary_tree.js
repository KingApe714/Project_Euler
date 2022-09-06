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