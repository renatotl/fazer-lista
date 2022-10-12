import "./CardAtualizar.css";
import {Api} from "../Utils/Api.js"
import React, {useState} from "react"

export function CardAtualizar(props) {

    const [idi, setIdi] = useState([]);



    function twoHandle(){ 
        updatingAgenda()
      
    }

  const updatingAgenda = async (props, texto) => {
    const input = document.querySelector("#inputId"); //foi esse cara id="inputId"
    console.log(input);
    const id = input.value;
    console.log(id);
    const response = await Api.updateAgenda(props.id, texto);
    console.log(response);
    setIdi(response);
  };

  return (
    <>
    <div className="mainCard">
      <div className="card">
        <strong>{props.text}</strong>
      </div>
      <div className="card2">
        <strong>{props.id}</strong>
      </div>
      </div>
      <input className="IDD"  id="inputId" name="inputId" type="text" placeholder="Novo texto:" onChange={(event) => setIdi(event.target.value)}></input>
      <div className="card2">
        <strong>{props.id}</strong>
      </div>
      <button type="button" onClick={twoHandle}>Atualizar</button>

      </>
  );
}
