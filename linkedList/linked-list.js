'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
        }
        this.tail = newNode;
        return newNode;
    }

    includes(value) {
        let currentNode = this.head;

        while (currentNode.next) {
            //   console.log('currentNode>>>>>>>',currentNode)
            if (value === currentNode.value) {

                return true;
            }
            currentNode = currentNode.next;

        }
        if (value === currentNode.value) {
            return true;
        }
        else
            return false;
    }

    toString() {
        let currentNode = this.head;
        let str = '';
        while (currentNode.next) {
            str += `{ ${currentNode.value} } -> `;
            currentNode = currentNode.next;
        }
        str += `{ ${currentNode.value} } -> NULL`;
        return str;
    }



    insertBefore(value, newVal) {
        const node = new Node(newVal);
        if (!this.head) {
            this.head = node;
            return this;
        }
        let currentNode = this.head;
        while (currentNode.next && currentNode.next.value !== value) {
            currentNode = currentNode.next;
        }
        node.next = currentNode.next;
        currentNode.next = node;
        return this;
    }

    insertAfter(value, newVal) {
        const node = new Node(newVal);
        if (!this.head) {
            this.head = node;
            return this;
        }
        let currentNode = this.tail;
        while (currentNode.previous && currentNode.previous.value !== value) {
            currentNode = currentNode.previous;
        }
        node.previous = currentNode.previous;
        node.next = currentNode;
        currentNode.previous.next = node;
        currentNode.previous = node;
        return this;
    }


}

module.exports = LinkedList;