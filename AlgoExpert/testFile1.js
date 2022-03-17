function findClosestValueInBst(tree, target) {
    // Write your code here.
      let currentNode = tree;
      let closest = Infinity;
      while (currentNode) {
          if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
              closest = currentNode.value
          }
          
          if (target < currentNode.value) {
              currentNode = currentNode.left;
          } else if (target > currentNode.value){
              currentNode = currentNode.right;
          } else {
              break;
          }
      }
      
      return closest;
  }

function sortedSquaredArray(array) {
    // Write your code here.
      let arr = []
      
      array.forEach(ele => {
          arr.push(ele * ele)
      })
      
    return arr.sort((a, b) => a - b);
  }

  function twoNumberSum(array, targetSum) {
    // Write your code here.
      let obj = {};
      
      for (let i = 0; i < array.length; i++) {
          let num1 = array[i]
          //now create the variable that we are checking for
          let num2 = targetSum - num1
          //now check to see if num2 is in the hash
          if (obj[num2]) return [num1, num2]
          
          obj[num1] = true
      }
      
      return [];
  }

  function isValidSubsequence(array, sequence) {
    // Write your code here.
      let step = 0 //used to step through sequence array
      
      for (let i = 0; i < array.length; i++) {
          let seqEle = sequence[step];
          let arrEle = array[i];
          
          if (seqEle === arrEle) {
              step++
          }
          
          if (step >= sequence.length) return true;
      }
      
      return false;
  }

  function tournamentWinner(competitions, results) {
    // Write your code here.
      //set up an object with each team name as the key and
      //their corresponding scores as the value.
      let obj = {};
      let winner = ""
      let highest = 0
      
      for (let i = 0; i < results.length; i++) {
          let home = competitions[i][0]
          let away = competitions[i][1]
          let res = results[i]
          
          if (!obj[home]) obj[home] = 0
          if (!obj[away]) obj[away] = 0
          
          if (res === 0) obj[away] += 3
          if (res === 1) obj[home] += 3
      }
      
      for (let team in obj) {
          let score = obj[team];
          if (score > highest) {
              highest = score;
              winner = team
          }
      }
    return winner;
  }

  function nonConstructibleChange(coins) {
    // Write your code here.
      coins.sort((a, b) => a - b)
      console.log(coins)
      //sort the array
      //loop through the array then ad to the sum
      //if the current coin is greater than the sum + 1 return currentSum + 1
      let currentSum = 0;
      for (let i = 0; i < coins.length; i++) {
          if (coins[i] > currentSum + 1) return currentSum + 1
          
          currentSum += coins[i]
          console.log(currentSum)
      }
      
      return currentSum + 1;
  }

  // This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  //So I am traversing the tree and adding up all the nodes until I reach
  //leaf nodes
  //I can assign each node with the sum of each their branch sums
  //Then I record whether I am looking at a leaf node in which case I add
  //to the array that I am returning
  //BFS through the tree iteratively use a stack
  function branchSums(root) {
    // Write your code here.
      let sums = []
      //pos 1 of the inner queue array will always be the total sum leading
      //up to that particular node
      let stack = [[root, root.value]];
      while(stack.length) {
          let currentCheck = stack.pop() //grab from the front
          //check to see if it is a leaf node
          if (!currentCheck[0].left && !currentCheck[0].right) { //if no children then leaf
              sums.push(currentCheck[1])
          }
          if (currentCheck[0].right) { //I know that it has a right child
              let rightSum = currentCheck[0].right.value + currentCheck[1]
              stack.push([currentCheck[0].right, rightSum])
          }
          if (currentCheck[0].left) { //I know that it has a left child
              let leftSum = currentCheck[0].left.value + currentCheck[1]
              stack.push([currentCheck[0].left, leftSum])
          }
      }
      return sums
  }

  //create a sums integer to add up all total sums
//collect all current sums and add one to their children
//two dimensional queue for the solution

function nodeDepths(root) {
    // Write your code here.
      let sums = 0;
      let queue = [[root, 0]];
      while (queue.length) {
          let currentCheck = queue.shift()
          sums += currentCheck[1];
          if (currentCheck[0].left) {
              let leftSum = currentCheck[1] + 1;
              queue.push([currentCheck[0].left, leftSum])
          }
          if (currentCheck[0].right) {
              let rightSum = currentCheck[1] + 1;
              queue.push([currentCheck[0].right, rightSum])
          }
      }
      
      return sums
  }
  
//I want to push the name of all of the visited nodes into the empty array
//I want to use the stack method in order properly DFS
function depthFirstSearch(array) {
    // Write your code here.
    let stack = [this];
    while (stack.length) {
        let currentNode = stack.pop();
        array.push(currentNode.name);
        currentNode.children.reverse().forEach(child => {
            stack.push(child)
        })
    }
    
    return array
}

//Build a text file that has all words in the dictionary

function minimumWaitingTime(queries) {
    // Write your code here.
    queries.sort((a, b) => a - b)
    let sum = 0
    let totalSum = 0
    for (let i = 0; i < queries.length - 1; i++) {
        sum += queries[i]
        totalSum += sum
    }
return totalSum;
}

function minimumWaitingTimeTwo(queries) {
// Write your code here.
    queries.sort((a, b) => a - b);
    let totalSum = 0;
    let queriesLeft = queries.length - 1
    for (let i = 0; i < queries.length - 1; i++) {
        totalSum += queries[i] * queriesLeft
        queriesLeft--
    }
return totalSum;
}

function classPhotos(redShirtHeights, blueShirtHeights) {
// Write your code here.
    redShirtHeights.sort((a, b) => a - b)
    blueShirtHeights.sort((a, b) => a - b)
    //just make sure that the sign dif remains the same throughout
    //have a variable that holds the sign from the start
    let sign = Math.sign(redShirtHeights[0] - blueShirtHeights[0])
    for (let i = 0; i < redShirtHeights.length; i++) {
        if (Math.sign(redShirtHeights[i] - blueShirtHeights[i]) !== sign ||
            redShirtHeights[i] === blueShirtHeights[i]) {
            return false;
        }
    }
    
return true;
}

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
// Write your code here.
    redShirtSpeeds.sort((a, b) => a - b);
    if (fastest) {
        blueShirtSpeeds.sort((a, b) => b - a);
    } else {
        blueShirtSpeeds.sort((a, b) => a - b);
    }
    
    let total = 0;
    for (let i = 0; i < redShirtSpeeds.length; i++) {
        total += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i])
    }
return total;
}

function removeDuplicatesFromLinkedList(linkedList) {
// Write your code here.
    let currentNode = linkedList
    
    while(currentNode) {
        let nextNode = currentNode.next;
        while(nextNode && currentNode.value === nextNode.value) {
            nextNode = nextNode.next;
        }
        currentNode.next = nextNode
        currentNode = currentNode.next
    }
    
return linkedList;
}

function getNthFib(n) {
    // Write your code here.
    if (n === 1) return 0
    let fibArray = [0, 1, 1];
    while (fibArray.length < n) {
        let sum = fibArray[fibArray.length - 1] + fibArray[fibArray.length -2]
        fibArray.push(sum)
    }
    return fibArray[fibArray.length - 1]
}

function getNthFibTwo(n) {
    // Write your code here.
    if (n === 1) return 0
    if (n === 2 || n === 3) return 1
    let [prev1, prev2] = [0, 1];
    let count = 1;
    let sum = 0
    while (count < n - 1) {
        sum = prev1 + prev2;
        prev1 = prev2;
        prev2 = sum;
        count++
    }
    return sum
}

function mergeSort(array) {
// Write your code here.
    if (array.length <= 1) return array
    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));
    
    return merge(left, right)
}

function merge(left, right) {
    let merged = []
    let func = (left, right) => {
    return left < right ? -1 : left > right ? 1 : 0;
};
    while (left.length && right.length) {
        switch (func(left[0], right[0])) {
    case -1:
        merged.push(left.shift());
        break;
    case 0:
        merged.push(left.shift());
        break;
    case 1:
        merged.push(right.shift());
        break;
    }
    }
    merged = merged.concat(left, right);
return merged;
}

function mergeSortedArrays(arrays) {
// Write your code here.
    let mergedArray = arrays.pop();
    for (let i = 0; i < arrays.length; i++) {
        mergedArray = merge(mergedArray, arrays[i]);
    }
    
    return mergedArray;
}
  
function merge(arr1, arr2) {
    let merged = [];
    let func = (left, right) => {
        if (left < right) return -1;
        if (left > right) return 1;
        return 0;
    }
    while(arr1.length && arr2.length) {
        switch(func(arr1[0], arr2[0])) {
            case -1:
                merged.push(arr1.shift());
                break;
            case 0:
                merged.push(arr1.shift());
                break;
            case 1:
                merged.push(arr2.shift());
                break;
        }
    }
    
    return merged.concat(arr1, arr2)
}

function productSum(array, depth=1) {
    // Write your code here.
    let pSum = 0;
    
    for (let i = 0; i < array.length; i++) {
        let ele = array[i]
        if (Array.isArray(ele)) {
            pSum += productSum(ele, depth + 1)
        } else {
            pSum += ele
        }
    }
    
    return pSum * depth
}

function binarySearch(array, target) {
    // Write your code here.
    if (array.length === 0) return -1;
    
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid + 1);
    
    if (array[mid] === target) {
        return mid
    } else if (array[mid] > target) {
        return binarySearch(left, target)
    } else {
        let res = binarySearch(right, target)
        return res === -1 ? -1 : res + mid + 1 
    }
}

//we want to be sure that we keep an O(n) time complexity
//keep track of the three largest that we come accross
//grab the first three values and assume they are the largest
//be sure that the largest array remains sorted and replace currenet
//ele with the lowest val in largest array if it is larger
//then sort largest array
function findThreeLargestNumbers(array) {
    // Write your code here.
    let largest = array.slice(0, 3).sort((a, b) => a - b);
    
    for (let i = 3; i < array.length; i++) {
        placeEle(largest, array[i])
    }
    return largest
}

function placeEle(largest, ele) {
    for (let i = 0; i < largest.length; i++) {
        if (largest[i] < ele) {
            largest[i] = ele
            return largest.sort((a, b) => a - b)
        }
    }
    
    return largest;
}

function reverseWordsInString(string) {
    // Write your code here.
    let arr = [];
    let word = ''
    let space = ''
    for (let i = 0; i < string.length; i++) {
        let chr = string[i];
        if (chr !== ' ') { //I know that I am looking at a char
            if (space.length){
                arr.push(space)
                space = ''
            }
            word += chr;
        } else { //I know that I am looking as a space
            if (word.length){
                arr.push(word)
                word = ''
            }
            space += ' ';
        }
    }
    if (word.length) arr.push(word)
    if (space.length) arr.push(space)
return arr.reverse().join('');
}

function reverseWordsInStringTwo(string) {
    // Write your code here.
    let str = '';
    let word = '';
    for (let i = string.length - 1; i >= 0; i--) {
        let chr = string[i];
        if (chr !== " ") { //I know that I am looking at a char
            word = chr + word;
        } else {
            str += word
            word = ''
            str += ' '
        }
    }
return str + word;
}

function mergeOverlappingIntervals(array) {
    // Write your code here.
    array.sort((a, b) => a[0] - b[0])
    
    let merged = [array[0]];
    for (let i = 1; i < array.length; i++) {
        let [cur1, cur2] = merged[merged.length - 1];
        let [int1, int2] = array[i]
        if (int1 <= cur2) {
            merged[merged.length - 1] = [cur1, Math.max(cur2, int2)]
        } else {
            merged.push(array[i])
        }
    }
return merged;
}

//I want to multiply my multiplier by 10 then multiply the current node
//value by it then add it to its respecitve number
//by the end of the two I want to add them together then create a new
//Linked List with this number.
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    // Write your code here.
    let newList = new LinkedList(0);
    let num1 = 0;
    let num2 = 0;
    let multiplier = 1;
    let currentNode1 = linkedListOne;
    let currentNode2 = linkedListTwo;
    while (currentNode1 || currentNode2) {
        if (currentNode1) {
            num1 += currentNode1.value * multiplier;
            currentNode1 = currentNode1.next;
        }
        if (currentNode2) {
            num2 += currentNode2.value * multiplier;
            currentNode2 = currentNode2.next;
        }
        multiplier *= 10;
    }
    let sum = num1 + num2;
    let currentNode = newList;
    while(sum > 0) {
        let currentValue = sum % 10;
        sum = Math.floor(sum / 10)
        currentNode.value = currentValue;
        if (sum > 0) {
            currentNode.next = new LinkedList;
            currentNode = currentNode.next;
        }
    }
return newList;
}

//I want to loop through each of the lists simultaneously and start summing
//the integers in place and hold a carry variable in the event there is one
function sumOfLinkedListsTwo(linkedListOne, linkedListTwo) {
    // Write your code here.
    let newList = new LinkedList;
    let carry = 0;
    let currentLink1 = linkedListOne;
    let currentLink2 = linkedListTwo;
    let currentNode = newList;
    while(currentLink1 || currentLink2 || carry) {
        let val1 = currentLink1 ? currentLink1.value : 0
        let val2 = currentLink2 ? currentLink2.value : 0
        let sum = val1 + val2 + carry;
        
        let newVal = sum % 10; //ensure that we are looking at one digit
        carry = sum > 9 ? 1 : 0; //if two digits can only ever be between 10 - 18
        currentNode.value = newVal;
        
        currentLink1 = currentLink1 ? currentLink1.next : null;
        currentLink2 = currentLink2 ? currentLink2.next : null;
        
        if (currentLink1 || currentLink2 || carry) {
            currentNode.next = new LinkedList;
            currentNode = currentNode.next
        }
        
    }
    return newList;
}

function bubbleSort(array) {
    // Write your code here.
    let arr = array.slice();
    let func = (left, right) => {
        if (left < right) return -1;
        if (left > right) return 1;
        return 0;
    }
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (func(arr[i], arr[i + 1]) === 1) {
                sorted = false;
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    
    return arr
}

function largestRange(array) {
    // Write your code here.
    if (array.length === 1) return [array[0], array[0]]
    array.sort((a, b) => a - b);
    
    let sub1 = [array[0]];
    let sub2 = [];
    for (let i = 1; i < array.length; i++) {
        if (sub1[sub1.length - 1] === array[i]) {
            continue;
        } else if (sub1[sub1.length - 1] === array[i] - 1) {
            sub1.push(array[i])
        } else {
            sub1 = [array[i]]
        }
        if (sub1.length > sub2.length) sub2 = sub1
    }
    
    return [sub2[0], sub2[sub2.length - 1]]
}

//O(n)time O(n) space (Optimal)
function largestRange(array) {
    // Write your code here.
    let longestLength = 0;
    let longestRange = [];
    let obj = {};
    for (let ele of array) obj[ele] = true; //set all keys in obj
    for (let key of array) {
        if (obj[key]) { //I know that it's set to true
            let currentLength = 1
            let left = key - 1;
            let right = key + 1;
            obj[key] = false;
            while(left in obj) {
                obj[left] = false;
                left--;
                currentLength++;
            }
            while(right in obj) {
                obj[right] = false;
                right++;
                currentLength++;
            }
            if (currentLength > longestLength) {
                longestLength = currentLength;
                longestRange = [left + 1, right - 1];
            }
        } else {
            continue;
        }
    }
    return longestRange;
}

function isPalindrome(string) {
    // Write your code here.
    if (string.length <= 1) return true;
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
        let j = string.length - i - 1;
        if (string[i] !== string[j]) return false;
    }
    return true;
}

function runLengthEncoding(string) {
    // Write your code here.
    let encode = '';
    let count = 1;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            count++;
        } else {
            if (count) encode += count + string[i]; //ensure count is not 0
            count = 1;
        }
        if (count === 9) {
            encode += count + string[i]
            count = 0;
        }
    }
    
    return encode;
}

function runLengthEncodingTwo(string) {
    // Write your code here.
    let encode = [];
    let count = 1;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            count++;
        } else {
            if (count) {
                encode.push(count);
                encode.push(string[i]);
            }
            count = 1
        }
        if (count === 9) {
            encode.push(9);
            encode.push(string[i]);
            count = 0;
        }
    }
    
    return encode.join('')
}

function firstNonRepeatingCharacter(string) {
    // Write your code here.
    let obj = {};
    for (let chr of string) {
        if (obj[chr]) {
            obj[chr]++;
        } else {
            obj[chr] = 1;
        }
    }
    for (let i = 0; i < string.length; i++) {
        if (obj[string[i]] === 1) return i
    }
    return -1;
}

function generateDocument(characters, document) {
    // Write your code here.
    if (characters.length < document.length) return false;
    let obj1 = {};
    let obj2 = {};
    for (let chr of characters) {
        if (obj1[chr]) {
            obj1[chr]++;
        } else {
            obj1[chr] = 1;
        }
    }
    for (let chr of document) {
        if (obj2[chr]) {
            obj2[chr]++;
        } else {
            obj2[chr] = 1;
        }
    }
    for (let key in obj2) {
        if (!obj1[key] || obj1[key] < obj2[key]) {
            return false;
        }
    }
return true;
}

function threeNumberSort(array, order) {
    // Write your code here.
    let obj = {};
    let newArr = []
    for (let num of array) {
        if (obj[num]) {
            obj[num]++;
        } else {
            obj[num] = 1;
        }
    }
    
    for (let n of order) {
        let c = 1;
        while (c <= obj[n]) {
            newArr.push(n)
            c++;
        }
    }
    
    return newArr;
}