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