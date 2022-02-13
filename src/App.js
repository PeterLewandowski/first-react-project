import { useState } from "react";
import "./App.css";
import ConditionalRender from "./ConditionalRender";

function App() {
  const [header, setHeader] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1> {header ? "Welcome back!" : "Please login..."}</h1>

        {header ? (
          <button onClick={() => setHeader(false)}>Logout</button>
        ) : (
          <button onClick={() => setHeader(true)}>Login</button>
        )}

        {header && <ConditionalRender />}
      </header>
    </div>
  );
}

export default App;
