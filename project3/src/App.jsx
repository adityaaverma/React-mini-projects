import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [show,setShow]=useState("");

  return (
    <>
        <p>{show}</p>
        <form>
          <input type="text" value={show} onChange={(e)=>setShow(e.target.value)}></input>
        </form>
    </>
  )
}

export default App
