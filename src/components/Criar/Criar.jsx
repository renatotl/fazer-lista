import "./Criar.css"
import React, {useState, useEffect} from "react"
//import {agendas} from "../Mocks/agendas.js"// meus dados mocadks
import {Card} from "../Card/Card.jsx"
import {Api} from "../Utils/Api.js"
// import {App} from "../../App.js"



export function Criar(){

  // useSte do texto
  const [agendaTask, setAgendaTask] = useState("");

// useState do id
  const [novoId, setIdTask] = useState("");

  // useState que junta tudo
  const  [agenda, setAgenda] = useState();

// useState do getLista
   const  [agendaLista, setAllAgendas] = useState([]);



   
    //função que monta o texto com id
  function handleAddAgenda() {
    const novaAgenda = {
      id: novoId,
      text: agendaTask   
    } 
    // [...prevState, novaAgenda] o primeiro é o valor atual e o segundo é o que vai substituir
    
    setAgenda(novaAgenda);

  }


//O useEffect controla o ciclo de vida dos components 
  useEffect(() => {
    getAgendas();
  },[agendaLista]);//pasamos o useState do getAll aqui assim toda vez que eu add uma nova tarefa aparecerá automaticamente no lista sem precisar recarregar a página ou fechar e abrir novamente o componente.

  async function getAgendas() {
    const agendas = await Api.getAllAgendas();
    console.log(agendas)
    setAllAgendas(agendas);
  }
  

  /*
  // quando o componente for renderizado na tela o useEffect vai renderizar nosso getLista
// primeiro parametro é a função e o segundo um array vazio para não virar um loop
 

*/
  // * Usando o hook useEffect informamos ao React que o componente precisa executar algo apenas após sua renderização. O React irá se encarregar de chamar a função passada a ele depois de realizar as atualizações do DOM



   // função que foi executada no button
  function twoHandle(){ 
    //função que monta o texto com id
    handleAddAgenda()
    // função que salva na Api

    handleCreate()

    //função do getLista
    // getAgendas()
  }
 


   //função de savar agenda
   const handleCreate = async () => { 
    if(agenda !== undefined){ // o primeiro click no body mandava undefined só o segundo que vinha valor
    await Api.createAgenda(agenda);
    console.log(agenda)
    }
  };

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
//nossa key foi colocada de forma correta 

// a mynga chave desse elemento é o props.id da lista. Ele atribui a cada elemento renderisado na tela um id uma identificação. Com isso o react vai saber quem eu estou manipulando