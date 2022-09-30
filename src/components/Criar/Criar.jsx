import "./Criar.css"
import React, {useState, useEffect} from "react"
//import {agendas} from "../Mocks/agendas.js"// meus dados mocadks
import {Card} from "../Card/Card.jsx"
import {Api} from "../Utils/Api.js"
// import {App} from "../../App.js"
//O useEffect controla o ciclo de vida dos components 



export function Criar(){

  // useSte do texto
  const [agendaTask, setAgendaTask] = useState();

// useState do id
  const [novoId, setIdTask] = useState("");

  // useState que junta tudo
  const  [agenda, setAgenda] = useState();

// useState do getLista
   const  [agendaLista, setAllAgendas] = useState([]);


  
  // função que foi executada no button
  function twoHandle(){ 
    //função que monta o texto com id
    handleAddAgenda()
    // função que salva na Api
    handleCreate()
    //função do getLista
    // getAgendas()
  }



    //função que monta o texto com id
  function handleAddAgenda() {
    const novaAgenda = {
      id: novoId,
      text: agendaTask   
    } 
    // [...prevState, novaAgenda] o primeiro é o valor atual e o segundo é o que vai substituir
    
    setAgenda(novaAgenda);

  }

  useEffect(() => {
    getAgendas();
  },[]);

  async function getAgendas() {
    const agendas = await Api.getAllAgendas();
    console.log(agendas)
    setAllAgendas(agendas);
  }
  
  //função de savar agenda
  const handleCreate = async () => { 
    await Api.createAgenda(agenda);
    console.log(agenda)
  };


  /*
////// códigos da Api em baixo

//função async da Api
  const getLista = async () => {
    //a unção getLista está no meu arquivo Api
    const response = await AgendaService.getLista();
    setAgendas(response);
  };
  // quando o componente for renderizado na tela o useEffect vai renderizar nosso getLista
// primeiro parametro é a função e o segundo um array vazio para não virar um loop
 

*/
  // * Usando o hook useEffect informamos ao React que o componente precisa executar algo apenas após sua renderização. O React irá se encarregar de chamar a função passada a ele depois de realizar as atualizações do DOM


    return (
      
        <div className="container">
          <input className="ID" type="text" placeholder="Digite um ID:" onChange={(event) => setIdTask(event.target.value)}></input>
           <input type="text" placeholder="Qual a tarefa do dia?" onChange={(event) => setAgendaTask(event.target.value)}></input>
           <button type="button" onClick={twoHandle}>Adicionar</button>
           {agendaLista.map((props,index) => (
           <Card className="myAgenda" key={`myAgenda ${index}`} text={props.text} id={props.id} />
           ))}
        </div>
    
    
    )
  
}

// a mynga chave desse elemento é o props.id da lista. Ele atribui a cada elemento renderisado na tela um id uma identificação. Com isso o react vai saber quem eu estou manipulando