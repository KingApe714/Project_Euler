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