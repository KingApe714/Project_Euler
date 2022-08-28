function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
    let current = linkedList;
    while (current) {
        let nextNode = current.next;
        while (nextNode && current.value === nextNode.value) {
        nextNode = nextNode.next;
        }

        current.next = nextNode;
        current = nextNode;
    }
    return linkedList;
}