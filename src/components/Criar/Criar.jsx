import "./Criar.css"
import {useState} from "react"
import {agendas} from "../Mocks/agendas.js"
import {Card} from "../Card/Card.jsx"
// import {App} from "../../App.js"



export function Criar(){

  const [agendaTask, setAgendaTask] = useState("");

  const  [agenda, setAgenda] = useState(agendas);


  
  function twoHandle(){ 
    handleAddAgenda()
    
  }

  function handleAddAgenda() {
    const novaAgenda = {
      id: novoId,
      text: agendaTask   
    } 
    // [...prevState, novaAgenda] o primeiro é o valor atual e o segundo é o que vai substituir
    setAgenda((prevState) => [...prevState, novaAgenda]);

  }

  const [novoId, setIdTask] = useState("");


  

    return (
        <div className="container">
          <input className="ID" type="text" placeholder="Digite um ID:" onChange={(event) => setIdTask(event.target.value)}></input>
           <input type="text" placeholder="Qual a tarefa do dia?" onChange={(event) => setAgendaTask(event.target.value)}></input>
           <button type="button" onClick={twoHandle}>Adicionar</button>
           {agenda.map((props) => (
           <Card className="myAgenda" key={`myAgenda ${props.id}`} text={props.text} id={props.id} />
           ))}
        </div>
    
    )
  
}

// a mynga chave desse elemento é o props.id da lista. Ele atribui a cada elemento renderisado na tela um id uma identificação. Com isso o react vai saber quem eu estou manipulando