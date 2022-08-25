const linkedListValues = (head) => {
    let arr = [];
    
    let current = head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    
    return arr;
};

const sumList = (head) => {
    let sum = 0;
    let current = head;
    while (current) {
        sum += current.val;
        current = current.next;
    }

    return sum;
};

const linkedListFind = (head, target) => {
  
    let current = head;
    while (current) {
        if (current.val === target) return true;
        current = current.next
    }

    return false;
};

const getNodeValue = (head, index) => {
    // todo
  //   let current = head;
  //   for (let j = 0; j < index && current; j++) {
  //     current = current.next;
  //   }
    
  //   return current ? current.val : null;
    
    if (head === null) return null;
    if (index === 0) return head.val;
    return getNodeValue(head.next, index - 1)
};