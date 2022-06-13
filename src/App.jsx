import React, { useState } from "react";

import "./App.css";
import "./bootstrap.min.css";

function App() {

  const [number, setNumber] = useState({one: 0, two: 0})
  const [suma, setSuma] = useState()


  const handleInput = (event) => {
    const { name, value } = event.target
    setNumber({...number, [name]: value})
  }

  return (
    <div className="card">
      <div className="card-body">
      <input className="input" onChange={handleInput} name="one" value={number.one} placeholder="Ingesa un numero"/>
      </div>
      <div className="card-body">
      <input className="input" onChange={handleInput} name="two" value={number.two} placeholder="Ingesa un numero"/>
      </div>
      <div className="col-4">
      <button name="btnSumar" onClick={()=>{
        const { one, two } = number
        setSuma(Number(one) + Number(two))
      }}>Sumar</button>
      </div>
      <div className="col-4">
      <button name="btnRestar"onClick={()=>{
        const { one, two } = number
        setSuma(Number(one) - Number(two))
      }}>Restar</button>
      </div>
      <div className="col-4">
      <button name="btnMultiplicar"onClick={()=>{
        const { one, two } = number
        setSuma(Number(one) * Number(two))
      }}>Multiplicar</button>
      </div>
      <div className="col-4">
      <button name="btnDividir"onClick={()=>{
        const { one, two } = number
        setSuma(Number(one) / Number(two))
      }}>Dividir</button>
      </div>
      <div className="card-body"><input value={suma}/></div>
      
    </div>
  )

}

export default App;

