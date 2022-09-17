import  "./Header.css"
import {Criar} from "../Criar/Criar.jsx"
import {PegarId} from "../PegarId/PegarId.jsx"

export function Header({setCriar,setId}){
 


 

  const badgeCounter = (canRander) =>
  Boolean(canRander) && (<Criar/>);

  const badgeCounterId = (canRander) =>
  Boolean(canRander) && (<PegarId/>) ;


return (
 
    <header className="header">

      {badgeCounter(setCriar)}

      {badgeCounterId(setId)}

    </header>
)

}