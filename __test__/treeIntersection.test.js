'use strict';

const Tree = require('../treeIntersection/treeIntersection');

describe('Tree Intersection', () => {
    var tree,tree2;
    beforeAll(()=>{
        // tree one
        const one = new Tree.Node(200);
        const two = new Tree.Node(150);
        const three = new Tree.Node(3);
        const four = new Tree.Node(70);
        const five = new Tree.Node(5);
        const six = new Tree.Node(10);
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
        
        // ////////////////////////////////////////////////////////////////////////////////////////////////
        // tree two
        const one1 = new Tree.Node(200);
        const two2 = new Tree.Node(150);
        const three3 = new Tree.Node(50);
        const four4 = new Tree.Node(70);
        const five5 = new Tree.Node(80);
        const six6 = new Tree.Node(300);
        const seven7 = new Tree.Node(10);
        const eight8 = new Tree.Node(5);
        const nine9 = new Tree.Node(1);
        one1.left = two2;
        one1.right = three3;
        three3.right = four4;
        three3.left = five5;
        two2.left = six6;
        six6.right = seven7;
        seven7.left = eight8;
        seven7.right = nine9;
         tree = new Tree.BinaryTree(one);
         tree2 = new Tree.BinaryTree(one1);
    
    });
    it('Tree preOrder created for the two trees', () => {
        const expected = [200, 150, 10,  7, 8,9,   3,  5, 70];
        const expected2 = [200, 150, 300, 10, 5,1,  50,  80, 70];
        const preOrderResult = tree.preOrder();
        const preOrderResult2 = tree2.preOrder();
        expect(preOrderResult).toEqual(expected);
        expect(preOrderResult2).toEqual(expected2);
    });

    it('tree Intersection', () => {
        const expected = [ 200, 150, 10, 5, 70 ];
        const Intersection = Tree.tree_intersection(tree.preOrder(),tree2.preOrder())
        expect(Intersection).toEqual(expected);
    });
});