import "./Criar.css"
import {useState} from "react"
import {agendas} from "../Mocks/agendas.js"
import {Card} from "../Card/Card.jsx"

export function Criar(){

  const [agendaTask, setAgendaTask] = useState("");

  const  [agenda, setAgenda] = useState(agendas);


  
  function twoHandle(){ 
    handleAddAgenda()
    // handleId()
  }

  function handleAddAgenda() {
    const novaAgenda = {
      id: novoId,
      text: agendaTask   
    }
    setAgenda((prevState) => [...prevState, novaAgenda]);

  }

  const [novoId, setIdTask] = useState("");


  // function handleId(){
  //   const novoId = {
  //     id: IdTask
  //   }
  //   setAgenda((prevState) => [...prevState, novoId]);

  // }

    return (
        <div className="container">
          <input classNmae="ID" type="text" placeholder="Digite um ID:" onChange={(event) => setIdTask(event.target.value)}></input>
           <hi className="h1">Agenda</hi>
           <input type="text" placeholder="Qual a tarefa do dia?" onChange={(event) => setAgendaTask(event.target.value)}></input>
           <button type="button" onClick={twoHandle}>Adicionar</button>
           {agenda.map((props) => (
           <Card text={props.text} id={props.id} />
           ))}
        </div>
    
    )
  
}