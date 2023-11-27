"use client";
import pet from "@/lib/victor.js";
import { useState } from "react";

export default function Home() {
  const [victor, setVictor] = useState(pet);

  

  function handleClick(){
    let clone = {...victor[0]};
    clone.id = victor.length + 1;
    setVictor([...victor, clone])
  }

  function handleChange(e){
    e.preventDefault();
    const chosenID = +e.target.value;
    let updatedArray = victor.filter((object)=> object.id !== chosenID)
    console.log(updatedArray)
    setVictor([...updatedArray]);
  }


  
  return (
    <main>
      <h1>Cloner</h1>
      <p>
        You will store your clones as an array of objects.<br/>
        You must utilize the Spread Operator to make your clones (...).<br/>
        The only thing about your clone (each object) that changes is the id.<br/>
        You can use Victor or your own pet's image.<br/>
      </p>

      <div id="container">
        {victor.map((goodBoy)=>{
          return (
              <div className="card" key={goodBoy.id}>
                <h3>{goodBoy.petName}</h3>
                <p>ID: {goodBoy.id}</p>
                <img src="/victor.png" alt="friendly dog" />
                <button onClick={handleClick}>Clone!</button>
              </div>
              )
            }
          )
        }
      </div>

      <h2>Use the filter method and a select box to remove the clones that didn't turn out right.</h2>

      <label>SELECT CLONE TO TERMINATE:</label>
      <select onChange={handleChange}>
        {victor.map((goodBoy)=>{
          return (
              <option value={goodBoy.id} key={goodBoy.id}>
                {goodBoy.id}
              </option>
              )
            }
          )
        }     
      </select>
    </main>
  );
}
