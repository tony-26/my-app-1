import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [numColor, setNumColor] = useState("green");
  return (
    <div style={{ color: numColor }}>
      <button
        onClick={() => {
          if (num % 2 !== 0) {
            setNumColor("green");
          } else {
            setNumColor("red");
          }
          setNum(num + 1);
        }}
      >
        +
      </button>
      <h1>{num}</h1>
      <button
        onClick={() => {
          if (num % 2 !== 0) {
            setNumColor("green");
          } else {
            setNumColor("red");
          }
          setNum(num - 1);
        }}
      >
        -
      </button>
    </div>
  );
};
export default App;
