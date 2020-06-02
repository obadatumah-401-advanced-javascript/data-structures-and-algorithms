'use strict';

const Linkedlist = require('../linkedList/linked-list');

function mergeLists (list1,list2){
    const newLL = new Linkedlist();
    let currentNode1 = list1.head;
    let currentNode2 = list2.head;
    while(currentNode1 || currentNode2){
      if(currentNode1){
        newLL.append(currentNode1.value);
        currentNode1=currentNode1.next;
      }
      if(currentNode2){
        newLL.append(currentNode2.value);
        currentNode2=currentNode2.next;
      }
    }
    let str = newLL.toString();
    return str;
    }


module.exports = mergeLists;    
