const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);

        if(this.length){
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;

        }else{
            this._head = node;
            this._tail = node;
        }
       
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;

    }

    at(index) {
        var currentNode = this._head;
        var count = 0;

    while (count < index) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode.data;
    
}

    insertAt(index, data) {
        var currentNode = this._head;
        var count = 0;
        var node = new Node(data);

        if(!this.length){  
            append(data);
            return this;
        }
        while (count < index-1){
            currentNode = currentNode.next;
            count++;
        }
       
       var temp = currentNode.next;
        currentNode.next = node;
        node.next = temp;
    }

    isEmpty() {
        if (!this.length) return true;
        else return false;
    }

    clear() {
       /* this._head = null;
        this._tail = null;*/
        if(!this.length) return this;
        this._tail.data = null;
        this._head.data = null;
        this.length = 0;
    }

    deleteAt(index) {
        var currentNode = this._head;
        var count = 0;
       if (this.length == 1){
        this._head = null;
        this._tail = null;
        return this; 
       } 
        while (count < index){
            currentNode = currentNode.next;
            count++;
        }
        var temp = currentNode.prev;
        temp.next = currentNode.next;
    }

    reverse() {
        var currentNode = this._head;
        var lastNode = this._tail;
        var temp;
        if (this._head === this._tail) return this;
        
        if (this.length % 2 == 0) 
            var n = this.length/2 ;
        else 
            var n = (this.length - 1)/2;

       for(var i=0; i < n; i++ ){
            temp = currentNode.data;
            currentNode.data = lastNode.data;
            lastNode.data = temp;
            currentNode = currentNode.next;
            lastNode = lastNode.prev;
        }
        /*return this;*/
    }

    indexOf(data) {
        var currentNode = this._head;
        var count = 0;
      
        /*while (currentNode.data !== data && count < this.length  ){
            currentNode = currentNode.next;
            count++;
        }
        if(currentNode.data === data) return count;
        else return (-1);*/
        for(var i = 0; i < this.length; i++){
            if (currentNode.data === data) return i;
            currentNode=currentNode.next;
        }
        return (-1);
}
}

module.exports = LinkedList;
