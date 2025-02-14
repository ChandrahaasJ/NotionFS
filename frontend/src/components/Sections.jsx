import React from 'react'
import { useState } from 'react'
import "./sections.css";
export default function Sections() {
    const [elite,setElite]=useState(false)
    const [a1,setA1]=useState(false)
    const [a2,setA2]=useState(false)
    const [b,setB]=useState(false)
    function eliteClicker(){
        setElite(!elite)
    }
    function a1Clicker(){
        setA1(!a1)
    }
    function a2Clicker(){
        setA2(!a2)
    }
    function bClicker(){
        setB(!b)
    }
  return (
    <div className="sections-container">
        <div >
            <button className="elite-button" onClick={eliteClicker}>Elite</button>
            <button className="a1-button" onClick={a1Clicker}>A1</button>
            <button className="a2-button" onClick={a2Clicker}>A2</button>
            <button className="b-button" onClick={bClicker}>B</button>
        </div>
        
    </div>
  )
}
