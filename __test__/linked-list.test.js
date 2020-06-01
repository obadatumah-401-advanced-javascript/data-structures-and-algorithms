'use strict';

const Linkedlist = require('../linkedList/linked-list');

describe('Linked List', ()=> {
    it('constructor()', ()=> {
        let list = new Linkedlist();
        expect(list.head).toBeNull();
    });
});

describe('add to Linked List', ()=> {
    it('append()', ()=> {
        let list = new Linkedlist();
        let initialValue = 'First';
        list.append(initialValue);
        expect(list.head.value).toEqual(initialValue);
    });
});

describe('Search for values in Linked List', ()=> {
    it('includes()', ()=> {
        let list = new Linkedlist();
        let targetValue = 'target';
        list.append(targetValue);
        expect(list.includes(targetValue)).toBeTruthy();
    });
});

describe('convert the linked list to string', ()=> {
    it('toString()', ()=> {
        let list = new Linkedlist();
        let nodeOne = 'one';
        let nodeTwo = 'two';
        let nodeThree = 'three';
        list.append(nodeOne);
        list.append(nodeTwo);
        list.append(nodeThree);
        expect(list.toString()).toEqual('{ one } -> { two } -> { three } -> NULL');
    });
});

describe('insert a value before a choosen value', ()=> {
    it('insertBefore()', ()=> {
        let list = new Linkedlist();
        let nodeOne = 'one';
        let nodeTwo = 'two';
        let nodeThree = 'three';
        list.append(nodeOne);
        list.append(nodeTwo);
        list.append(nodeThree);
        let newValue = 'target';
        let value = 'two';
        list.insertBefore(value,newValue);

        expect(list.toString()).toEqual('{ one } -> { target } -> { two } -> { three } -> NULL');
    });
});

describe('insert a value after a choosen value', ()=> {
    it('insertAfter()', ()=> {
        let list = new Linkedlist();
        let nodeOne = 'one';
        let nodeTwo = 'two';
        let nodeThree = 'three';
        list.append(nodeOne);
        list.append(nodeTwo);
        list.append(nodeThree);
        let newValue = 'target';
        let value = 'two';
        list.insertAfter(value,newValue);

        expect(list.toString()).toEqual('{ one } -> { two } -> { target } -> { three } -> NULL');
    });
});