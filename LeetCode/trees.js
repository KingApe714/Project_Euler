const isSameTree = (p, q) => {
    if (!p && !q) return true;
    if ((p && !q) || (q && !p) || (p.val !== q.val)) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};