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