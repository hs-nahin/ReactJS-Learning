import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("purple")

  return (
    <>
    <div className="w-full h-screen duration-200 ease-in-out" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* White */}
          <button onClick={ ()=> setColor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}>White</button>
          {/* Black */}
          <button onClick={ ()=> setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
          {/* Green */}
          <button onClick={ ()=> setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          {/* Red */}
          <button onClick={ ()=> setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          {/* Blue */}
          <button onClick={ ()=> setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue",}}>Blue</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
