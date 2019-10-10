var Graph = require('./Graph').Graph;
var assert = require('assert');

describe('Graph', function() {
    it('should create graph object', function() {
        let graph = new Graph();
        assert.equal(graph.vertices, 0);
        assert.equal(graph.list.length, 0);
    })
    it('should create graph object with two vertices and two edges', function() {
        let graph = new Graph(2);
        assert.equal(graph.vertices, 2);
        assert.equal(graph.list.length, 2);
    })
})