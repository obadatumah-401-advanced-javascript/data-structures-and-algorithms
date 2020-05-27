'use strict';

const Linkedlist = require('../linkedList/linked-list');

describe('Linked List', ()=> {
    it('constructor()', ()=> {
        let list = new Linkedlist();
        expect(list.head).toBeNull();
    });
});

describe('add to Linked List', ()=> {
    it('insert()', ()=> {
        let list = new Linkedlist();
        let initialValue = 'First';
        list.insert(initialValue);
        expect(list.head.value).toEqual(initialValue);
    });
});

describe('Search for values in Linked List', ()=> {
    it('includes()', ()=> {
        let list = new Linkedlist();
        let targetValue = 'target';
        list.insert(targetValue);
        expect(list.includes(targetValue)).toBeTruthy();
    });
});

describe('convert the linked list to string', ()=> {
    it('toString()', ()=> {
        let list = new Linkedlist();
        let nodeOne = 'one';
        let nodeTwo = 'two';
        let nodeThree = 'three';
        list.insert(nodeOne);
        list.insert(nodeTwo);
        list.insert(nodeThree);
        expect(list.toString()).toEqual('{ one } -> { two } -> { three } -> NULL');
    });
});