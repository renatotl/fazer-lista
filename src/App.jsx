import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./views/Home/Home.jsx";
import Load from "./views/Load/Load";
import {TelaAzul} from "./components/TelaAzul/TelaAzul";
import {useState} from "react"


// retorna <BrowserRouter> como se fosse  o container o Route é cada rota individualmente 

// "path" é o caminho e qual é esse caminha é o: "/". Quando ele vai renderizr quando acessar  "/" localhost:3000? ele vai renderizar  o componente <Home />
function App() {

const [telaAzul,setTelaAzul]= useState(0)


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setTelaAzul={setTelaAzul} />} />
        <Route path="/load" element={<Load />} />
        <Route path="/Tela" element={<TelaAzul telaAzul={telaAzul} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
