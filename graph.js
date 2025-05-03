const graph = {
    a:['k', 'b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

const deapth = (graph,source)=>{
    const stack = [source];

    while(stack.length >0 ){
        const curreent = stack.pop();
        console.log(curreent);

        for (let neighbor of graph[curreent]){
            stack.push(neighbor);
        }
    }

}

const breadth = (graph ,source)=>{
    const queue = [source]
    while(queue.length >0){
        const current = queue.shift();
        console.log(current);

        for (let neighbor of graph[current]){
            queue.push(neighbor);
        }
 
    }
}

breadth(graph,'a');
console.log('------------------------------------------')
deapth(graph,'a')