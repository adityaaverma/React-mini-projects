import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState("olive")
  // function changeColor(color) {
  //   setcolor(color)
  // }
  return (
    <>
      <div className='w-full h-screen duration-200 bg-black' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button
            style={{backgroundColor:"red"}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            onClick={()=>setColor("red")}
            >RED</button>
            <button
            style={{backgroundColor:"blue"}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            onClick={()=>setColor("blue")}
            >BLUE</button>
            <button
            style={{backgroundColor:"orange"}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            onClick={()=>setColor("orange")}
            >Orange</button>
            <button
            style={{backgroundColor:"violet"}}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            onClick={()=>setColor("violet")}
            >Violet</button>
          </div>
        </div>
      </div>
    </>
      
  )
}

export default App
