import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(10);
  const [number2, setNumber2] = useState(2);
  const [h1Color, setH1Color] = useState("red");
  const styleH1 = { color: h1Color, fontSize: "100px" };
  const [input, setInput] = useState("");

  return (
    <div>
      <h1 style={styleH1}>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber2(number2 + 2);
          setH1Color("green");
        }}
      >
        plus
      </button>

      <button
        onClick={() => {
          setNumber(number - 1);
          setNumber2(number2 - 2);
          setH1Color("red");
        }}
      >
        minus
      </button>
      <h1>{number2}</h1>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      >
        value = {input}
      </input>
      <button>Add value</button>
    </div>
  );
};

export default App;
