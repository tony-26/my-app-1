import React, { useState } from "react";
import "./App.css";
import _ from "lodash";

export const App = () => {
  const [userInput, setUserInput] = useState("");
  const [tasks, setTasks] = useState([
    "Do homework",
    "Paly game",
    "Do the dishes",
  ]);
  return (
    <div>
      <input
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        value={userInput}
      ></input>
      <button
        onClick={() => {
          setTasks([...tasks, userInput]);
          setUserInput("");
        }}
      >
        Add Task
      </button>
      {tasks.map((e, i) => {
        return <div key={i}>{e}</div>;
      })}
    </div>
  );
};
