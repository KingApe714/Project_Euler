//the Bubble Sorting algorithm uses a sliding window to sort an array.
//it will keep looping from the begining of an array swapping adjacent elements that are out of place until the entire array is sorted
//because of the sliding window it runs in O(n^2) time
//because it sorts the array in place it runs in O(1) space

const bubbleSort = array => {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]]
                sorted = false;
            }
        }
    }

    return array;
}

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

//the quickSort algorithm uses a similar methodology as mergeSort in dividing and conquering however it tends to be slightly more efficient
//by taking the pivot we don't have to look at one element on every recursive call making it slightly quicker.
//it filters the elements less than the pivot to a left array and filters the elements greater than the pivot in a right array
//quickSort is called on both left and right until we reach the base case of an array length 0 or 1
//finally we concatinate the left, the pivot and the right then return

const quickSort = array => {
    if (array.length < 2) return array;
    let pivot = array.pop()
    let left = quickSort(array.filter(ele => ele < pivot));
    let right = quickSort(array.filter(ele => ele >= pivot))
    return left.concat([pivot], right)
}

//Most of the work in the Radix Sorting Algorithm is done for me by the countingSort algorithm. The countingSort container two arrays
//and a variable that I need to use to determine which comlumn I am working in. The sortedArray needs to be initialized to an array
//that is the same length as the array that is being passed in and filled with 0s. The countsArray needs to be initialized as an array
//of length 10 and filled with 0s. I use the digitColumn number to determine which digit I want to look at in the element. I then count 
//how many times that number appears in the array at that particular column and throw the count at that digits respective index in the 
//countArr. i then need to loop through countArr and add adjacent elements whcih will later tell me the index that i need to see the
//elements that are referencing them. 
//I then loop through the array that is being passed in and look at that numbers at the specified column and place them where the countsArr
//specifies. Every time I hit any element at any index I then decriment that element by 1 which tells me that the next time I have a column
//referencing that element it will direct me to the index in front of the last one
const radixSort = array => {
    //if the array is empty simply return the array because it is implicitly sorted
    if (array.length === 0) return array;

    //I need to grab the highest number becuase this will help me determine how many times the while loop must loop
    let maxNumber = Math.max(...array);

    //Initializing the digit to 0 tells me which digit I should be working with by simply raising 10 to the power of the digit
    //0 of course will give me 1 which is the ones position (or column)
    let digit = 0;

    console.log(maxNumber / 10 ** digit)
    //keep looping while the highest number is greater than 0, otherwise there are no other digits for us to look at
    while (maxNumber / 10 ** digit > 0) {

    }
}

let arr1 = [8, 5, 2, 9, 5, 6, 3]
let arr2 = [1]
let arr3 = [1, 2]
let arr4 = [2, 1]
let arr5 = [-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8]
let arr6 = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]

// console.log(bubbleSort(arr1))
// console.log(bubbleSort(arr2))
// console.log(bubbleSort(arr3))
// console.log(bubbleSort(arr4))
// console.log(bubbleSort(arr5))
// console.log(bubbleSort(arr6))