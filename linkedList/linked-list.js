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
        this.size = 0;
    }

    append(value) {
        this.size = this.size+1;
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

    fromEnd(number){
        let currentNode = this.tail;
        let counter = 0 ;
        if(number < this.size){
        while(counter != number){
          currentNode = currentNode.previous;
          counter++;
        }
        return currentNode.value;
      }
      else{
        return 'exception';
      }
      }


}

module.exports = LinkedList;