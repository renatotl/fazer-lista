import "./TelaAzul.css"
import telaazul from "../../assets/telaazul.webp"
import { useNavigate } from "react-router-dom";
import {useEffect} from "react"
import salamisound from "../../assets/salamisound.mp3"



export function TelaAzul({telaAzul}){

    const navigate = useNavigate();



    function setTela(){
        if(telaAzul === 0){
            navigate("/")
        }
    }


    useEffect(() => {

      setTela()
      
      });
    
//onClick={() => navigate("/")}

  return(
    <div > 
  <img  className="telaazul"  src={telaazul} alt="telaAzul" />
  <audio autoPlay src={salamisound} type="audio/mp3" />

  </div>


  )


}