import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [numColor, setNumColor] = useState("green");
  const [userInput, setUserInput] = useState(1);
  const colorChangeHandler = ()=>{
    
  }
  return (
    <div>
      <button
        onClick={() => {
          if (num % 2 !== 0) {
            setNumColor("green");
          } else {
            setNumColor("red");
          }
          setNum(num + 1);
        }}
      >
        +
      </button>
      <h1 style={{ color: numColor }}>{num}</h1>
      <button
        onClick={() => {
          if (num % 2 !== 0) {
            setNumColor("green");
          } else {
            setNumColor("red");
          }
          setNum(num - 1);
        }}
      >
        -
      </button>

      <h2>Number Change: {userInput}</h2>
      <input
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        value={userInput}
      ></input>
      <button
        onClick={() => {
          setNum(num - userInput);
          setUserInput("");
        }}
      >
        Save
      </button>
    </div>
  );
};
export default App;
