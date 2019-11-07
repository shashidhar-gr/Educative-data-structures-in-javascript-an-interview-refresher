var LinkedList = require('../LinkedList/LinkedList').LinkedList;

class Graph {
    constructor(vertices = 0) {
        this.vertices = vertices;
        this.list = [];

        for(let i = 0; i < this.vertices; i++) {
            this.list.push(new LinkedList())
        }
    }

    addEdge(source, destination) {
        this.list[source].insertAtHead(destination)
    }

    printGraph(){
        console.log(">>Adjacency List of Directed Graph<<");
        var i;
        for(i=0; i<this.list.length; i++){
          process.stdout.write("|"+String(i)+"| => ");
          let temp=this.list[i].getHead().nextElement;
          while(temp!=null){
            process.stdout.write("["+String(temp.data)+"] -> ");
            temp=temp.nextElement;
          }
          console.log("null ");
        }
      }
}

exports.Graph = Graph;