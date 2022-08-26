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

const zipperLists = (head1, head2) => {
    //So I can use a counter variable that allows me to alternate between odd and even
    //since I initialize it to 0 I know that I want head2 to be referenced by the even numbers
    //and head1 to be referenced by the odd numbers.
    let count = 0
    //I want to initialize current1 to head1.next since I'm going to initialize the 
    //return variable to head1;
    let current1 = head1.next;
    let current2 = head2;
    let tail = head1;
    
    while (current1 && current2) {
        if (count % 2 === 0) { //we want to use the even numbers to reference current2 (because 2 is even get it?)
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }
        tail = tail.next;
        count++;
    }
    
    if (current1) tail.next = current1 //we don't have to loop here because current1 is just the remainder of the linkedList
    if (current2) tail.next = current2
    
    return head1;
};