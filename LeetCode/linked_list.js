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