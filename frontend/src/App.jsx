import { useState } from 'react'
import Sections from './components/Sections'
import "./App.css"
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(false)
  function clicker(){
    setCount(!count)
  }
  return (
    <>
    <Navbar/>
      <div className="app-container">
        <button className="fs-button" onClick={clicker}>FS</button>
        {count && <Sections/>}
      </div>
    </>
  )
}

export default App
