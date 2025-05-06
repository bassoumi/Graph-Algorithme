
// search if we can found a path between two nodes in a graph (the  src and the dst ) method should return true or false

const graph = {
    a:['c', 'b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

const hasPath = (graph, src, dst) => {
    if (src==dst) return true;

    for(let neighbot of graph[src]){
        if(hasPath(graph,neighbot,dst)=== true){
            return true;
        }

    }

    return false;


}

console.log( hasPath(graph, 'a', 'f') );

//breadth :

const breadth = (graph, source, target) => {
    const queue = [source];

    while(queue.length >0){
        const current = queue.shift();
        if(current === target) return true;

        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
    return false;

    }


console.log(breadth(graph, 'a', 'f'));