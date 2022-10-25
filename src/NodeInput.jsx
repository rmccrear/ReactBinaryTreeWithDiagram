import { useState } from 'react';

function NodeInput(props) {
  const [textInput, setTextInput] = useState({ newNodeValue: '' });
  const handleTextInput = (e) => {
    const updatedText = e.target.value;
    const inputName = e.target.name;
    setTextInput({ ...textInput, [inputName]: updatedText });
  }
  function submitNewNodeValue() {
    const newNodeValue = textInput.newNodeValue;
    props.createNodeFromValue(newNodeValue);
  }

  return (
    <div>
      <input type='text'
        name='newNodeValue'
        onClick={handleTextInput} />
      <button onClick={submitNewNodeValue}>Add Node</button>
    </div>
  );
}

export default NodeInput;