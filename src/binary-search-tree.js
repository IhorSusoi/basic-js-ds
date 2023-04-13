const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.rootEl=null;
  }

  root() {
    return this.rootEl;
  }

  add(value) {

    this.rootEl = addWithin(this.rootEl, value);

    function addWithin(node, value){

      if(!node){
        return new Node (value);
      }

      if(node.data === node){
        return node;
      }

      if(value < node.data){
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  }

  has(value) {
    return searchWithin(this.rootEl, value);

    function searchWithin(node, value){
      if(!node){
        return false;
      }

      if(node.data === value){
        return true;
      }

      if(value < node.data){
        return searchWithin(node.left, value);
      } else {
        return searchWithin(node.right, value);
      }
    }
  }

  find(value) {
    return findWithin(this.rootEl, value);

    function findWithin(node, value){
      if(!node){
        return null;
      }

      if(node.data === value){
        return node;
      }

      if(value < node.data){
        return findWithin(node.left, value);
      } else {
        return findWithin(node.right, value);
      }
    }
  }

  remove(value) {
    this.rootEl= removeWithin(this.rootEl, value);

    function removeWithin(node,value){

      if(!node) return null;

      if(value < node.data){
        node.left=removeWithin(node.left, value);
        return node;
      } else if(value > node.data){
        node.right=removeWithin(node.right, value);
        return node;
      } else {

        if(!node.left && !node.right) {
          return null;
        }

        if(!node.left){
          node = node.right;
          return node;
        }

        if(!node.right){
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while(minRight.left){
          minRight=minRight.left;
        }
        node.data=minRight.data;
        node.right = removeWithin(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if(!this.rootEl)return null;

    let node = this.rootEl;

    while(node.left){
      node=node.left;
    }

    return node.data;
  }

  max() {
    if(!this.rootEl)return null;

    let node = this.rootEl;

    while(node.right){
      node=node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};