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
  inOrder() {
    const result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
  postOrder() {
    const result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    }
    traverse(this.root);
    return result;
  }

  breadthFirstTraversal(tree) {
    if (tree == null) {
      return;
    }
    let queue = [tree]
    let list = [];
    while (queue.length > 0) {
      let item = queue.shift()
      let value = item.value
      list.push(value)
      if (item.left == null && item.right == null) {
        continue
      }
      if (item.left != null) {
        queue.push(item.left)
      }
      if (item.right != null) {
        queue.push(item.right)
      }
    }
    return list;
  }
  findMaximumValue() {
    var max = 0;
    const traverse = (node) => {
      if (max < node.value) max = node.value;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return max;
  }

  oddSum() {
    var sum = 0;
    const traverse = (node) => {
      if (node.value %2 !==0) sum += node.value;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return sum;
  }

}

module.exports = {
  Node,
  BinaryTree
}