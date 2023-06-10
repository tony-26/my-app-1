import { useState } from "react";

const App = () => {
  const [firstDigit, setFirstDigit] = useState(0);
  const [sign, setSign] = useState("");
  return (
    <div>
      <h1>Counting</h1>
      <button
        onClick={() => {
          setFirstDigit(0);
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          setFirstDigit(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setFirstDigit(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setFirstDigit(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setFirstDigit(4);
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          setFirstDigit(5);
        }}
      >
        5
      </button>
      <button
        onClick={() => {
          setFirstDigit(6);
        }}
      >
        6
      </button>
      <button
        onClick={() => {
          setFirstDigit(7);
        }}
      >
        7
      </button>
      <button
        onClick={() => {
          setFirstDigit(8);
        }}
      >
        8
      </button>
      <button
        onClick={() => {
          setFirstDigit(9);
        }}
      >
        9
      </button>
      <button
        onClick={() => {
          setSign("+");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setSign("-");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setSign("*");
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          setSign("/");
        }}
      >
        /
      </button>
      <h2>{firstDigit}</h2>
      <h2>{sign}</h2>
      
    </div>
  );
};
export default App;
