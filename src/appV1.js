import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const initialTasks = [
    "Clean my room.",
    "Dinner is prepared.",
    "Doing Joe's homework.",
    "Doing dishes.",
    "Washing clothes.",
  ];

  const [userInput, setUserInput] = useState("");
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <div className="App">
      <h1>My Tasks</h1>
      <input
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        value={userInput}
      ></input>
      <button
        onClick={() => {
          const newTasks = [...tasks];
          newTasks.push(userInput);
          setTasks(newTasks);
          setUserInput("");
        }}
      >
        Add Task
      </button>
      <h2>{userInput}</h2>
      {tasks.map((e, i) => {
        return <div key={i}>{e} </div>;
      })}
    </div>
  );
};

export default App;
