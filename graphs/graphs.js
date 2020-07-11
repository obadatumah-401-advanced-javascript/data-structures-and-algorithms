'use strict';

class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vortex, weight = 0) {
        this.vortex = vortex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this._adjacencyList = new Map();
    }

    addVertex(vertex) {
        this._adjacencyList.set(vertex, []);
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
        }else{
            console.log('Vertex not found');
        }
    }

    size() {
        return this._adjacencyList.size;
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
// graph.addDirectedEdge(ten, two);
// graph.addDirectedEdge(ten, six);
// graph.addDirectedEdge(ten, three);
// graph.addDirectedEdge(ten, seven);
// graph.addDirectedEdge(two, seven);
// graph.addDirectedEdge(six, seven);
// graph.addDirectedEdge(six, eight);
// graph.addDirectedEdge(three, seven);
// graph.addDirectedEdge(eight, three);

// graph.getNodes();
// graph.getNeighbors(two);
// graph.getNeighbors(six);
// graph.getNeighbors(ten);
// graph.size();