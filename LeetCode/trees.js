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

const isSubtree2 = (root, subRoot) => {
    if (!root) return false;
    if (root.val === subRoot.val && equalTree(root, subRoot)) return true;
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

const equalTree2 = (a, b) => {
    if (!a || !b) return !a && !b;
    if (a.val !== b.val) return false;
    
    return equalTree(a.left, b.left) && equalTree(a.right, b.right)
}

const hasPathSum = (root, targetSum) => {
    if (!root) return false;
    if ((!root.left && !root.right) && (root.val - targetSum === 0)) return true;
    
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};

const mergeTrees = (root1, root2) => {
    if (!root1) return root2;
    else if (!root2) return root1;
    else {
        root1.val += root2.val;
        root1.left = mergeTrees(root1.left, root2.left);
        root1.right = mergeTrees(root1.right, root2.right);
        return root1
    }
};

const maxDepth = (root, current=1) => {
    if (!root) return 0;
    if (!root.left && !root.right) return current;
    let left = root.left ? maxDepth(root.left, current + 1) : 0;
    let right = root.right ? maxDepth(root.right, current + 1) : 0;
    
    return Math.max(left, right);
};