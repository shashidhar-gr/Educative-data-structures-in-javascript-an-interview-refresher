var Node = require('./Node').Node;

class LinkedList {
    constructor() {
        this.head = new Node(-1);
        this.length = 0;
    }

    isEmpty() {
        return (this.length == 0)
    }

    insertAtHead(data) {
        let newNode = new Node(data);
        newNode.nextElement = this.head.nextElement;
        this.head.nextElement = newNode;

        this.length++;

        return this;
    }
    
    insertAtTail(list, value) {
        let newNode = new Node(value);

        if(this.isEmpty()) {
            this.head.nextElement = newNode;
        }
        else {
            let tempNode = this.head.nextElement;
            while(tempNode.nextElement !== null) {
                tempNode = tempNode.nextElement;
            }

            tempNode.nextElement = newNode;
        }
        this.length++;
        return this;
    }

    insertAtPos(data, pos) {
        let newNode = new Node(data);

        
    }

    printList() {
        let tempNode = this.head.nextElement;

        if(tempNode == null)
            console.log("Linked list empty");
        
        while(tempNode.nextElement !== null) {
            process.stdout.write(String(tempNode.data));
            process.stdout.write(" -> ");
            tempNode = tempNode.nextElement;
        }
    }
}

exports.LinkedList = LinkedList;