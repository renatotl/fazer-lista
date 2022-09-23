import "./NavBar.css"
import {Header} from "../Header/Header.jsx"
import {useState,useEffect} from "react"


export function NavBar(){

  const [criarIsOpen, setCriarIsOpen] = useState(false);
  function handleCriar() {
    setCriarIsOpen(!criarIsOpen);

  }

  const [verId, setVerId] = useState(false); 
    function handleValue2(){ 
      setVerId(!verId);

    }


    useEffect(() => {
  
    }, []);






    // const [verLista, setVerLista] = useState(false);
    // function handleValue3(){ 
    //   setVerLista(!verLista);
    // }
    



   return (
       <>
    <nav className="nav">
        <ul className="ul" >
        <button  className="B" type="button" onChange={e => setCriarIsOpen(e.target.value)} onClick={handleCriar} >Criar Tarefa</button>
        </ul>
        <ul className="ul" >
        <button  className="B" type="button" onChange={e => setVerId(e.target.value)} onClick={handleValue2} >Achar por Id</button>
        </ul>
        {/* <ul className="ul" >
        <button  className="B" type="button" onChange={e => setVerId(e.target.value)} onClick={handleValue3} >Lista de Taferas</button>
        </ul> */}
    </nav>
    <Header setCriar={criarIsOpen} setId={verId} //setLista={verLista}
     />
    </>
   )
}