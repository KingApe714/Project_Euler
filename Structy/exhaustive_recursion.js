const subsets = (elements) => {
    if (elements.length === 0) return [ [] ];
    const first = elements[0];
    const remaining = subsets(elements.slice(1));
    const arr = [];
    for (let inner of remaining) {
        arr.push([first, ...inner]);
    }
    return [...remaining, ...arr]
};

const permutations = (items) => {
    // todo
    if (items.length === 0) return [ [] ];
    let first = items[0];
    let arr = permutations(items.slice(1));
    let perms = [];
    
    for (let inner of arr) {
      for (let i = 0; i <= inner.length; i++) {
        perms.push(
          [...inner.slice(0, i), first, ...inner.slice(i)]
        )
      }
    }
    
    return perms;
};