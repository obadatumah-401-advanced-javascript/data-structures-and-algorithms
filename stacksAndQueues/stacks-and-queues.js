'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class Stack {
    constructor() {
        this.storage = new Array();
        this.top = null;
    }

    push(anyValue) {
        let newNode = new Node(anyValue);
        this.storage.unshift(newNode);
        newNode.next = this.top;
        this.top = newNode;
        return this.storage;
    }

    pop() {
        if (this.storage.length == 0) {
            return 'the stack is empty';
        }
        else {
            let popItem = this.storage.shift();
            this.top = this.storage[0];
            return popItem.value;
        }
    }

    peek() {
        if (this.storage.length == 0) {
            return 'the stack is empty';
        }
        else {
            return this.top.value;
        }
    }

    isEmpty() {
        if (this.storage.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

class Queue {
    constructor() {
        this.storage = new Array();
        this.front = null;
    }

    enqueue(anyValue) {
        let newNode = new Node(anyValue);

        if (this.storage.length == 0) {
            this.front = newNode;
        }
        this.storage.push(newNode);
        return this.storage;
    }

    dequeue() {
        if (this.storage.length == 0) {
            return 'the queue is empty';
        }
        else {
            let dequeueItem = this.storage.shift();
            this.front = this.storage[0];
            return dequeueItem.value;
        }
    }

    peek() {
        if (this.storage.length == 0) {
            return 'the queue is empty';
        }
        else {
            return this.front.value;
        }
    }

    isEmpty() {
        if (this.storage.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

module.exports = { Stack, Queue };