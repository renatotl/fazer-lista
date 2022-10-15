import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Load.css";




function Load() {
  const navigate = useNavigate();
  

  
  useEffect(() => {

    // o setTimeout deposi de 3 segundos redireciona a gente para a rota "/" que é a rota raiz
     setTimeout(() => {

       navigate("/Tela");
  

     }, 3000);
  });

  return (
    <div className="Loading">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Load;
