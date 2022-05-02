const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.myTree = null
  }

  root() {
    return this.myTree
  }

  add(data) {
    this.myTree = addNode(this.myTree, data);

    function addNode(node, data){
      if(!node){
        return new Node(data) 
      }

      if(node.data === data){
        return node;
      }else if(data < node.data){
        node.left = addNode(node.left, data)
      }else{
        node.right = addNode(node.right, data)
      }

      return node;
    }
  }

  has(data) {
    function hasNode(node, data){
      if(!node){
        return false
      }

      if(data == node.data){
        return true
      }

      if(data < node.data){
        return hasNode(node.left, data)
      }else{
        return hasNode(node.right, data)
      }
    }

    return hasNode(this.myTree, data);
  }

  find(data) {
    return findData(this.myTree, data);

    function findData(node, data){
      if(!node){
        return null
      }

      if(node.data == data){
        return node
      }

      if(data < node.data){
        return findData(node.left, data)
      }else{
        return findData(node.right, data)
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if(!this.myTree){
      return null;
    }

    let node = this.myTree;
    while(node.left){
      node = node.left
    }

    return node.data
  }

  max() {
    if(!this.myTree){
      return null;
    }

    let node = this.myTree;
    while(node.right){
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};