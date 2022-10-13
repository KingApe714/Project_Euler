// const depthFirstPrint = (graph, source) => {
//     const stack = [ source ];

//     while (stack.length) {
//         let current = stack.pop();
//         console.log(current);
//         graph[current]
//         for (let neighbor of graph[current]) {
//             stack.push(neighbor)
//         }
//     }
// }

const depthFirstPrint = (graph, source) => {
    console.log(source);
    for (let neighbor of graph[source]) {
        depthFirstPrint(graph, neighbor);
    }
}

const breadthFirstPrint = (graph, source) => {
    const queue = [ source ];
    while (queue.length) {
        let current = queue.shift();
        console.log(current);
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
}

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// depthFirstPrint(graph, 'a');
breadthFirstPrint(graph, 'a')

const hasPath = (graph, src, dst) => {
    let queue = [ src ];
    
    while (queue.length) {
        let node = queue.shift();
        if (node === dst) return true;
        for (let neighbor of graph[node]) {
        queue.push(neighbor)
        }
    }

    return false;
};

const hasPath2 = (graph, src, dst) => {
    if (src === dst) return true;
    for (let neighbor of graph[src]) {
        if (hasPath2(graph, neighbor, dst)) return true;
    }

    return false;
};

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    return hasPath3(graph, nodeA, nodeB);
  };
  
const hasPath3 = (graph, src, dst) => {
    let queue = [ src ];
    let visited = new Set()
    while (queue.length) {
        let node = queue.shift()
        for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            queue.push(neighbor);
        }
        if (neighbor === dst) return true;
        }
        visited.add(node);
    }

    return false;
}

const buildGraph = edges => {
    let graph = {};

    for (let edge of edges) {
        let [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

const connectedComponentsCount = (graph) => {
    // todo
    //the goal of this function is to count the islands that exist in this graph
    //i want to traverse each nodes' neighbors
    const visited = new Set();
    let count = 0;
    for (let node in graph) {
      if (explore(graph, node, visited)) count++;
    }
    
    return count;
};

const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false;

    visited.add(String(current));

    for (let neighbor of graph[current]) {
        explore(graph, neighbor, visited);
    }

    //this return true tells me that I've seen all of the nodes in this component or island
    return true;
}

const largestComponent = (graph) => {
    let visited = new Set();
    let max = 0;
    for (let node in graph) {
        let current = explore2(graph, node, visited);
        if (current > max) max = current;
    }

    return max;
}
  
const explore2 = (graph, node, visited) => {
    if (visited.has(String(node))) return 0;
    visited.add(String(node));
    
    let count = 1;
    for (let n of graph[node]) {
        count += explore2(graph, n, visited)
    }

    return count;
}

const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph2(edges);
    const visited = new Set([nodeA]);
    const queue = [ [nodeA, 0] ];
    while (queue.length) {
        let [current, count] = queue.shift();
        if (current === nodeB) return count;
        for (let neighbor of graph[current]) {
        if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push([neighbor, count + 1])
        }
        }
    }
    return -1;
}

const buildGraph2 = edges => {
    const graph = {};
    for (let edge of edges) {
        let [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const islandCount = (grid) => {
    // todo
    let visited = new Set()
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (explore1(grid, i, j, visited)) count++;
        }
    }
    return count;
};
  
const explore1 = (grid, i, j, visited) => {
    if (i < 0 || i >= grid.length ||
        j < 0 || j >= grid[0].length) return false;
    if (visited.has(`${i},${j}`)) return false;
    visited.add(`${i},${j}`);

    if (grid[i][j] === 'W') return false;
    explore1(grid, i + 1, j, visited);
    explore1(grid, i - 1, j, visited);
    explore1(grid, i, j + 1, visited);
    explore1(grid, i, j - 1, visited);
    return true;
}

const minimumIsland = (grid) => {
    let visited = new Set();
    let min = Infinity;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let current = explore3(grid, i, j, visited);
            if (current !== 0 && current < min) min = current;
        }
    }
    return min;
};
const explore3 = (grid, i, j, visited) => {
    if (i < 0 || i >= grid.length 
        || j < 0 || j >= grid[0].length) return 0;
    if (visited.has(`${i},${j}`)) return 0;
    visited.add(`${i},${j}`)
    if (grid[i][j] === 'W') return 0;
    let count = 1;
    count += explore3(grid, i + 1, j, visited, count);
    count += explore3(grid, i - 1, j, visited, count);
    count += explore3(grid, i, j + 1, visited, count);
    count += explore3(grid, i, j - 1, visited, count);
    return count;
}

const closestCarrot = (grid, startRow, startCol) => {
    let visited = new Set([`${startRow},${startCol}`]);
    let queue = [[startRow, startCol, 0]];
    let deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (queue.length) {
        let [row, col, dist] = queue.shift();
        if (grid[row][col] === 'C') return dist;
        for (let delta of deltas) {
            let [cRow, cCol] = delta;
            let dRow = row + cRow;
            let dCol = col + cCol;
            if (dRow >= 0 && dRow < grid.length
            && dCol >= 0 && dCol < grid[0].length
            && grid[dRow][dCol] !== 'X'
            && !visited.has(`${dRow},${dCol}`)) {
                visited.add(`${dRow},${dCol}`)
                queue.push([dRow, dCol, dist + 1])
            }
        }
    }
    return -1;
};

const longestPath = (graph) => {
    let distances = {};
    for (let node in graph) {
      if (graph[node].length === 0) { //initialize the terminal nodes
        distances[node] = 0;
      }
    }
    for (let node in graph) {
      explore4(graph, node, distances);
    }
    return Math.max(...Object.values(distances))
}
const explore4 = (graph, node, distances) => {
    if (node in distances) return distances[node];

    let maxLength = 0;
    for (let neighbor of graph[node]) {
        const attempt = explore4(graph, neighbor, distances);
        if (attempt > maxLength) maxLength = attempt;
    }

    distances[node] = maxLength + 1;
    return distances[node];
}

const semestersRequired = (numCourses, prereqs) => {
    let graph = buildGraph1(numCourses, prereqs);
    let distances = {};
    for (let node in graph) {
      if (graph[node].length === 0) distances[node] = 1;
    }
    
    for (let node in graph) {
      traverse(node, graph, distances)
    }
    return Math.max(...Object.values(distances));
};

const traverse = (node, graph, distances) => {
    if (node in distances) return distances[node];

    let max = 0;
    for (let neighbor of graph[node]) {
        let current = traverse(neighbor, graph, distances);
        if (current > max) max = current;
    }
    distances[node] = max + 1;
    return distances[node];
}

const buildGraph1 = (numCourses, prereqs) => {
    let graph = {};
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
    }
    for (let prereq of prereqs) {
        let [a, b] = prereq;
        graph[a].push(b);
    }
    return graph;
}

const bestBridge = (grid) => {
    let mainIsland;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            const potentialIsland = traverseIsland(grid, r, c, new Set());
            if (potentialIsland.size > 0) {
                mainIsland = potentialIsland;
                break;
            }
        }
    }

    const visited = new Set(mainIsland)
    const queue = [];
    for (let pos of mainIsland) {
        const [r, c] = pos.split(',').map(Number);
        queue.push([r, c, 0])
    }

    while (queue.length > 0) {
        const [ r, c, distance ] = queue.shift();
        const pos = r + ',' + c;
        if (grid[r][c] === 'L' && !mainIsland.has(pos)) {
            return distance - 1;
        }
        
        let deltas = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for (let delta of deltas) {
            let [dRow, dCol] = delta;
            let nRow = r + dRow;
            let nCol = c + dCol;
            let nPos = nRow + ',' + nCol
            if (isInbounds(grid, nRow, nCol) && !visited.has(nPos)) {
                visited.add(nPos)
                queue.push([nRow, nCol, distance + 1]);
            }
        }
    }
};

const isInbounds = (grid, r, c) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    return rowInbounds && colInbounds;
}

const traverseIsland = (grid, r, c, visited) => {
    if (!isInbounds(grid, r, c) || grid[r][c] === "W") return visited;

    const pos = r + ',' + c;
    if (visited.has(pos)) return visited;
    visited.add(pos);

    traverseIsland(grid, r - 1, c, visited);
    traverseIsland(grid, r + 1, c, visited);
    traverseIsland(grid, r, c - 1, visited);
    traverseIsland(grid, r, c + 1, visited);

    return visited;
}