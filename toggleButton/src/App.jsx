import { useState } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    
      <div className={toggle ? 'bg-blue-500' : 'bg-red-200'}>
        <button onClick={handleClick}>Toggle Button</button>
      </div>
    
  );
}

export default App;
