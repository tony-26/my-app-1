import React, { useState } from "react";
import "./App.css";
import _ from "lodash";

export const App = () => {
  const [userInput, setUserInput] = useState("");
  const initialTasks = [
    { text: "wash the dishes", color: "green", isComplete: true },
    { text: "do homework", color: "blue", isComplete: false },
    { text: "play tennis", color: "black", isComplete: false },
  ];
  const [tasks, setTasks] = useState(initialTasks);
  const inputOnchangeHandler = (e) => {
    setUserInput(e.target.value);
  };
  const buttonOnclickHandler = () => {
    const newTask = { text: userInput, color: "black", isComplete: false };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    setUserInput("");
  };

  return (
    <div>
      <h1>Tasks {userInput}</h1>
      <input onChange={inputOnchangeHandler} value={userInput}></input>
      <button onClick={buttonOnclickHandler}>ADD</button>
      {tasks.map((e, i) => {
        const taskStyle = { color: e.color };
        return (
          <div style={taskStyle} key={i}>
            <input
              onChange={() => {
                const newTasks = _.cloneDeep(tasks);
                newTasks[i].isComplete = newTasks[i].isComplete ? false : true;
                setTasks(newTasks);
              }}
              type="checkbox"
              checked={e.isComplete}
            />
            {e.text}
          </div>
        );
      })}
    </div>
  );
};
