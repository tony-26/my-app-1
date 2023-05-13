import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Heading from "./Components/Heading";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [tasks, setTasks] = useState([
    "Do the homework",
    "Eat",
    "Cleaning the house",
    "Turn on the light",
  ]);
  return (
    <div>
      <Heading headingColor={"red"} headingSize={"40px"} />
      <input
        style={{ height: "40px" }}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        value={userInput}
      />
      <button
        onClick={() => {
          setTasks([...tasks, userInput]);
          setUserInput("");
        }}
      >
        Add task
      </button>
      <h2>{userInput}</h2>
      {tasks.map((task, i) => {
        return (
          <div key={i}>
            {task}
            <button
              style={{
                height: "24px",
                width: "24px",
                backgroundColor: "grey",
                padding: "2px 5px",
              }}
              onClick={() => {
                const newTasks = [...tasks];
                newTasks.splice(i, 1);
                setTasks(newTasks);
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

export default App;
