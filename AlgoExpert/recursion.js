function getPermutations(array) {
    if (array.length === 0) return [];
  
    let first = array[0];
    let res = getPermutations(array.slice(1));
    let perms = res.length ? res : [ [] ]
    let arr = [];
  
    for (let perm of perms) {
      for (let i = 0; i <= perm.length; i++) {
        arr.push(perm.slice(0, i).concat([first], perm.slice(i)));
      }
    }
  
    return arr;
}