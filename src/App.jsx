import './App.css'
import Tree from './Tree';
import NodeInput from './NodeInput';
import { TreeDs, NodeDs } from './tree-ds';
import { useState, useEffect } from 'react';

export default function App() {
  const [tree, setTree] = useState(new TreeDs());
/*
  tree.append(5)
  tree.append(3)
  tree.append(2)
  tree.append(4)
  tree.append(7)
  tree.append(6)
  tree.append(9)
*/
  
  useEffect(() => {
    console.log('use effect')
    tree.append(11)
    setTree(tree)
  }, [])


  const createNodeFromValue = (value) => {
    console.log("createNode", value);
    tree.append(value);
    setTree(tree);
  }
  return (
    <main>
      <Tree root={tree.root} createNodeFromValue={createNodeFromValue} />
      <NodeInput />
    </main>
  )
}
