class Node {
    constructor(data) {
        this.data = data;
        this.next_node = null;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data
    }
    getNextNode() {
        return this.next_node;
    }
    setNextNode(node) {
        this.next_node = node;
    }
}

class LinkedList {
    constructor() {
        this.root_node = null;
    }
    add(data) {
        let newNode = new Node(data);

        if (this.root_node == null) {
            this.root_node = newNode;
        } else {
            let _root = this.root_node;
            while (_root.getNextNode() != null) {
                _root = _root.getNextNode();
            }
            _root.setNextNode(newNode);
        }
    }
    getItemAtIndex(index) {
        let _root = this.root_node;
        let _index = 0;
        while (_root.getNextNode() != null) {
            if (_index === index) return _root;

            _root = _root.getNextNode();
            _index = _index + 1;
        }

        return null;
    }
    insert(data, index) {
        let newNode = new Node(data);
        if (this.root_node == null) {
            this.root_node = newNode;
        } else if (index === 0) {
            let _tempNode = this.root_node;
            this.root_node = newNode;
            this.root_node.setNextNode(_tempNode);
        } else {
            let leftNode = this.getItemAtIndex(index - 1);
            if (leftNode == null) throw new Error("Invalid index: " + index);

            let nodeAtIndex = leftNode.getNextNode();
            leftNode.setNextNode(newNode);
            newNode.setNextNode(nodeAtIndex);
        }
    }
    remove(data) {
        let _root = this.root_node;
        if (_root == null) return;

        let _previousNode = null;
        while (_root != null) {
            if (data == _root.getData()) {
                _previousNode.setNextNode(_root.getNextNode());
                break;
            }

            _previousNode = _root;
            _root = _root.getNextNode();
        }
    }
    toList() {
        let _list = [];

        let _root = this.root_node;
        while (_root != null) {
            _list.push(_root.getData());
            _root = _root.getNextNode();
        }

        return _list;
    }
    pretty() {
        return  this.toList().join("->");
    }
}

let lList = new LinkedList();
lList.add(1);
lList.add(2);
lList.add(2);
lList.add(4);
lList.insert(0, 0);
lList.insert(5, 2);
console.log(lList.toList());
console.log(lList.pretty());
console.log(lList.remove(4));
console.log(lList.pretty());