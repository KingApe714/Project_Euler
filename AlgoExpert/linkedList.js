function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
    let current = linkedList;
    while (current) {
        let nextNode = current.next;
        while (nextNode && current.value === nextNode.value) {
        nextNode = nextNode.next;
        }

        //I'm nore entirely sure why both the current.next and current need to point to the nextNode here
        current.next = nextNode;
        current = nextNode;
    }
    return linkedList;
}

function findLoop(head) {
    // Write your code here.
    let current = head;
    while (current) {
        if (current.seen) { //check to see if the node is seen
            return current;
        }
        //initialize a .seen key for every node that is seen
        current.seen = true;
        current = current.next;
    }
}

function reverseLinkedList(head) {
    let tail = null;
    let current = head;
    while (current) {
        let next = current.next;
        current.next = tail;
        tail = current;
        current = next;
    }
  
    return tail;
}

function mergeLinkedLists(headOne, headTwo) {
    // Write your code here.
    let dummy = new LinkedList(null);
    let tail = dummy;
    let current1 = headOne;
    let current2 = headTwo;
    while (current1 && current2) {
        if (current1.value < current2.value) {
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
    return dummy.next;
}

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
  
function linkedListPalindrome(head) {
    // Write your code here.
    let slow = head;
    let fast = head;
  
    while (slow && fast) {
      slow = slow.next;
      if (fast.next) {
        fast = fast.next.next;
      } else {
        break
      }
    }
  
    let current = head;
    let revHalf = reverse(slow);
  
    while (current && revHalf) {
      if (current.value !== revHalf.value) {
        return false;
      }
      current = current.next;
      revHalf = revHalf.next;
    }
    return true;
}
  
const reverse = head => {
    let current = head;
    let tail = null;
  
    while (current) {
      let next = current.next;
      current.next = tail;
      tail = current;
      current = next;
    }
    
    return tail;
  }