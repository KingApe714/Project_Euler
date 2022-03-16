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