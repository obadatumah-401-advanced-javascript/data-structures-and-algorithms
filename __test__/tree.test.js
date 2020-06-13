'use strict';

const Tree = require('../tree/tree');

describe('Tree', () => {
    beforeAll(() => {
        const one = new Tree.Tree.Node(1);
        const two = new Tree.Node(2);
        const three = new Tree.Node(3);
        const four = new Tree.Node(4);
        const five = new Tree.Node(5);
        const six = new Tree.Node(6);
        const seven = new Tree.Node(7);
        const eight = new Tree.Node(8);
        const nine = new Tree.Node(9);
        one.left = two;
        one.right = three;
        three.right = four;
        three.left = five;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        const tree = new Tree.BinaryTree(one);
    });

    it('Traverses in pre-order', () => {
        const expected = [1, 2, 6, 7, 8, 9, 3, 5, 4];
        const preOrderResult = tree.preOrder();
        expect(preOrderResult).toEqual(expected);
    });
    it('Traverses in in-order', () => {
        const expected = [6, 8, 7, 9, 2, 1, 5, 3, 4];
        const inOrderResult = tree.inOrder();
        expect(inOrderResult).toEqual(expected);
    });
    it('Traverses in post-order', () => {
        const expected = [8, 9, 7, 6, 2, 5, 4, 3, 1];
        const postOrderResult = tree.postOrder();
        expect(postOrderResult).toEqual(expected);
    });

})