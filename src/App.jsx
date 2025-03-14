import { useState } from "react";
import './index.css';

function App() {

  const [color, setColor] = useState("#3b82f6")

  return <>
  <div className="w-full h-screen" style={{backgroundColor:color}}>
    <div className="fixed flex-wrap justify-center bottom-20 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-transparent">
          <button className="bg-red-600 text-black font-mono border-2 rounded-full m-0.5" onClick={() => setColor("red")}>RED</button>
          <button className="bg-purple-600 text-black font-mono border-2 m-0.5">PURPLE</button>
          <button className="bg-yellow-600 text-black font-mono border-2  m-0.5">YELLOW</button>
          <button className="bg-black text-white font-mono border-2 m-0.5">BLACK</button>
          <button className="bg-white text-black font-mono border-2 m-0.5">WHITE</button>
      </div>
    </div>
  </div>
  </>
}

export default App
