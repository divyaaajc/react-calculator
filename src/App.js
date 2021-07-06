import { useState } from 'react';

import * as math from 'mathjs';

import './App.css';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  const buttonColour = "#D3987C"
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (value) => {
    setText((text) => [...text, value + " "]);
  };

  const calculateSum = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calculator-container">
      <Input text={text} result={result}/>
        <div className="row">
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button symbol="9" handleClick={addToText}/>
          <Button symbol="/" colour={buttonColour} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText}/>
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button symbol="*" colour={buttonColour} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button symbol="+" colour={buttonColour} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="." handleClick={addToText}/>
          <Button symbol="=" handleClick={calculateSum}/>
          <Button symbol="-" colour={buttonColour} handleClick={addToText}/>
        </div>
        <Button symbol="Clear" colour="#EE615F" handleClick={resetInput}/>
      </div>
    </div>
  );
}

export default App;
