
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

const deapthFirstValue = (root)=>{
    if (root == null) return [];
    const LeftValues = deapthFirstValue(root.left);
    const RightValues = deapthFirstValue(root.right);

    return [root.value ,...LeftValues, ...RightValues]

}

const peepes = ['phelip','json','james','micheal','joseph','peter','paul','john','james','joseph','peter','paul','john','james','joseph','peter','paul','john'];
const newPessps = ['brain',...peepes,'phelip'];
console.log(newPessps);

