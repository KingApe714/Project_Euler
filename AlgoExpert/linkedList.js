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