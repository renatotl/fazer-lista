import "./NavBar.css"
import {Header} from "../Header/Header.jsx"
import {useState} from "react"


export function NavBar(){

  const [criarIsOpen, setCriarIsOpen] = useState(false);
  function handleCriar() {
    setCriarIsOpen(!criarIsOpen);
  }


  const [verId, setVerId] = useState(false);



  
  
    function handleValue2(){ 
      setVerId(!verId);
    }

    
   return (
       <>
    <nav className="nav">
        <ul className="ul" >
        <button  className="B" type="button" onChange={e => setCriarIsOpen(e.target.value)} onClick={handleCriar} >Criar Tarefa</button>
        </ul>
        <ul className="ul" >
        <button  className="B" type="button" onChange={e => setVerId(e.target.value)} onClick={handleValue2} >Achar por Id</button>
        </ul>
    </nav>
    <Header setCriar={criarIsOpen} setId={verId} />
    </>
   )
}