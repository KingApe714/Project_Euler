//The selection sorting algorithm uses a sliding window method where the left side of the array is sorted and the right is unsorted
//The algo sorts the array in place
//because of the sliding window it runs in O(n^2) time
//because it sorts in place it runs in O(1) space

const selectionSort = array => {

    for (let i = 0; i < array.length - 1; i++) {
        let smallestIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[smallestIdx]) {
                smallestIdx = j;
            }
        }

        [array[i], array[smallestIdx]] = [array[smallestIdx], array[i]]
    }

    return array;
}

//The insertion sorting algorithm uses a inversed sliding window method with the outer loop looping from start to finish
//and the inner loop starting from the outer index to the beginning
//important to note is that the outer loop must commence at idx 1 because the inner loop loops backword from it
//also important to note is that the while conditional of the inner loop handles the checking of when to swap and when
//to stop looping
//Because of the inversed sliding window it has a O(n^2) time complexity
//Because of the in place sorting it has a O(1) space complexity
const insertionSort = array => {

    for (let i = 1; i < array.length; i++) {
        for (let j = i; array[j - 1] > array[j]; j--) {
            [array[j], array[j - 1]] = [array[j - 1], array[j]]
        }
    }

    return array;
}

//the merge sort algorithm uses the divided and conquer method where the array is cut down to smaller arrays of length 0 or 1
//once we've reached the smallest possible array lengths on both the left and right arrays we then merge them together in a separate
//function
//The time complexity is O(nlog(n))
//The space complexity is O(n)

const mergeSort = array => {
    if (array.length < 2) return array;
    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));
    return merge(left, right);
}

const merge = (left, right) => {
    let merged = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            merged.push(left.shift())
        } else {
            merged.push(right.shift())
        }
    }
    return merged.concat(left, right);
}

let arr1 = [8, 5, 2, 9, 5, 6, 3]
let arr2 = [1]
let arr3 = [1, 2]
let arr4 = [2, 1]
let arr5 = [-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8]
let arr6 = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]

console.log(mergeSort(arr1))
console.log(mergeSort(arr2))
console.log(mergeSort(arr3))
console.log(mergeSort(arr4))
console.log(mergeSort(arr5))
console.log(mergeSort(arr6))