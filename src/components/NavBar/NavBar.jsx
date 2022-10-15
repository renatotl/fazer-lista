import "./NavBar.css";
import { Header } from "../Header/Header.jsx";
import { useState } from "react";
import { ActionMode } from "constants/index";
import Modal from "components/Modal/Modal";
import Load from "../../views/Load/Load";

export function NavBar({
  modeAtualizar,
  mode,
  modeDeletar,
  modePorId,
  modeCriar,
  setTelaAzul,
}) {
  const [openCaution, setCaution] = useState(false);
  function handdleCaution() {
    const set = openModal ? false : true;
    //alert(set)
    setCaution(set);
  }

  const [openModal, setOpenModal] = useState(false);
  function handdleMode() {
    const set = openModal ? false : true;
    //alert(set)
    setOpenModal(set);
  }

  function handdleFor() {
    modePorId();
    handleValue2();
    console.log(mode);
  }

  function handdleThree() {
    modeDeletar();
    handleDeletar();
    console.log(mode);
  }

  function handdleTwo() {
    modeAtualizar();
    handleAtualizar();
    console.log(mode);
  }

  function handdleOne() {
    modeCriar();
    handleCriar();
    console.log(mode);
  }

  const [criarIsOpen, setCriarIsOpen] = useState(false);
  function handleCriar() {
    setCriarIsOpen(!criarIsOpen);
  }

  const [verId, setVerId] = useState(false);
  function handleValue2() {
    setVerId(!verId);
  }

  const [atualizar, setAtualizar] = useState(false);
  function handleAtualizar() {
    setAtualizar(!atualizar);
  }

  const [deletar, setDeletar] = useState(false);
  function handleDeletar() {
    setDeletar(!deletar);
  }

  // useEffect(() => {
  //   updateAgenda()
  // }, []);

  // const [verLista, setVerLista] = useState(false);
  // function handleValue3(){
  //   setVerLista(!verLista);
  // }

  return (
    <>
      <nav className="nav">
        <ul className="ul">
          <button
            disabled={
              mode === ActionMode.DELETAR ||
              mode === ActionMode.PORID ||
              mode === ActionMode.ATUALIZAR
            }
            className="B"
            type="button"
            onChange={(e) => setCriarIsOpen(e.target.value)}
            onClick={handdleOne}
          >
            Criar Tarefa
          </button>
        </ul>
        <ul className="ul">
          <button
            disabled={
              mode === ActionMode.DELETAR ||
              mode === ActionMode.CRIAR ||
              mode === ActionMode.ATUALIZAR
            }
            className="B"
            type="button"
            onChange={(e) => setVerId(e.target.value)}
            onClick={handdleFor}
          >
            Achar por Id
          </button>
        </ul>
        <ul className="ul">
          <button
            disabled={
              mode === ActionMode.DELETAR ||
              mode === ActionMode.CRIAR ||
              mode === ActionMode.PORID
            }
            className={`B ${mode === ActionMode.ATUALIZAR && "Agenda--ativa"}`}
            type="button"
            onChange={(e) => setAtualizar(e.target.value)}
            onClick={handdleTwo}
          >
            Atualizar
          </button>
        </ul>
        <ul className="ul">
          <button
            disabled={
              mode === ActionMode.ATUALIZAR ||
              mode === ActionMode.CRIAR ||
              mode === ActionMode.PORID
            }
            className={`B ${mode === ActionMode.DELETAR && "Agenda--ativa-D"}`}
            type="button"
            onChange={(e) => setAtualizar(e.target.value)}
            onClick={handdleThree}
          >
            Deletar
          </button>
        </ul>
        <ul className="ul">
          <button
            disabled={
              mode === ActionMode.ATUALIZAR ||
              mode === ActionMode.CRIAR ||
              mode === ActionMode.PORID ||
              mode === ActionMode.DELETAR
            }
            className="B"
            onClick={handdleMode}
          >
            Não cliaque aqui!
          </button>
        </ul>
        <ul className="ul">
          <button
            disabled={
              mode === ActionMode.ATUALIZAR ||
              mode === ActionMode.CRIAR ||
              mode === ActionMode.PORID ||
              mode === ActionMode.DELETAR
            }
            className="B"
            onClick={() => {
              handdleCaution();
              setTelaAzul(1);
            }}
          >
            Caution!
          </button>
        </ul>

        {/* <ul className="ul" >
        <button  className="B" type="button" onChange={e => setVerId(e.target.value)} onClick={handleValue3} >Lista de Taferas</button>
        </ul> */}
      </nav>
      {openModal ? <Modal handdleMode={handdleMode} /> : <></>}
      {openCaution ? <Load handdleMode={handdleCaution} /> : <></>}

      <Header
        setCriar={criarIsOpen}
        setId={verId} //setLista={verLista}
        setAtualizando={atualizar}
        setDeletando={deletar}
      />
    </>
  );
}
