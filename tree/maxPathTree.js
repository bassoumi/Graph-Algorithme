const maxPathSum = (root) => {
    if(!root) return 0;
    if (!root.left && !root.right) return root.val;
    const maxChild = Math.max(maxPathSum(root.left), maxPathSum(root.right));
    return root.val + maxChild;
}


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


const max = maxPathSum(tree);
console.log(max); // Output: 11
