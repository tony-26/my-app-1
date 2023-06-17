import React, { useState } from "react";
import "./App.css";
import _, { initial } from "lodash";
import AddTask from "./AddTask";
import Task from "./Task";

const App = () => {
  const initialTasks = [
    { text: "Play football", color: "blue", isComplete: true },
    { text: "Watch TV", color: "black", isComplete: false },
  ];
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <div>
      {/* <input
        type="checkbox"
        value="complete"
        onChange={() => {
          const newArr = [];
          for (let i = 0; i < initialTasks.length; i++) {
            if (initialTasks[i].isComplete === true) {
              newArr.push(initialTasks[i]);
            }
          }
          setTasks(newArr);
        }}
      ></input> */}

      <AddTask parentTasks={tasks} parentSetTasks={setTasks} />
      {tasks.map((e, i) => {
        return (
          <Task key={i} task={e} i={i} tasks={tasks} setTasks={setTasks} />
        );
      })}
    </div>
  );
};
export default App;
