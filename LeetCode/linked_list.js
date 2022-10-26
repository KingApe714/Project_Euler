const reverseList = head => {
    let current = head;
    let prev = null;
    
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
};

const mergeTwoLists = (list1, list2) => {
    let dummyHead = new ListNode(null);
    let tail = dummyHead;
    let current1 = list1;
    let current2 = list2;
    
    while (current1 && current2) {
        if (current1.val < current2.val) {
            tail.next = current1
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

const isPalindrome = head => {
    if (!head.next) return true
    let slow = head;
    let fast = head;
    
    while (slow && fast) {
        slow = slow.next;
        if (fast.next) {
            fast = fast.next.next;
        } else {
            break;
        }
    }
    
    let revHalf = reverse(slow);
    let current = head;
    while (current && revHalf) {
        if (current.val !== revHalf.val) {
            return false;
        }
        current = current.next;
        revHalf = revHalf.next;
    }
    
    return true
};

const reverse = head => {
    let current = head
    let tail = null;
    
    while (current) {
        let next = current.next;
        current.next = tail;
        tail = current;
        current = next;
    }
    
    return tail;
}

const addTwoNumbers = function(l1, l2) {
    //we need to also return the sum in a reversed linkedList
    let carry = 0; //this will check to see if I need to carry into the next digit
    
    let current1 = l1;
    let current2 = l2;
    let newList = new ListNode(0, null);
    let currentSum = newList
    while(current1 || current2 || carry) {
        let num1 = current1 ? current1.val : 0;
        let num2 = current2 ? current2.val : 0;
        let sum = num1 + num2 + carry;
        if (carry) carry = 0;
        if (sum > 9) {
            carry = 1
            sum = sum - 10;
        }
        if (current1) current1 = current1.next;
        if (current2) current2 = current2.next;
        console.log(sum)
        currentSum.val = sum;
        if (current1 || current2 || carry) {
            currentSum.next = new ListNode(0, null)
            currentSum = currentSum.next;
        }
    }
    console.log(newList)
    
    return newList;
};

const hasCycle = head => {
    let current = head;
    
    while (current) {
        if (current.seen) {
            return true
        }
        current.seen = true;
        current = current.next;
    }
    
    return false;
};

const removeElements = (head, val) => {
    if (!head) return head;
    
    if (head.val === val) {
        head = removeElements(head.next, val);
    } else {
        head.next = removeElements(head.next, val)
    }
    
    return head;
};

const deleteDuplicates = head => {
    if (!head || !head.next) return head;
    
    if (head.val === head.next.val) {
        head = deleteDuplicates(head.next);
    } else {
        head.next = deleteDuplicates(head.next);
    }
    
    return head;
};