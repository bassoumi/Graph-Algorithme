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
  