var Node = require('./Node').Node;
var assert = require('assert');

describe('Node', function() {
    it('Node with empty data', function() {
        let node  = new Node();
        assert.equal(node.data, null)
        assert.equal(node.nextElement, null)
    })
    it('Node with value', function() {
        let node  = new Node(10);
        let nextNode = new Node(11);
        node.nextElement = nextNode;
        assert.equal(node.data, 10)
        assert.notEqual(node.nextElement, null)
        assert.equal((node.nextElement).data, 11)
        assert.equal((node.nextElement).nextElement, null)
    })
});