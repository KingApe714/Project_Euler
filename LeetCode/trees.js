const isSameTree = (p, q) => {
    if (!p && !q) return true;
    if ((p && !q) || (q && !p) || (p.val !== q.val)) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

const inorderTraversal = root => {
    let arr = [];
    
    const dfs = root => {
        if (!root) return
        dfs(root.left);
        arr.push(root.val);
        dfs(root.right);
    }
    
    dfs(root);
    return arr;
};

const isSubtree = (root, subRoot) => {
    let stack = [root];
    
    while (stack.length) {
        let curRoot = stack.pop();
        
        if (curRoot.val === subRoot.val && equalTree(curRoot, subRoot)) {
            return true;
        }
        
        if (curRoot.left) stack.push(curRoot.left)
        if (curRoot.right) stack.push(curRoot.right)
    }
    
    return false;
}

const equalTree = (a, b) => {
    if (!a || !b) return !a && !b;
    if (a.val !== b.val) return false;
    
    return equalTree(a.left, b.left) && equalTree(a.right, b.right)
}