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

    add(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    values() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
        this.hashing = [];
    }

    hash(key) {
        return key.split('').reduce((p, n) => {
            return p + n.charCodeAt(0)
        }, 0) * 599 % this.size;
    }

    add(key, value) {
        let hash = this.hash(key);
        this.hashing.push(hash);
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();

        }
        let entry = { [key]: value };
        this.map[hash].add(entry);
        return this.map[hash].head.value;

    }

    get(key) {
        let hash = this.hash(key);
        return this.map[hash].head.value[key];
    }

    contains(key) {
        let hash = this.hash(key);
        if (this.hashing.includes(hash)) {
            return true;
        }
        return false;

    }
}



// let myHash = new Hashmap(1024);
// myHash.add('Cat', 'Paghera');
// myHash.add('Owner', 'Israa');

// myHash.map.forEach((data, i) => {
//     console.log(i, data && data.values());
// });

// myHash.get('Owner');
// myHash.contains('Owner');

module.exports = Hashmap;