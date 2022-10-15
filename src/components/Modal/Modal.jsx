import "./Modal.css";
import Overlay from "components/Overlay/Overlay";
//import ReactPlayer from 'react-player'
import ha from "../../assets/video/ha.mp4"
import saw from "../../assets/saw.mp3"

//<iframe? tag pra gif
//>*


// o closeModa no Overlay é overlayClick
function Modal({ children, closeModal, handdleMode}) {
    //primeiro prametro e evento de click e o segundo é um boleano true e false 

 


  // o handleClick é responsavel se o modal vai ser fechado ou não
  return (
    <Overlay overlayClick={() => handdleMode()}>
      <div  onClick={() => handdleMode()}>
<video autoPlay loop controls className="Modal">
  <source src={ha} type="video/mp4" className="Modal"/>
</video>
       <audio autoPlay src={saw} type="audio/mp3" >

       </audio>
      </div>
    </Overlay>
  );
}

export default Modal;

/* VIDEO
autoPlay: inicia o vídeo de início
loop: faz o vídeo iniciar novamente assim que terminar loop
*/

/*

o HandleClick vai ser acionado por um evento de click por isso o "e" true vai para canClose. Quando clickar no sinal de + ele envia true para canClose
<span className="Modal__close" onClick={(e) => handleClick(e, true)}>




      <ReactPlayer type="video/ha.mp4" src={require("../../assets/video/ha.mp4") } />

    */



/*  Event bubbling relaciona-se com a ordem na qual os manipuladores de eventos são chamados quando um elemento está aninhado dentro de um segundo elemento e ambos os elementos registram um ouvinte para o mesmo evento, como o de clique. */

