import { useState } from 'react'
import './App.css';
import ConditionalRender from './ConditionalRender'

function App() {
const [header, setHeader] = useState('Please Log in')
// const [button, setButton] = useState()
return (
  <div className="App">
    <header className="App-header">
      {header
      ? <ConditionalRender header={header} />
      : <h1>Please login</h1>
      }
      <button onClick={() => setHeader('Welcome Back!')}>Login</button>
      <button onClick={() => setHeader('See you Later!')}>Logout</button>
    </header>
  </div>
);
}

export default App;
