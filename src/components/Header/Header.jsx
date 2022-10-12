import  "./Header.css"
import {Criar} from "../Criar/Criar.jsx"
import {PegarId} from "../PegarId/PegarId.jsx"
// import {Card} from "../Card/Card.jsx"
import { AtualizarAgenda } from "../AtualizarAgenda/AtualizarAgenda.jsx";
import { ActionMode } from "constants/index";
import {DeletarAgenda} from "../DeletarAgenda/DeletarAgenda.jsx"

export function Header({setCriar,setId, setAtualizando, mode,setDeletando//setLista
}){
 


  const badgeCounter = (canRander) =>
  Boolean(canRander) && (<Criar disabled={mode !== ActionMode.NORMAL}/>);



  const badgeCounterId = (canRander) =>
  Boolean(canRander) &&   (<PegarId disabled={mode !== ActionMode.NORMAL}/>) ;

// se o mode for diferente de NORMAL ele aciona o disable
  const badgeCounterAtualizar = (canRander) =>
  Boolean(canRander) && (< AtualizarAgenda disabled={mode !== ActionMode.NORMAL}/>) ;


  const badgeCounterDeletar = (canRander) =>
  Boolean(canRander) && (< DeletarAgenda disabled={mode !== ActionMode.NORMAL}/>) ;

  //disabled={mode !== ActionMode.NORMAL}

  const badgeAction = (canRander) => { 
  if(canRander) return (<span className="badAction"> {mode} </span>) ;
  }
  // const badgeCounterLista = (canRander) =>
  // Boolean(canRander) && (<Card/>) ;

return (
 
    <header className="header">
      {badgeAction(mode !== ActionMode.NORMAL)}

      {badgeCounter(setCriar)}

      {badgeCounterId(setId)}

      {badgeCounterAtualizar(setAtualizando)}

      {badgeCounterDeletar(setDeletando)}
     {/* {badgeCounterLista(setLista)} */}

    </header>
)

}