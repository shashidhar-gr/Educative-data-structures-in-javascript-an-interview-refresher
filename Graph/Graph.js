var LinkedList = require('../LinkedList/LinkedList').LinkedList;

class Graph {
    constructor(vertices = 0) {
        this.vertices = vertices;
        this.list = [];

        for(let i = 0; i < this.vertices; i++) {
            this.list.push(new LinkedList())
        }
    }
}

exports.Graph = Graph;