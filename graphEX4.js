
// This function takes a graph represented as an adjacency list and returns the size of the largest connected component in the graph.
// A connected component is a subset of the graph where there is a path between any two nodes in that subset. The function uses depth-first search (DFS) to explore the graph and find the size of the largest connected component. It keeps track of visited nodes using a Set and updates the size of the largest component found during the exploration.
// The graph is represented as an object where keys are node identifiers and values are arrays of neighboring nodes. The function iterates through each node in the graph, exploring its neighbors recursively to calculate the size of the connected component it belongs to. Finally, it returns the size of the largest connected component found.

const largestComponent = (graph) => {
    const visited = new Set();
    let longest = 0 ;

    for (let node in graph){
        const size = (exploreLargest(graph,node,visited));
        if(size >longest){
            longest = size;
        }
    }

    return longest;
}

const exploreLargest = (graph, node,visited) =>{
    if (visited.has(String(node)))return 0;

    visited.add(String(node));
    let size = 1;
    for (let neighbor of graph[node]){
        size += exploreLargest(graph, neighbor, visited);
    }
    return size;
}



const graph = ({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  });
  console.log(largestComponent(graph)); 