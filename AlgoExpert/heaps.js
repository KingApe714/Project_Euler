//min hip construction
//a binary heap is a binary tree
//it satisfies two additional properties
//1) it has to have all of its levels filled up completely except the last level. if the last level is partially filled up
//it has to be filled from left to right
//the heap property states that every node in the heap which has a value. every nodes value is going to be smaller than
//or equal to its children nodes values (in regards to a min heap)
//a heap isn't necessarily sorted
//the root node is at all times the smallest value in the heap
//they can be represented in the form of arrays
//the indices of the array is how we find the parents and children
//to get the first child you multiply the current idx by 2 and add 1
//to the second child you multiply by 2 and add 2
//to find the parent position we take Math.floor((i - 1) / 2)
//This will give us the parent of any node

//min heap construction implements a few core methods.
//build heap takes in an array of numbers and it builds a heap out of it
//it can be done in place
//insertion are necessary:
//to insert to the end of the heap
//it might not be in place.
//the min heao property is that every nodes value has to be less than their children
//so from where we inserted the node we must sift the node up
//so we keep swapping that node with its parent until it satisfies that min heap property
//when removing, we swap the root node with the last node in the heap
//once they are swapped we can then pop off the lest element and use it however we need to
//then we call the sift down function
//we take the value then sift it down until its in the right position
//we must compare it to both of the children nodes
//we keep swapping it with the smallest child so long as the child is still smaller than the node itself.

//Time Compplexity:
//sift down and sift up runs in O(log(n))
//build heap runs in O(n) time

//Space complexity
//because everything happens in place it runs in O(1) space