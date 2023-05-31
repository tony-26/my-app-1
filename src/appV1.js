import React, { useState } from "react";

export const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(["do homework", "play game", "watch tv"]);
  return (
    <div>
      <h1>My page {input}</h1>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      ></input>
      <button
        onClick={() => {
          if (input.length > 0) {
            setTasks([...tasks, input]);
            setInput("");
          }
        }}
      >
        ADD
      </button>
      <h3>
        {tasks.map((e, i) => {
          return (
            <div key={i}>
              {e}
              <button
                onClick={() => {
                  const copy = [...tasks];
                  const newTasks = copy.slice(0, i).concat(copy.slice(i + 1));
                  setTasks(newTasks);
                }}
                style={{ border: "1px black solid ", backgroundColor: "red" }}
              >
                X
              </button>
            </div>
          );
        })}
      </h3>
    </div>
  );
};
