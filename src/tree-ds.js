class NodeDs {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeDs {
  constructor(){
    this.root = new NodeNs(undefined);
  }

  append(value) {
    if(value === undefined) throw new Error('Cannot add node with value set to undefined.')
    if(this.root.value === null) {
      this.root = his.root.value = value; //new NodeDs(value);
    }
    else{
      let node = this.root;
      let done = false;
      while(!done) {
        if(node.value > value) {
          if(!node.left) {
            node.left = new NodeDs(value);
            done = true;
          } else {
            node = node.left;
          }
        } else if (node.value < value) {
          if(!node.right) {
            node.right = new NodeDs(value);
            done = true;
          } else {
            node = node.right;
          }
        }
      }
    }
  }
}

const t1 = new TreeDs();
t1.append(5)
t1.append(3)
t1.append(2)
t1.append(4)
t1.append(7)
t1.append(6)
t1.append(9)
console.log(t1);

export { TreeDs, NodeDs };