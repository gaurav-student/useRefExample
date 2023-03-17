import "./styles.css";
import { useState, useRef } from "react";
export default function App() {
  const [data, setData] = useState("");
  const input = useRef();
  function inputstylechange() {
    input.current.style.backgroundColor = "pink";
    input.current.focus();
  }
  return (
    <div className="App">
      <input
        type="text"
        ref={input}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={inputstylechange}>Submit</button>
    </div>
  );
}
