const shortPath = (edges,nodeA,nodeB)=>{
    const graph = buildGraph(edges);
    const queue = [[nodeA,0]];
    while(queue.length >0 ){
    const [ current , distance ]= queue.shift();
    if (current === nodeB) return distance;
    for (let neighbor of graph[current]){
        queue.push(neighbor);
    }
}
}



const buildGraph = (edges) => {
    const graph ={};
    for (let edge of edges){
        const [a,b]= edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);

        graph[b].push(a);

    }
    return graph;
}