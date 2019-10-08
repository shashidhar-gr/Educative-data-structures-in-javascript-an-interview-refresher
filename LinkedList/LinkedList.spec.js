var LinkedList = require('./LinkedList').LinkedList;
var assert = require('assert');

describe('Linked List', function() {
    it('Empty Linked list', function() {
        let list  = new LinkedList();
        assert.equal(list.head.nextElement, null)
        assert.equal(list.length, 0)
        assert.equal(list.isEmpty(), true)
    })
    it('Add node at head', function() {
        let list  = new LinkedList();
        list.insertAtHead(10);
        assert.notEqual(list.head.nextElement, null)
        assert.equal(list.length, 1)
        assert.equal(list.isEmpty(), false)
    })
    it('Add node at tail', function() {
        let list  = new LinkedList();
        list.insertAtTail(10);
        assert.notEqual(list.head.nextElement, null)
        assert.equal(list.length, 1)
        assert.equal(list.isEmpty(), false)
        list.printList();
    })
})