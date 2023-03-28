
import React from "react";
import useLocalStorage from "./src/useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <h2>Hello, {name || "friend"}!</h2>
    </div>
  );
}

export default App;
