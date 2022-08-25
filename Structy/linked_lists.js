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

const reverseList = (head) => {
    // todo
    //i know that I want to reverse the list
    //all I have to do is have the node reference the prev node
    //so it makes for O(n) run time
    let prev = null; //setting up the new head of the reversed linkedList
    let current = head; //the node that I'm going to use to loop
    while (current) { //keep looping while I have a current
        let next = current.next; //set up a holder variable
        current.next = prev; //make the current node reference the prev node
        prev = current; //now previous node gets reset to the current node we look back at
        current = next; //then we reset the current node to the next variable that we held
    }
    
    return prev;
};