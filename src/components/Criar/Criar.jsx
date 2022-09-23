import "./Criar.css"
import React, {useState} from "react"
import {agendas} from "../Mocks/agendas.js"// meus dados mocadks
import {Card} from "../Card/Card.jsx"
// import { AgendaService } from "../../Services/AgendaService.js";

// import {App} from "../../App.js"
//O useEffect controla o ciclo de vida dos components 

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


//   useEffect(() => {
//     getLista();
//   }, []);



// function getLista(){
//   let variavelmente = 1
// }




  /*

////// códigos da Api em baixo


  //a função setAgendas altera o state
  //code de substituição do mocks
  const [agendas, setAgendas] = useState([]);
  //code de substituição do mocks




//função async da Api
  const getLista = async () => {
    //a unção getLista está no meu arquivo Api
    const response = await AgendaService.getLista();
    setAgendas(response);
  };
  // quando o componente for renderizado na tela o useEffect vai renderizar nosso getLista
// primeiro parametro é a função e o segundo um array vazio para não virar um loop
  useEffect(() => {
    getLista();
  }, []);


  // * Usando o hook useEffect informamos ao React que o componente precisa executar algo apenas após sua renderização. O React irá se encarregar de chamar a função passada a ele depois de realizar as atualizações do DOM


*/

    return (
      
        <div className="container">
          <input className="ID" type="text" placeholder="Digite um ID:" onChange={(event) => setIdTask(event.target.value)}></input>
           <input type="text" placeholder="Qual a tarefa do dia?" onChange={(event) => setAgendaTask(event.target.value)}></input>
           <button type="button" onClick={twoHandle}>Adicionar</button>
           { agenda.map((props) => (
           <Card className="myAgenda" key={`myAgenda ${props.id}`} text={props.text} id={props.id} />
           ))}
        </div>
    
    
    )
  
}

// a mynga chave desse elemento é o props.id da lista. Ele atribui a cada elemento renderisado na tela um id uma identificação. Com isso o react vai saber quem eu estou manipulando