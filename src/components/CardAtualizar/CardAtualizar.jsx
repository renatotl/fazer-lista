import "./CardAtualizar.css";
import {Api} from "../Utils/Api.js"
import React, {useState} from "react"

export function CardAtualizar(props) {

    const [idi, setIdi] = useState([]);



    function twoHandle(){ 
        updatingAgenda()
      
    }

  const updatingAgenda = async () => {
    const input = document.querySelector("#text"); //foi esse cara id="inputId"
    console.log(input);
    const texto = input.value;
    console.log(texto);
    const response = await Api.updateAgenda(props.id,texto);
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
      <input className="IDD"  id="text" name="inputId" type="text" placeholder="Novo texto:" onChange={(event) => setIdi(event.target.value)}></input>
      <div className="card2">
        <strong>{props.id}</strong>
      </div>
      <button type="button" onClick={twoHandle}>Atualizar</button>

      </>
  );
}
