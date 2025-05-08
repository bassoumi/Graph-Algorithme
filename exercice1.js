class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

const deepfirstvalue = (root) => { //a
    if (!root) return null;
    const result = [];
    const stack = [root]; //stack = [a,b]


    while (stack.length > 0) { // stack.lenght = 2 > 0
        const currentNode = stack.pop(); // currentNode = b, stack = [a]
        console.log(currentNode.value); 
        result.push(currentNode.value); // result = [a,b]


        if (currentNode.right) stack.push(currentNode.right); // stack = [a,c]
        if (currentNode.left) stack.push(currentNode.left); // stack = [a,b]

    }

    return result;
}

console.log(deepfirstvalue(a)); // Output: [ 'a', 'b', 'd', 'e', 'c', 'f' ]


const breadth = (root) => {
    if (!root) return [];

    const queue = [root];
    const result = [];

    while (queue.length > 0) {
        const node = queue.shift(); // Retire le premier élément
        console.log(node.value);
        result.push(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return result;
};

console.log(breadth(a)); // Output: [ 'a', 'b', 'c', 'd', 'e', 'f' ]
