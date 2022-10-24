const islandPerimeter = grid => {
    let count = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                //I know that I'm looking at a piece of land
                let north = i === 0 || grid[i - 1][j] === 0 ? 1 : 0;
                let east = j === 0 || grid[i][j - 1] === 0 ? 1 : 0;
                let south = i === grid.length - 1 || grid[i + 1][j] === 0 ? 1 : 0;
                let west = j === grid[0].length - 1 || grid[i][j + 1] === 0 ? 1 : 0;
                
                count += north + south + east + west;
            }
        }
    }
    
    return count;
};

const numIslands = grid => {
    let count = 0;
    let visited = new Set()
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (explore(grid, i, j, visited)) count++;
        }
    }
    
    return count;
};

const explore = (grid, i, j, visited) => {
    if (visited.has(`${i},${j}`)) return false;
    if (i < 0 || i >= grid.length
       || j < 0 || j >= grid[0].length) return false;
    if (grid[i][j] === "0") return false;
    
    visited.add(`${i},${j}`);
    
    explore(grid, i + 1, j, visited);
    explore(grid, i - 1, j, visited);
    explore(grid, i, j + 1, visited);
    explore(grid, i, j - 1, visited);
    
    return true;
}

const maxAreaOfIsland = grid => {
    let visited = new Set();
    let max = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let res = explore1(grid, i, j, visited);
            if (res > max) max = res;
        }
    }
    
    return max;
};

const explore1 = (grid, i, j, visited) => {
    if (visited.has(`${i},${j}`)) return 0;
    if (i < 0 || i >= grid.length
       || j < 0 || j >= grid[0].length) return 0;
    if (grid[i][j] === 0) return 0;
    
    visited.add(`${i},${j}`);
    let count = grid[i][j] === 1 ? 1 : 0;
    
    count += explore1(grid, i + 1, j, visited);
    count += explore1(grid, i - 1, j, visited);
    count += explore1(grid, i, j + 1, visited);
    count += explore1(grid, i, j - 1, visited);
    
    return count;
}
