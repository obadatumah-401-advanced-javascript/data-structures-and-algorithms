'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    insert(value) {
        let node = new Node(value);
        // console.log(node);
        if (!this.head) {
            this.head = node;
            return this;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
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

    toString(){
        let currentNode = this.head;
        let str='';
        while (currentNode.next){
           str += `{ ${currentNode.value} } -> `;
           currentNode = currentNode.next;
        }
        str += `{ ${currentNode.value} } -> NULL`;
        return str;
    }


}

module.exports = LinkedList;

// let node1 = new LinkedList();

// node1.insert("hi");
// node1.insert("hello");
// node1.insert("myname");
// node1.insert("Obada");
// console.log(node1.includes("Obada"));
// console.log('STRING <<<<<<<<<<<<',node1.toString());