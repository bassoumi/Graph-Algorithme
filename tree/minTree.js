

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


const minTree = (root)=>{
    if(!root) return 0;
    const stack = [root];

    let min = root.val;
    while (stack.length > 0){
        const current = stack.pop();
        if (current.val<min) min = current.val;
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);

}
    return min;
}

const min = minTree(tree);
console.log(min); // Output: 1