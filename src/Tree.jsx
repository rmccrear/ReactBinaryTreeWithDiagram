import './Tree.css'

function Node(props) {
  const { value, left, right } = props;

  return (
    <li>
      {
        left || right ?
          <>
            <span>{value}</span>
            <ul>
              
              {left ? <Node {...left}></Node> : ''}
              {right ? <Node {...right}></Node> : ''}
            </ul>
          </>
          : <span>{ value===undefined ? 'NULL' : value}</span>
      }
    </li>
  )
}

function Tree(props) {
  const root = props.root;

  return (
    <div className='tree-diagram'>
      <ul className='tree-diagram__root'>
        <Node {...root} />
      </ul>
    </div>
  )
}

export {Node};

export default Tree;