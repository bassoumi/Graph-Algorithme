const smallestIland = (grid) => {
    const visited = new Set();
    let smallest = Infinity; 
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
       const size = explore(grid, r, c, visited);
       if(size < smallest && size > 0){
              smallest = size;
            }
        }
    }
    return smallest;
}

const explore = (grid, r, c, visited) => {
    const rowIn = r >= 0 && r < grid.length;
    const colIn = c >= 0 && c < grid[0].length;
    if (!rowIn || !colIn) return false;
    if (grid[r][c] === 0) return false;

    const pos = r + ',' + c;
    if (visited.has(pos)) return false;
    visited.add(pos);

    let size = 1; 

    size += explore(grid, r - 1, c, visited); 
    size += explore(grid, r + 1, c, visited); 
    size += explore(grid, r, c - 1, visited); 
    size += explore(grid, r, c + 1, visited); 


    return size; 
}


const grid = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 1],
    [0, 1, 1, 0, 0],
    [1, 0, 0, 1, 1]
];


console.log(smallestIland(grid)); // Output: 4