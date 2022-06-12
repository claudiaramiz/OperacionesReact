import React, { useState } from "react";

import "./App.css";



function App() {

  /* const [counter, setCounter] = useState(0);

  const [person, setPerson] = useState({

    name: "John",

    lastName: "Doe",

    age: 30,

    favouriteFood: "Pizza",

    favouriteColour: "Red",

    counter: 0,

  });

  return (

    <div className="App">

      <h1 className="text-blue">{`${person.name} ${person.lastName}`}</h1>

      <h1 className="text-blue">{`age ${person.age}`}</h1>

      <h1 className="text-blue">{`favouriteFood ${person.favouriteFood}`}</h1>

      <h1 className="text-blue">{`favouriteColour ${person.favouriteColour}`}</h1>

      {/* <input type="number" name="firstNumber" />

      <input type="number" name="secondNumber" /> */}
/*
      <button

        onClick={() => {

          setPerson((current) => ({

            ...current,

            counter: current.counter + 1,

          }));

        }}

      >

        Sumar

      </button>

      <button

        onClick={() => {

          setPerson((current) => ({

            ...current,

            counter: current.counter - 1,

          }));

        }}

      >

        Restar

      </button>

      <h1 className="text-red">counter: {person.counter}</h1>

    </div>

  );

}



export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*/


import React, { useState } from "react";
import "./App.css";

function App() {

  const [people, setPeople] = useState([
    {
      name: "John",
      lastName: "Doe",
      age: 30,
      favouriteFood: "Pizza",
      favouriteColour: "Red",
      counter: 0,
    },
  ]);

  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        name="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        name="lastName"
        onChange={(event) => {
          setLastname(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setPeople((current) => [{ name, lastName }, ...current]);
        }}
      >
        Add user
      </button>
      <ul>
        {people.map((person, idx) => (
          <li id={idx}>{`${person.name} ${person.lastName}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

