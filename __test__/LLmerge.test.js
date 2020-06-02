'use strict';

const merge = require('../llMerge/ll-merge');
const Linkedlist = require('../linkedList/linked-list');

describe('Linked List', () => {
    it('merge()', () => {
        let list1 = new Linkedlist();
        let list2 = new Linkedlist();
        let mergeList = new Linkedlist();
        list1.append("1");
        list1.append("2");
        list1.append("3");

        list2.append("4");
        list2.append("5");
        list2.append("6");
        expect(merge(list1, list2)).toBe("{ 1 } -> { 4 } -> { 2 } -> { 5 } -> { 3 } -> { 6 } -> NULL");
    });
});

describe('Linked List', () => {
    it('merge() even when size is different', () => {
        let list1 = new Linkedlist();
        let list2 = new Linkedlist();
        let mergeList = new Linkedlist();
        list1.append("1");
        list1.append("2");
        list1.append("3");

        list2.append("4");
        list2.append("5");
        list2.append("6");
        list2.append("7");
        list2.append("8");
        expect(merge(list1, list2)).toBe("{ 1 } -> { 4 } -> { 2 } -> { 5 } -> { 3 } -> { 6 } -> { 7 } -> { 8 } -> NULL");
    });
});