


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
    'a',
    new Node('b',
      new Node('d')    // b.left = 'd'
    ),
    new Node('c',
      new Node('e'),   // c.left  = 'e'
      new Node('f')    // c.right = 'f'
    )
  );

  const deepFirstValue = (root, target) => {
    if (!root) return false;
  
    const stack = [root];
  
    while (stack.length > 0) {
      const current = stack.pop();
      console.log(current.val);  // fixed property name
  
      if (current.val === target) return true;
  
      // Push right first so left is processed first
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
  
    return false;
  };
  
  console.log(deepFirstValue(tree, 'e')); // Output: true
  

