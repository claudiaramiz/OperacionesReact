import React, { useState } from "react";

import "./App.css";

function App() {

  const [number, setNumber] = useState({one: 0, two: 0})
  const [suma, setSuma] = useState()


  const handleInput = (event) => {
    const { name, value } = event.target
    setNumber({...number, [name]: value})
  }

  return (
    <div className="row">
      <div className="col-4">
      <input className="input" onChange={handleInput} name="one" value={number.one} placeholder="Ingesa un numero"/>
      <input className="input" onChange={handleInput} name="two" value={number.two} placeholder="Ingesa un numero"/>
      <input value={suma}/>
      </div>
      <div className="col-4">
      <button name="btnSumar" onClick={()=>{
        const { one, two } = number
        setSuma(Number(one) + Number(two))
      }}>Sumar</button>
      </div>
      <div className="col-4">
      <button name="btnRestar">Restar</button>
      </div>
      <div className="col-4">
      <button name="btnMultiplicar">Multiplicar</button>
      </div>
      <div className="col-4">
      <button name="btnDividir">Dividir</button>
      </div>
      <div className="col-4">
      <label>Total</label>
      </div>
    </div>
  )

}

export default App;

