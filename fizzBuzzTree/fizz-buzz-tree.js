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

}

function FizzBuzzTree(tree) {
    tree.forEach((val, i) => {
        if (val % 3 == 0 && val % 5 == 0) {
            tree[i] = 'FizzBuzz';
        }
        else if (val % 3 == 0) {
            tree[i] = 'Fizz';
        }
        else if (val % 5 == 0) {
            tree[i] = 'Buzz';
        }
        else {
            tree[i] = val.toString();
        }
    });
    return tree;
}

module.exports = {
    Node,
    BinaryTree,
    FizzBuzzTree
}