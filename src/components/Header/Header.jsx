import  "./Header.css"
import {Criar} from "../Criar/Criar.jsx"
import {PegarId} from "../PegarId/PegarId.jsx"
// import {Card} from "../Card/Card.jsx"


export function Header({setCriar,setId, //setLista
}){
 


  const badgeCounter = (canRander) =>
  Boolean(canRander) && (<Criar/>);

  const badgeCounterId = (canRander) =>
  Boolean(canRander) && (<PegarId/>) ;

  // const badgeCounterLista = (canRander) =>
  // Boolean(canRander) && (<Card/>) ;

return (
 
    <header className="header">

      {badgeCounter(setCriar)}

      {badgeCounterId(setId)}

     {/* {badgeCounterLista(setLista)} */}

    </header>
)

}