import { useState } from "react";

const App = () => {
  const [arr, setArr] = useState("");
  const calculatingFunc = (arr) => {
    const firstDigit = "";
    const sign = "";
    const secondDigit = "";
    for (let i = 0; i < arr.length; i++) {
      // if (arr[i].){
      // }
    }
  };
  return (
    <div>
      <h1>Counting</h1>
      <button
        onClick={() => {
          setArr([...arr, 0]);
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          setArr([...arr, 1]);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setArr([...arr, 2]);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setArr([...arr, 3]);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setArr([...arr, 4]);
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          setArr([...arr, 5]);
        }}
      >
        5
      </button>
      <button
        onClick={() => {
          setArr([...arr, 6]);
        }}
      >
        6
      </button>
      <button
        onClick={() => {
          setArr([...arr, 7]);
        }}
      >
        7
      </button>
      <button
        onClick={() => {
          setArr([...arr, 8]);
        }}
      >
        8
      </button>
      <button
        onClick={() => {
          setArr([...arr, 9]);
        }}
      >
        9
      </button>
      <button
        onClick={() => {
          setArr([...arr, "+"]);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setArr([...arr, "-"]);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setArr([...arr, "*"]);
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          setArr([...arr, "/"]);
        }}
      >
        /
      </button>
      <button>=</button>
      <h2>{arr}</h2>
      {}
    </div>
  );
};
export default App;
