
import {Header} from "./components/Header/Header.jsx"
import {NavBar} from "./components/NavBar/NavBar.jsx"
// import {agendas} from "./components/Mocks/agendas"
// import {Card} from "./components/Card/Card.jsx"
import { ActionMode } from "constants/index";
import {useState} from "react"

export function App() {

//o valor inicial é a ActionMode.NORMAL que foi importada
const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

const handleActions = (action) => {
  // o ActionMode vem por parâmetro e compara se for diferente ele muda o valor
  const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
  setModoAtual(novaAcao);// se ele receber atualizar ele altera o state 
  
};


    return (
        <> 
        <NavBar 
         mode={modoAtual}
         modeAtualizar={() => handleActions(ActionMode.ATUALIZAR)}
         />
        <Header/>
        {/* {setAgendaCompleta.map((props) => (
           <Card className="myAgenda" key={`myAgenda ${props.id}`} text={props.text} id={props.id} />
           ))} */}
        </>
           )
}