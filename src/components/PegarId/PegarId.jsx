import "./PegarId"
import React, {useState} from "react"
import {agendas} from "../Mocks/agendas.js"


export function PegarId(){

    const [idi, setIdi] = useState("");


    function twoHandle(){ 
        handleId()
      
    }

   function handleId(){
    const idComparado = agendas.findById(idi )

    setIdi((prevState) => [...prevState, idComparado]);

   }


    return (
 <div className="container">
          <input className="IDD" type="text" placeholder="Achar por Id:" onChange={(event) => setIdi(event.target.value)}></input>
           <button type="button" onClick={twoHandle}>Achar</button>
        </div>        
    )
}