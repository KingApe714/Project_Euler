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