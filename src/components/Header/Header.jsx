import  "./Header.css"
import {Criar} from "../Criar/Criar.jsx"
import {PegarId} from "../PegarId/PegarId.jsx"
// import {Card} from "../Card/Card.jsx"
import { AtualizarAgenda } from "../AtualizarAgenda/AtualizarAgenda.jsx";

export function Header({setCriar,setId, setAtualizando//setLista
}){
 


  const badgeCounter = (canRander) =>
  Boolean(canRander) && (<Criar/>);

  const badgeCounterId = (canRander) =>
  Boolean(canRander) && (<PegarId/>) ;


  const badgeCounterAtualizar = (canRander) =>
  Boolean(canRander) && (<AtualizarAgenda/>) ;


  // const badgeCounterLista = (canRander) =>
  // Boolean(canRander) && (<Card/>) ;

return (
 
    <header className="header">

      {badgeCounter(setCriar)}

      {badgeCounterId(setId)}

      {badgeCounterAtualizar(setAtualizando)}


     {/* {badgeCounterLista(setLista)} */}

    </header>
)

}