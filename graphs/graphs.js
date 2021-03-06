class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight = 0) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this._adjacencyList = new Map();
    }

    addVertex(vertex) {
        this._adjacencyList.set(vertex, []);
        // console.log(this._adjacencyList);
        return vertex;
    }

    addDirectedEdge(startVertex, endVertex, weight) {
        if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
            console.log('Connot create edge with missing vertex');
        } else {
            const edgeStartVertex = this._adjacencyList.get(startVertex);
            edgeStartVertex.push(new Edge(endVertex, weight));
        }
    }

    getNodes() {
        return this._adjacencyList;
    }

    getNeighbors(vertex) {
        if (this._adjacencyList.has(vertex)) {
            return this._adjacencyList.get(vertex);
        } else {
            console.log('Vertex not found');
        }
    }

    size() {
        return this._adjacencyList.size;
    }

    bfg(startNode) {
        const queue = [];
        const vistedNodes = new Set();

        queue.push(startNode);
        vistedNodes.add(startNode);

        while (queue.length) {
            const currentNode = queue.shift();
            const neighbors = this.getNeighbors(currentNode);

            for (let neighbor of neighbors) {
                const neighborNode = neighbor.vertex;
                if (vistedNodes.has(neighborNode)) {
                    continue;
                } else {
                    vistedNodes.add(neighborNode);
                }
                queue.push(neighborNode);
            }

        }

        console.log({ vistedNodes });

        return vistedNodes;
    }

    getEdge(array){
      

        let total=0;
        let counter=0;
        var connected = false;
        for(let i=0;i< array.length;i++){
          this._adjacencyList.get(array[i]).forEach(val =>{
            if(val.vertex == array[i+1]){
              connected = true;
            //   console.log('trueeeeeeeeeeeeee')
              total=total+val.weight;
              counter++;
            }
            if(array.length-1 !== counter){
              connected=false;
            } 
          })
        }
        if(connected) return `true , ${total} $`;
        else return `false , 0 $`
        
    }


  dfs(startNode) {

    const stack = [];
    const visitedNodes = new Set();

    stack.push(startNode);
    visitedNodes.add(startNode);

    while (stack.length) {

      const currentNode = stack.pop();

      const neighbors = this.getNeighbors(currentNode);

      for (let neighbor of neighbors) {

        const neighborNode = neighbor.vertex;

        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        stack.push(neighborNode);
      }
    }
    return visitedNodes;
  }

}


// const graph = new Graph();
// const ten = new Vertex(10);
// const two = new Vertex(2);
// const six = new Vertex(6);
// const seven = new Vertex(7);
// const three = new Vertex(3);
// const eight = new Vertex(8);
// graph.addVertex(ten);
// graph.addVertex(two);
// graph.addVertex(six);
// graph.addVertex(seven);
// graph.addVertex(three);
// graph.addVertex(eight);
// graph.addDirectedEdge(ten, two,50);
// graph.addDirectedEdge(ten, six,60);
// graph.addDirectedEdge(ten, three,70);
// graph.addDirectedEdge(ten, seven,80);
// graph.addDirectedEdge(two, seven,90);
// graph.addDirectedEdge(six, seven,100);
// graph.addDirectedEdge(six, eight,110);
// graph.addDirectedEdge(three, seven,120);
// graph.addDirectedEdge(eight, three,130);

// graph.getEdge([ten,eight])
// graph.dfs(ten)