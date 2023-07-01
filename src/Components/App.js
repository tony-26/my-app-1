import React, { useState } from "react";
import "./App.css";
import _, { initial } from "lodash";
import AddTask from "./AddTask";
import Task from "./Task";
import TaskList from "./TaskList";
import StatusFilter from "./StatusFilter";
import ColorsFilter from "./ColorsFilter";
import { filterByColorStatus } from "../Functions/filteringTasks";

const App = () => {
  const initialTasks = [
    { text: "Play football", color: "blue", isComplete: true },
    { text: "Watch TV", color: "black", isComplete: false },
    { text: "Do Homework", color: "red", isComplete: false },
    { text: "open window", color: "black", isComplete: false },
    { text: "watch film", color: "black", isComplete: true },
    { text: "listen to music", color: "black", isComplete: true },
  ];
  const [tasks, setTasks] = useState(initialTasks);
  const [filterStatus, setFilterStatus] = useState("all"); // "active" ,"completed"

  const [selectedColors, setSelectedColors] = useState([]);
  const filterTasks = filterByColorStatus(tasks, filterStatus, selectedColors);

  return (
    <div>
      <AddTask parentTasks={tasks} parentSetTasks={setTasks} />
      <StatusFilter
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      <ColorsFilter
        selectedColors={selectedColors}
        setSelectedColors={setSelectedColors}
      />
      <TaskList tasks={filterTasks} setTasks={setTasks} />
    </div>
  );
};
export default App;
