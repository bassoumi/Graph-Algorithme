
// Given an undirected graph, this function returns the number of connected components in the graph.
// A connected component is a subset of the graph where there is a path between any two nodes in that subset.
// The function uses depth-first search (DFS) to explore the graph and count the number of connected components.
// It takes a graph represented as an adjacency list as input and returns the count of connected components.
// The graph is represented as an object where keys are node identifiers and values are arrays of neighboring nodes.
// The function uses a Set to keep track of visited nodes and a counter to count the number of connected components.


const connectedComponents = (graph) => {
    const visited = new Set();
    let count = 0 ;

    for (node in graph){
        if (explore(graph,node, visited)=== true){
            count++;
        }
    }
return count;
}

const explore = (graph, node,visited) =>{
    if (visited.has(String(node))) return false;
    visited.add(String(node));
    for (let neighbor of graph[node]){
        explore(graph, neighbor, visited);
    }
    return true;
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
  console.log(connectedComponents(graph)); // 2
  