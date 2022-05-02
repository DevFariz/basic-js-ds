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

  remove(data, node = this.myTree ) {
    if(!this.has(data)){
      return null;
    }

    if(data < node.data){
      node.left = this.remove(data, node.left)
    }else if(data > node.data){
      node.right = this.remove(data, node.right)
    }else{
      if(!node.left){
        return node.right
      }else if(!node.right){
        return node.left
      }else{
        node.data = this.min(node.right)
        node.right = this.remove(node.data, node.right)
      }
    }

    return node
  }

  min(node = this.myTree) {
    return (!node.left) ? node.data : this.min(node.left);
  }

  max(node = this.myTree) {
    return (!node.right) ? node.data : this.max(node.right)
  }
}

module.exports = {
  BinarySearchTree
};