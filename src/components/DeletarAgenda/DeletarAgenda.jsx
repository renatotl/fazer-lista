import "./DeletarAgenda"
import React, {useState} from "react"
// import {agendas} from "../Mocks/agendas.js"
import {CardId} from "../CardId/CardId.jsx"
import {Api} from "../Utils/Api.js"



export function DeletarAgenda(){

 

    const [idi, setIdi] = useState([]);


    function twoHandle(){ 
        findByIdAgendaAndDelete()
      
    }

//    function handleId(){
//     const idComparado = agendas.findById(idi )

//     setIdi((prevState) => [...prevState, idComparado]);

//    }

//const response =  Api.agendaById((i) => i.id == id);


   const findByIdAgendaAndDelete = async () => {
    const input = document.querySelector('#inputId');//foi esse cara id="inputId"
    console.log(input)
    const id = input.value;
    console.log(id)
    const response = await Api.deleteAgenda(id);
    console.log(response)
    setIdi(response);

}




    return (
 <div className="container">
          <input className="IDD"  id="inputId" name="inputId" type="text" placeholder="Deletar por id:" onChange={(event) => setIdi(event.target.value)}></input>
           <button type="button" onClick={twoHandle}>Deletar</button>
           {
            <CardId text={idi.text} id={idi.id} />}
        </div>    
            
    )
}