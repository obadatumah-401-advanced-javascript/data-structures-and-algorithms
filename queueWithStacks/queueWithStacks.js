'use strict';

class Stack {
    constructor() {
        this.storage = new Array();
        this.top = null;
    }

    push(anyValue) {
        this.storage.unshift(anyValue);
        this.top = anyValue;
        return this.storage;
    }

    pop() {
        if (this.storage.length == 0) {
            return 'the stack is empty';
        }
        else {
            let popItem = this.storage.shift();
            this.top = this.storage[0];
            return popItem;
        }
    }

    peek() {
        if (this.storage.length == 0) {
            return 'the stack is empty';
        }
        else {
            return this.top;
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
        
        if (this.storage.length == 0) {
            this.front = anyValue;
        }
        this.storage.push(anyValue);
        return this.storage;
    }

    dequeue() {
        if (this.storage.length == 0) {
            return 'the queue is empty';
        }
        else {
            let dequeueItem = this.storage.shift();
            this.front = this.storage[0];
            return dequeueItem;
        }
    }

    peek() {
        if (this.storage.length == 0) {
            return 'the queue is empty';
        }
        else {
            return this.front;
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

class PseudoQueue {
  constructor(){
    this.front = null;
    this.pseudoQueueSpace = [];
    this.stack = new Stack();

  }
  enqueue (value){
    this.stack.push(value);
    this.pseudoQueueSpace = this.stack.storage;
    this.front = this.pseudoQueueSpace[0];
    return this.pseudoQueueSpace;
  }

  dequeue (){
    this.stack.pop();
    this.pseudoQueueSpace = this.stack.storage;
    this.front = this.pseudoQueueSpace[0];
    return this.pseudoQueueSpace
  }
  peek(){
    return this.front ? this.front.value : 'The queue space is empty';
  }
}