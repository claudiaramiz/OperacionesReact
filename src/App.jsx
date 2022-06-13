import React, { useState } from "react";

import "./App.css";

function App() {

  return (
    <div className="row">
      <div className="col-4">
      <input type="number" name="numberOne"></input>
      </div>
      <div className="col-4">
      <input type="number" name="numberTwo"></input>
      </div>
      <div className="col-4">
      <button name="btnSumar" >Sumar</button>
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

