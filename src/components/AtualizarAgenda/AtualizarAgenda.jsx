import "./AtualizarAgenda"
import React, {useState} from "react"
// import {agendas} from "../Mocks/agendas.js"
import {CardAtualizar} from "../CardAtualizar/CardAtualizar.jsx"
import {Api} from "../Utils/Api.js"



export function AtualizarAgenda(){

 

    const [idi, setIdi] = useState([]);


    function twoHandle(){ 
        updatingAgenda()
      
    }

//    function handleId(){
//     const idComparado = agendas.findById(idi )

//     setIdi((prevState) => [...prevState, idComparado]);

//    }

//const response =  Api.agendaById((i) => i.id == id);


//    const updatingAgenda = async () => {
//     const input = document.querySelector('#inputId');//foi esse cara id="inputId"
//     console.log(input)
//     const id = input.value;
//     console.log(id)
//     const response = await Api.updateAgenda(id);
//     console.log(response)
//     setIdi(response);

// }


const findByIdAgenda = async () => {
    const input = document.querySelector('#inputId');//foi esse cara id="inputId"
    console.log(input)
    const id = input.value;
    console.log(id)
    const response = await Api.getAgendaById(id);
    console.log(response)
    setIdi(response);

}




    return (
 <div className="container">
          <input className="IDD"  id="inputId" name="inputId" type="text" placeholder="Atualizar por Id:" onChange={(event) => setIdi(event.target.value)}></input>
           <button type="button" onClick={twoHandle}>Achar</button>
           {
            <CardAtualizar text={idi.text} id={idi.id} />}
        </div>    
            
    )
}