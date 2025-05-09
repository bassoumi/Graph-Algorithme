
function Node(val, left = null, right = null) {
    this.val   = val;
    this.left  = left;
    this.right = right;
  }
  
  // 2) Build this shape:
  //
  //       'a'
  //       /  \
  //     'b'  'c'
  //     /    / \
  //   'd'  'e' 'f'
  //
  const tree = new Node(
    1,
    new Node(2,
      new Node(3)    // b.left = 'd'
    ),
    new Node(4,
      new Node(5),   // c.left  = 'e'
      new Node(6)    // c.right = 'f'
    )
  );


const sumTree = (root) =>{
    if (!root) return 0;
let sum = 0;
    const stack = [root];
    while (stack.length > 0){
        const node = stack.pop();
        sum += node.val;
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return sum;
}

const sum = sumTree(tree);
console.log(sum); // Output: 28