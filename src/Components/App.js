import React, { Suspense, useState } from "react";
import "./App.css";

export const App = () => {
  const [userInput, setUserInput] = useState("");
  const divStyle = { backgroundColor: "yellow" };
  const [initialToDos, setInitialToDos] = useState([
    "do homework",
    "do dishes",
    "play game",
  ]);
  const handleButtonClick = () => {
    setInitialToDos([...initialToDos, userInput]);
    setUserInput("");
  };
  const removeElementI = (arr, i) => {
    const newArr = arr.slice(0, i).concat(arr.slice(i + 1));
    return newArr;
  };
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  return (
    <div style={divStyle}>
      <h1>to dos {userInput}</h1>
      <input onChange={handleInputChange} value={userInput}></input>
      <button onClick={handleButtonClick}>clicked</button>
      {initialToDos.map((e, i) => {
        return (
          <div key={i}>
            {e}
            <button
              onClick={(e) => {
                setInitialToDos(removeElementI(initialToDos, i));
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};
