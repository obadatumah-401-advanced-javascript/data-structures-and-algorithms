'use strict';

const DS = require('../stacksAndQueues/stacks-and-queues');



describe('Stack push', () => {
    it('push()', () => {
        var stackTest = new DS.Stack();
        stackTest.push(1);
        expect(stackTest.peek()).toEqual(1);
        stackTest.push(2);
        stackTest.push(3);
        expect(stackTest.peek()).toEqual(3);
    });
});

describe('Stack pop', () => {
    it('pop()', () => {
        var stackTest = new DS.Stack();
        stackTest.push(1);
        stackTest.push(2);
        stackTest.push(3);
        expect(stackTest.pop()).toEqual(3);
    });
});

describe('Stack peek', () => {
    it('peek()', () => {
        var stackTest = new DS.Stack();
        stackTest.push(1);
        stackTest.push(2);
        stackTest.push(3);
        expect(stackTest.peek()).toEqual(3);
    });

    it('peek()', () => {
        var stackTest = new DS.Stack();
        expect(stackTest.peek()).toEqual('the stack is empty');
    });
});

describe('Queue Enqueue', () => {
    it('Enqueue()', () => {
        var queueTest = new DS.Queue();
        queueTest.enqueue(1);
        expect(queueTest.peek()).toEqual(1);
        queueTest.enqueue(2);
        queueTest.enqueue(3);
        expect(queueTest.peek()).toEqual(1);
    });
});
describe('Queue Dequeue', () => {
    it('dequeue()', () => {
        var queueTest = new DS.Queue();
        queueTest.enqueue(1);
        queueTest.enqueue(2);
        queueTest.enqueue(3);
        expect(queueTest.dequeue()).toEqual(1);
    });
});

describe('Queue peek', () => {
    it('peek()', () => {
        var queueTest = new DS.Queue();
        queueTest.enqueue(1);
        queueTest.enqueue(2);
        queueTest.enqueue(3);
        expect(queueTest.peek()).toEqual(1);
    });

    it('peek()', () => {
        var queueTest = new DS.Queue();
        expect(queueTest.peek()).toEqual('the queue is empty');
    });
});