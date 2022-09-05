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

// my solution to the mergeList problem focuses mainly on the beginning of the function where I want to be sure to grab the correct
//node to start with because I know that I want to return the nodes in sorted order. So I need to be sure that the head node is the
//smaller of the two head nodes that are being passed in.
const mergeLists = (head1, head2) => {
    // todo
    let tail;
    let current1;
    let current2;
    if (head1.val < head2.val) {
        tail = head1;
        current1 = head1.next;
        current2 = head2;
    } else {
        tail = head2;
        current1 = head1;
        current2 = head2.next;
    }

    while(current1 && current2) {
        if (current1.val < current2.val) {
        tail.next = current1;
        current1 = current1.next;
        } else {
        tail.next = current2;
        current2 = current2.next;
        }
        tail = tail.next;
    }
    if (current1) tail.next = current1;
    if (current2) tail.next = current2;
    return head1.val < head2.val ? head1 : head2;
};

//take note of the use of the dummyHead in this case. This makes it so that I don't have to worry about which is the lesser of the 
//2 becaue I'm going to take advantage of the dummyHead's .next attribute which is what I send at the end. I also need to be sure
//to set the tail equal to the dummyHead because tail is the one that builds out the whole LinkedList
const mergeLists2 = (head1, head2) => {
    let dummyHead = new Node(null);
    let tail = dummyHead;
    let current1 = head1;
    let current2 = head2;
    while (current1 && current2) {
        if (current1.val < current2.val) {
            tail.next = current1;
            current1 = current1.next;
        } else {
            tail.next = current2;
            current2 = current2.next;
        }
        tail = tail.next;
    }

    if (current1) tail.next = current1;
    if (current2) tail.next = current2;

    return dummyHead.next;
};

const isUnivalueList = (head) => {
    // todo
    let current = head;
    
    while (current) {
        if (current.val !== head.val) return false;
        current = current.next;
    }
    
    return true;
};

const longestStreak = (head) => {
    // todo
    if (!head) return 0;
    let longest = 1;
    let current = 1;
    let node = head;
    while (node) {
        if (node.next && node.val === node.next.val) {
        current++;
        if (current > longest) longest = current;
        } else {
        current = 1;
        }
        
        node = node.next;
    }

    return longest;
};

const removeNode = (head, targetVal) => {
    if (head.val === targetVal) return head.next
    let current = head;
    let prev = null;
    while (current) {
        if (current.val === targetVal) {
        prev.next = current.next;
        break
        }
        
        prev = current;
        current = current.next;
    }

    return head;
};

const insertNode = (head, value, index) => {
    let node = new Node(value);
    if (index === 0) {
        node.next = head;
        return node;
    }
    let j = 1;
    let current = head;
    while (j < index) {
        j++;
        current = current.next;
    }
    node.next = current.next;
    current.next = node;
    return head;
};

const createLinkedList = (values) => {
    if (!values.length) return null;
    let head = new Node(values.shift())
    let current = head;
    while (values.length) {
        current.next = new Node(values.shift())
        current = current.next;
    }

    return head;
};