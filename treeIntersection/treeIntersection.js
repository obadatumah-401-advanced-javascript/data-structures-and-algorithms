'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    const result = [];
    const traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
  
}

function tree_intersection(tree1,tree2){
  let results = [];
  tree1.forEach(val =>{
    if(tree2.includes(val)) results.push(val);
  });
  return results;
}

module.exports = {
    Node,
    BinaryTree,
    tree_intersection
  }