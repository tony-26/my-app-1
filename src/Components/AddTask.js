import _ from "lodash";
import { useState } from "react";

const AddTask = (props) => {
  const tasks = props.parentTasks;
  const setTasks = props.parentSetTasks;
  const [userInput, setUserInput] = useState("");
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
          if (userInput === "") return;
          const copyTask = _.cloneDeep(tasks);
          copyTask.push({ text: userInput, color: "black", isComplete: false });
          setTasks(copyTask);
          setUserInput("");
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
