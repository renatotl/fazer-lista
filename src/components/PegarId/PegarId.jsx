import "./PegarId"
import React, {useState} from "react"
// import {agendas} from "../Mocks/agendas.js"
import {CardId} from "../CardId/CardId.jsx"
// import {Api} from "../../Helpers/Api.js"

//  import {Api} from "../../Helpers/Api.js"


export function PegarId(){

 

    const [idi, setIdi] = useState({});


    function twoHandle(){ 
        findByIdAgenda()
      
    }

//    function handleId(){
//     const idComparado = agendas.findById(idi )

//     setIdi((prevState) => [...prevState, idComparado]);

//    }

//const response =  Api.agendaById((i) => i.id == id);


   const findByIdAgenda = async () => {
    const input = document.querySelector('#inputId');//foi esse cara id="inputId"
    console.log(input)
    const id = input.value;
    console.log(id)
    //const response = await .agendaById(id);
    //console.log(response)
    //setIdi(response);
//    <CardId  />
}




    return (
 <div className="container">
          <input className="IDD"  id="inputId" name="inputId" type="text" placeholder="Achar por Id:" onChange={(event) => setIdi(event.target.value)}></input>
           <button type="button" onClick={twoHandle}>Achar</button>
           {
            <CardId text={idi.text} id={idi.id} />}
        </div>    
            
    )
}