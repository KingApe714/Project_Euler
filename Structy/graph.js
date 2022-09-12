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